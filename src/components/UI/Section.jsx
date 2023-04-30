import React, { useEffect, useRef } from "react";
import "./Section.css";

function Section({ Icon, title, color }) {
  const section = useRef(null);

  const classSwitch = () => {
    const sectionCurrent = document.querySelectorAll(".section");
    sectionCurrent.forEach((element) =>
      element.classList.remove("section--selected")
    );
    sectionCurrent.forEach((element) => element.style.removeProperty("color"));

    section.current.classList += " section--selected";
    section.current.style.color = color;
  };

  useEffect(() => {
    if (title == "Primary") {
      section.current.classList += " section--selected";
      section.current.style.color = color;
    }
  }, []);

  return (
    <div
      ref={section}
      onClick={classSwitch}
      className={"section"}
      style={{
        borderBottom: `3px solid ${color}`,
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
}

export default Section;