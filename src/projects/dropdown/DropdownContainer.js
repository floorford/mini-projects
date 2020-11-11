import React, { useState } from "react";

import Dropdown from "./Dropdown";

const options = [
  { label: "The colour red", value: "red", hex: "#e63c3cde" },
  { label: "A kind of green", value: "green", hex: "#46e469de" },
  { label: "The shade of blue", value: "blue", hex: "#20a7a1" },
];

const DropdownContainer = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <Dropdown
      selected={selected}
      onSelectedChange={setSelected}
      options={options}
      label={"Select a Colour"}
      resultText={"The text is"}
    />
  );
};

export default DropdownContainer;
