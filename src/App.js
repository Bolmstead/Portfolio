import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Main from "./Pages/Main.js";
import MyComponents from "./Pages/MyComponents.js";
import MyDashboard from "./Components/MyDashboard/MyDashboard.js";

/** All routes of website along with a catch all route to display a not found route */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/my_components" element={<MyComponents />} />
        <Route path="/my_components/dashboard" element={<MyDashboard />} />

        <Route path="*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
