import React from "react";
import { Link, Route } from "react-router-dom";

import GeoLocation from "./geolocation/GeoLocation";
import ImageSearcher from "./image_searcher/ImageSearcher";
import Video from "./videos/Video";
import "./Style.css";

export default class App extends React.Component {
  render() {
    return (
      <main>
        <nav>
          <ul>
            <li>
              <Link to='/geo'>Geolocater</Link>
            </li>
            <li>
              <Link to='/imagesearch'>Image Searcher</Link>
            </li>
            <li>
              <Link to='/videos'>Videos</Link>
            </li>
          </ul>
        </nav>
        <Route exact path='/geo' component={GeoLocation} />
        <Route exact path='/imagesearch' component={ImageSearcher} />
        <Route exact path='/videos' component={Video} />
      </main>
    );
  }
}
