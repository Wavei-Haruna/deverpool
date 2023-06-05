import { useState } from "react";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Browse from "./Pages/Browse";
import { Feature, OptForm } from "./Components";
import {
  FaqsContainer,
  FooterContainer,
  JumbotronContainer,
  HeaderContainer,
} from "./Containers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/browse" element={<Browse />} />
      </Routes>
      <Feature />
    </>
  );
}

export default App;
