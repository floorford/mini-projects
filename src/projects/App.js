import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

import GeoLocation from "./geolocation/GeoLocation";
import ImageSearcher from "./image_searcher/ImageSearcher";
import Video from "./videos/Video";
import Dropdown from "./dropdown/Dropdown";
import "./Style.css";

const options = [
  { label: "The colour red", value: "red" },
  { label: "A kind of green", value: "green" },
  { label: "The shade of blue", value: "blue" },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

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
        </ul>
      </nav>
      <Route exact path='/geo' component={GeoLocation} />
      <Route exact path='/imagesearch' component={ImageSearcher} />
      <Route exact path='/videos' component={Video} />
      <Route exact path='/dropdown'>
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
    </main>
  );
};

export default App;
