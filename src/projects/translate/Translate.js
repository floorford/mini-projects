import React, { useState } from "react";

import { options } from "./options";
import Dropdown from "../dropdown/components/Dropdown";
import Convert from "./components/Convert";

const Translate = () => {
  const [language, setLanguage] = useState(options[20]);
  const [text, setText] = useState("");

  return (
    <section>
      <form className='ui form'>
        <div className='field'>
          <label className='label'>Input text</label>{" "}
          <textarea
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
          ></textarea>
        </div>
      </form>
      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
        label={"Select a Language"}
      />
      <section>
        <h3>Translation:</h3>
        <Convert language={language} text={text} />
      </section>
    </section>
  );
};

export default Translate;
