import "./App.css";
import { UserProvider } from "./context/UserContext";
import { WelcomePage } from "./containers/WelcomePage"
import { EmojiProvider } from "./context/EmojiContext";
import { Routes, Route } from "react-router-dom";
import { BitcoinRates } from "./components/BitcoinRates";
import { NameComponent, SlideWork, ReducerExample, PostListReducer } from "./containers/SlideWork";
import { CustomHooksExamples } from "./containers/CustomHooksExamples"
import { LabTwo } from "./components/LabTwo";
import { LabThree } from "./components/LabThree";
import { ContextWork } from "./containers/ContextWork";
import { NavBar } from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";


const App = () => {
  return (
    <UserProvider>
      <EmojiProvider>
        <NavBar />
        <Routes>
          <Route path="lab-one" element={
            <ProtectedRoute>
              <BitcoinRates />
            </ProtectedRoute>
          } />
          <Route index element={<WelcomePage />} />
          <Route path="slidework">
            <Route index element={<SlideWork />} />
            <Route path="name-ref/:name" element={<NameComponent />} />
            <Route path="name-ref" element={<NameComponent />} />
            <Route path="reducer-example" element={<ReducerExample />} />
            <Route path="post-list" element={<PostListReducer />} />
          </Route>
          <Route path="custom-hook-examples" element={<CustomHooksExamples />} />
          <Route path="lab-two" element={<LabTwo />} />
          <Route path="lab-three" element={<LabThree />} />
          <Route path="context-work" element={<ContextWork />} />
          <Route path="*" element={<div>Path doesn't exist...</div>} />
        </Routes>
      </EmojiProvider>
    </UserProvider>
  );
};
export default App;