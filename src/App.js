import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main.js";
import MainWithFile from "./Pages/MainWithFile.js";


/** All routes of website along with a catch all route to display a not found route */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/HiringDocumentation" element={<MainWithFile />} />

        <Route path="*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
