import { useState } from "react";

export interface AdProps {
  flavor: string;
  fontSize: number;
  darkTheme: boolean;
}

function Ad({ flavor, fontSize, darkTheme }: AdProps) {
  const [chooseFlavor, setChooseFlavor] = useState("Cookie Dough");
  const [colorTheme, setColorTheme] = useState(true);
  const [fontSizePx, setFontSizePx] = useState(20);

  const styles = { fontSize: fontSizePx + "px" };

  let darkModeClass = "";

  if (colorTheme === true) {
    darkModeClass = "dark-mode";
  }

  // function App({ flavor, fontSize, darkTheme }: Props);
  return (
    <div>
      <h1 className={"adDesignerFont"}>Ad Designer</h1>
      <div className={"vote-box " + darkModeClass}>
        <h3 className="vote-for">Vote For</h3>
        <h2 className="vote-font" style={styles}>
          {chooseFlavor}
        </h2>
      </div>
    </div>
  );
}
