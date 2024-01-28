import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.js";
import Nav from "./components/Nav.jsx";
import AboutMe from "./components/AboutMe.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
