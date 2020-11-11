import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

import GeoLocation from "./geolocation/GeoLocation";
import ImageSearcher from "./image_searcher/ImageSearcher";
import Video from "./videos/Video";
import DropdownContainer from "./dropdown/DropdownContainer";
import Translate from "./translate/Translate";

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
          <li>
            <Link to='/dropdown'>Dropdown</Link>
          </li>
          <li>
            <Link to='/translate'>Translate</Link>
          </li>
        </ul>
      </nav>
      <Route exact path='/geo' component={GeoLocation} />
      <Route exact path='/imagesearch' component={ImageSearcher} />
      <Route exact path='/videos' component={Video} />
      <Route exact path='/translate' component={Translate} />
      <Route exact path='/dropdown' component={DropdownContainer} />
    </main>
  );
};

export default App;
