import { useState } from "react";
import "./AdDesigner.css";

function AdDesigner() {
  const [chooseFlavor, setChooseFlavor] = useState("Cookie Dough");
  const [colorTheme, setColorTheme] = useState(true);
  const [fontSizePx, setFontSizePx] = useState(20);

  const styles = { fontSize: fontSizePx + "px" };

  let darkModeClass = "";

  if (colorTheme === true) {
    darkModeClass = "dark-mode";
  }

  const incrementFontSize = () => {
    setFontSizePx(fontSizePx + 1);
  };

  const decrementFontSize = () => {
    setFontSizePx(fontSizePx - 1);
  };

  return (
    <div>
      <h1 className={"adDesignerFont"}>Ad Designer</h1>
      <div className={"vote-box " + darkModeClass}>
        <h3 className="vote-for">Vote For</h3>
        <h2 className="vote-font" style={styles}>
          {chooseFlavor}
        </h2>
      </div>
      <div>
        <h3>Choose Your Flavor</h3>
        <button onClick={() => setChooseFlavor("Cookie Dough")}>
          Cookie Dough
        </button>
        <button onClick={() => setChooseFlavor("Moosetracks")}>
          Moosetracks
        </button>
        <button onClick={() => setChooseFlavor("Rocky Road")}>
          Rocky Road
        </button>
      </div>

      <div>
        <h3>Color Theme</h3>
        <button onClick={() => setColorTheme(false)}>Light</button>
        <button onClick={() => setColorTheme(true)}>Dark</button>
      </div>

      <div>
        <h3>Font Size</h3>
        <button onClick={decrementFontSize}>Down</button>
        <span>{fontSizePx}</span>
        <button onClick={incrementFontSize}>Up</button>
      </div>
    </div>
  );
}

export default AdDesigner;
