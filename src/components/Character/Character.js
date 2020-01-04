import React from "react"
import moment from "moment"

const Character = props => {
  const {
    imageSrc,
    name,
    id,
    created,
    species,
    gender,
    lastLocation,
    origin,
    status
  } = props
  return (
    <article className="card col-3">
      <div className="card-innerWrap">
        <div className="header">
          <div className="card-img">
            <img className="card-image" src={imageSrc} alt="character" />
          </div>
          <div className="card-title">
            <h2 className="card-name">{name}</h2>
            <p>{`id: ${id} - created ${moment(created).fromNow()}`}</p>
          </div>
        </div>
        <div className="info">
          <div className="info-des">
            <div className="left-dec">STATUS</div>{" "}
            <div className="right-des">{status}</div>
          </div>
          <div className="info-des">
            <div className="left-dec">SPECIES</div>{" "}
            <div className="right-des">{species}</div>
          </div>
          <div className="info-des">
            <div className="left-dec">GENDER</div>{" "}
            <div className="right-des">{gender}</div>
          </div>
          <div className="info-des">
            <div className="left-dec">ORIGIN</div>{" "}
            <div className="right-des">{origin}</div>
          </div>
          <div className="info-des">
            <div className="left-dec">LAST LOCATION</div>{" "}
            <div className="right-des">{lastLocation}</div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Character
