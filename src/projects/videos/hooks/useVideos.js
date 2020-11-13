// custom hook creation steps:
// 1. identify each line of code related to a single purpose
// 2. identify the inputs to that code
// 3. identify the outputs to that code
// 4. extract the code in a separate function, inputs = arguments, outputs = return

import { useState, useEffect } from "react";
import axios from "axios";

import { YTUBE_KEY } from "../../../keys";

const useVideos = (defaultTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultTerm);
  }, [defaultTerm]);

  const search = async (term) => {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          q: term,
          part: "snippet",
          maxResults: 5,
          key: YTUBE_KEY,
        },
      }
    );

    setVideos(response.data.items);
  };

  return [videos, search];
  // could also return in object, more JS-y convention
};

export default useVideos;
