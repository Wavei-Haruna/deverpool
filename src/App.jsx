import { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Explore from "./Pages/Explore";
import CustomApp from "./Pages/CustomApp";
import Register from "./Pages/Register";
import ContactUs from "./Pages/ContactUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about-us" element={<About />}></Route>
          <Route exact path="/explore" element={<Explore />}></Route>
          <Route exact path="/custom-app" element={<CustomApp />}></Route>
          <Route exact path="/contact-us" element={<ContactUs />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          {/* <Route exact path="/test" element={<TestFirst />}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
