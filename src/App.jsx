import { BitcoinRates } from "./components/BitcoinRates";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [contentName, setContentName] = useState("Lab 1")

  const contentConfig = [{ lab: "Lab 1" }, { lab: "Lab 2" }]

  const displayHandler = () => {
    switch (contentName) {
      case contentConfig[0].lab:
        return <BitcoinRates />;
      default:
        return (
          <div
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            Click on a Lab button to see the content
          </div>
        );
    }
  };

  const buttonConstructor = () => {
    const buttonElementArray = contentConfig.map((content) => {
      return (
        <button
          key={content.lab}
          onClick={() => setContentName(content.lab)}
          style={{ margin: "5px" }}
        >
          {content.lab}
        </button>
      );
    });

    return buttonElementArray;
  };

  //RETURN
  return (
    <div className="main-app-container">
      <p>Module Seven Starts Here</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "5px",
        }}
      >
        {buttonConstructor()}
      </div>

      <div
        style={{
          display: "block",
          margin: "0 auto",
          width: "50vw",
          height: "70vh",
          border: "red 1px solid",
          overflow: "scroll",
          alignContent: "center"
        }}
      >
        {displayHandler()}
      </div>
    </div>

  );
};
export default App;