import React from "react"
import { Route, BrowserRouter as Router } from "react-router-dom"
import Home from "../Home/Home"
import Header from "../Header/Header"
import Characters from "../Characters/Characters"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/characters/" component={Characters} />
        </main>
      </Router>
    </div>
  )
}

export default App
