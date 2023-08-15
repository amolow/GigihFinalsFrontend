import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Channels from "./components/HomePage/Channels";
import Details from "./components/DetailsPage/Details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Channels />} />
        <Route path="/video/:videoId" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
