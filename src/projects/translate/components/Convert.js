import React, { useState, useEffect } from "react";
import axios from "axios";

import { TRANSLATE_KEY } from "../../../keys";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    // if text changes before 500 seconds up, the cleanup function is returned
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  // when language or text changes this will run
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: TRANSLATE_KEY,
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [language, debouncedText]);

  return (
    <div>
      <p className='ui'>{translated}</p>
    </div>
  );
};

export default Convert;
