import React from "react";
import { Link, Route } from "react-router-dom";

import OldProj from "./old_proj/OldProj";
import NewProj from "./new_proj/NewProj";
import "./Style.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <nav>
          <ul>
            <li>
              <Link to='/old'>Geolocation Project</Link>
            </li>
            <li>
              <Link to='/new'>New Project</Link>
            </li>
          </ul>
        </nav>
        <Route exact path='/old' component={OldProj} />
        <Route exact path='/new' component={NewProj} />
      </main>
    );
  }
}
