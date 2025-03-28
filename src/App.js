import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Form";
import Login from "./Login"; 
import Dashboard from "./Dashboard";
import Classcomponent from "./Classcomponent";
import Props from "./Props";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/Login" element={<Login isLogin={true} />} />
        <Route path="/signup" element={<Login isLogin={false} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Counter" element={<Classcomponent />} />
        <Route path="/Props" element={<Props />} />

      </Routes>
    </Router>
  );
};

export default App;
