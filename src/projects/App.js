import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import GeoLocation from "./geolocation/GeoLocation";
import ImageSearcher from "./image_searcher/ImageSearcher";
import Video from "./videos/Video";

import "./Style.css";

const App = () => {
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
      <Switch>
        <Route exact path='/' component={Video} />
        <Route exact path='/geo' component={GeoLocation} />
        <Route exact path='/imagesearch' component={ImageSearcher} />
        <Route exact path='/videos' component={Video} />
      </Switch>
    </main>
  );
};

export default App;
