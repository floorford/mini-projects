import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({
  options,
  selected,
  onSelectedChange,
  label,
  resultText,
}) => {
  const [open, setOpen] = useState(false);
  const mostParentElement = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (
        // is the event happening via bubbling within this comp? If yes, don't set the dropdown state to closed
        // We don't want to set it to false as the bubbling will handle that for us in the setOpen state setter
        mostParentElement.current &&
        mostParentElement.current.contains(e.target)
      ) {
        return;
      }

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
    <section>
      <form className='ui form' ref={mostParentElement}>
        <div className='field'>
          <label className='label'>{label}</label>
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
      <p
        style={{
          fontSize: "2rem",
          color: selected.hex ? selected.hex : "#ef79df",
        }}
      >
        {resultText ? `${resultText} ${selected.value}` : null}
      </p>
    </section>
  );
};

export default Dropdown;
