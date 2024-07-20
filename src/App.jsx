import { BitcoinRates } from "./components/BitcoinRates";
import "./App.css";
import { useState } from "react";
import { SlideWork } from "./containers/SlideWork";
import { CustomHooksExamples } from "./containers/CustomHooksExamples";
import { ContextWork } from "./containers/ContextWork"
import { UserProvider } from "./context/UserContext";
import { EmojiProvider } from "./context/EmojiContext";
import { LabTwo } from "./components/LabTwo";
import { LabThree } from "./components/LabThree";

const App = () => {
  const [contentName, setContentName] = useState("Lab 1")

  const contentConfig = [
    { lab: "Slidework" },
    { lab: "Lab 1" },
    { lab: "Custom Hooks" },
    { lab: "Lab 2" },
    { lab: "Context Work" },
    { lab: "Lab 3" }
  ]

  const displayHandler = () => {
    switch (contentName) {
      case contentConfig[0].lab:
        return <SlideWork />;
      case contentConfig[1].lab:
        return <BitcoinRates />;
      case contentConfig[2].lab:
        return <CustomHooksExamples />;
      case contentConfig[3].lab:
        return <LabTwo />;
      case contentConfig[4].lab:
        return <ContextWork />;
      case contentConfig[5].lab:
        return <LabThree />;
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
    <UserProvider>
      <EmojiProvider>
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
      </EmojiProvider>

    </UserProvider>
  );
};
export default App;