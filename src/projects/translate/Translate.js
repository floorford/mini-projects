import React, { useState } from "react";

import { options } from "./options";
import Dropdown from "../dropdown/Dropdown";

const Translate = () => {
  const [language, setLanguage] = useState(options[20]);
  const [text, setText] = useState("");

  return (
    <section>
      <form className='ui form'>
        <div className='field'>
          <label className='label'>Input text</label>{" "}
          <input
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
          />
        </div>
      </form>
      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
        label={"Select a Language"}
      />
    </section>
  );
};

export default Translate;
