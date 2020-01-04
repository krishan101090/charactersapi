import React, { Component } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import Switch from "@material-ui/core/Switch"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormGroup from "@material-ui/core/FormGroup"
import FormControl from "@material-ui/core/FormControl"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import FormLabel from "@material-ui/core/FormLabel"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import store from "../../store"
import { getCharDataBegin } from "../../actions/getChar"
import Character from "../Character/Character"

class Characters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      species: "",
      gender: "",
      characters: [],
      ascending: true,
      genders: [
        { id: 1, value: "female", isChecked: false },
        { id: 2, value: "male", isChecked: false },
        { id: 3, value: "genderless", isChecked: false },
        { id: 4, value: "unknown", isChecked: false }
      ],
      allSpecies: [
        { id: 1, value: "human" },
        { id: 2, value: "alien" },
        { id: 3, value: "Humanoid" }
      ]
    }
  }

  componentDidMount() {
    store.dispatch(getCharDataBegin())
  }

  static getDerivedStateFromProps(props) {
    const { data } = props
    if (props) {
      return {
        characters: data.results,
        pages: data.info && data.info.pages
      }
    }
    return null
  }

  handleChangeSort = () => {
    const { characters, ascending } = this.state
    const sorted = characters.sort((a, b) => {
      return ascending ? b.id - a.id : a.id - b.id
    })
    this.setState(prevState => ({
      ascending: !prevState.ascending,
      characters: sorted
    }))
  }

  handleChangeGender = value => event => {
    const { species, gender } = this.state
    if (value === "gender") {
      this.setState({ gender: event.target.value, ascending: true })
      store.dispatch(
        getCharDataBegin({
          gender: event.target.value,
          species
        })
      )
    } else if (value === "species") {
      this.setState({ species: event.target.value, ascending: true })
      store.dispatch(
        getCharDataBegin({
          gender,
          species: event.target.value
        })
      )
    }
  }

  clearFilter = () => {
    this.setState(
      {
        species: "",
        gender: "",
        name: ""
      },
      () => store.dispatch(getCharDataBegin())
    )
  }

  searchFilter = () => e => {
    this.setState({
      name: e.target.value
    })
  }

  clickSearch = () => {
    const { name } = this.state
    store.dispatch(getCharDataBegin({ name }))
  }

  render() {
    const {
      characters,
      name,
      ascending,
      genders,
      gender,
      allSpecies,
      species
    } = this.state
    return (
      <>
        <div className="col-12 character-container">
          <div className="col-3 filter-container">
            <div className="search-bar">
              <InputBase
                className=""
                placeholder="Search ex: Rick, Morty"
                inputProps={{ "aria-label": "search google maps" }}
                onChange={this.searchFilter()}
                value={name}
              />
              <IconButton onClick={this.clickSearch} aria-label="search">
                <SearchIcon />
              </IconButton>
            </div>
            <div className="filter-header">
              <h1>Filters</h1>{" "}
              <button type="button" onClick={this.clearFilter}>
                Clear ALL
              </button>
            </div>
            <FormGroup className="filter-wrap">
              <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={gender}
                  onChange={this.handleChangeGender("gender")}
                >
                  {genders.map(genderVal => (
                    <FormControlLabel
                      key={genderVal.id}
                      value={genderVal.value}
                      control={<Radio />}
                      label={genderVal.value}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </FormGroup>
            <FormGroup className="filter-wrap">
              <FormControl>
                <FormLabel>Species</FormLabel>
                <RadioGroup
                  aria-label="species"
                  name="species1"
                  value={species}
                  onChange={this.handleChangeGender("species")}
                >
                  {allSpecies.map(speciesVal => (
                    <FormControlLabel
                      key={speciesVal.id}
                      value={speciesVal.value}
                      control={<Radio />}
                      label={speciesVal.value}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </FormGroup>
          </div>

          <div className="col-9 characters-wrap">
            <div className="right-filter">
              {" "}
              <FormControlLabel
                control={
                  <Switch
                    checked={ascending}
                    onChange={this.handleChangeSort}
                    value={ascending}
                    inputProps={{
                      "aria-label": `${ascending ? "Ascending" : "Descending"}`
                    }}
                  />
                }
                label={ascending ? "Ascending" : "Descending"}
              />
            </div>
            <div className="card-wrapper">
              {characters &&
                characters.map(character => (
                  <Character
                    key={character.id}
                    imageSrc={character.image}
                    name={character.name}
                    species={character.species}
                    gender={character.gender}
                    id={character.id}
                    created={character.created}
                    status={character.status}
                    lastLocation={character.location.name}
                    origin={character.origin.name}
                  />
                ))}
            </div>
          </div>
        </div>
      </>
    )
  }
}
const mapStateToProps = state => ({
  data: state.data && state.data
})

export default compose(connect(mapStateToProps))(Characters)
