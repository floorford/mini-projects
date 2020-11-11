import React, { useState, useEffect } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", () => {
      setOpen(false);
    });
  }, []);

  const renderedOptions = options.map((x, i) => {
    if (x.value === selected.value) {
      return null;
    }

    return (
      <div key={i} className='item' onClick={() => onSelectedChange(x)}>
        {x.label}
      </div>
    );
  });

  return (
    <form className='ui form'>
      <div className='field'>
        <label className='label'>Select a Colour</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Dropdown;
