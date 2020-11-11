import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

import GeoLocation from "./geolocation/GeoLocation";
import ImageSearcher from "./image_searcher/ImageSearcher";
import Video from "./videos/Video";
import Dropdown from "./dropdown/Dropdown";
import "./Style.css";

const options = [
  { label: "The colour red", value: "red", hex: "#e63c3cde" },
  { label: "A kind of green", value: "green", hex: "#46e469de" },
  { label: "The shade of blue", value: "blue", hex: "#20a7a1" },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

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
        <>
          <button
            className='ui secondary button'
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Toggle Dropdown
          </button>
          {showDropdown ? (
            <Dropdown
              selected={selected}
              onSelectedChange={setSelected}
              options={options}
            />
          ) : null}
        </>
      </Route>
    </main>
  );
};

export default App;
