import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Form";
import Login from "./Login"; 
import Dashboard from "./Dashboard";
import Classcomponent from "./Classcomponent";
import Props from "./Props";
import Props1 from "./Props1"
// import Parent from "./Badprops";
// import Parent from "./Drilling"
import Student from "./Student";
import ChildParent from "./ChildParent";
import Props2 from "./Props2";
import Task from "./Task";
import Apicall from "./Apicall";
import UsersTable from "./UserTable";
import Message from "./Message";
import TitleUpdater from "./TitleUpdater";
import ToDoList from "./ToDoList";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/Login" element={<Login isLogin={true} />} />
          <Route path="/signup" element={<Login isLogin={false} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Counter" element={<Classcomponent />} />
          <Route path="/Props" element={<Props />} />
          {/* <Route path="/badprops" element={<Parent />} /> */}
          {/* <Route path="/Drill" element={<Parent />} /> */}

        </Routes>
      </Router>

      <Student name="Sahith" age={22} student={true}></Student>
      <Student name="Babji" age={24} student={false}></Student>
      <Student name="ram"  age={26} student={false}></Student>
      <Student name="sita"  age={20} student={true}></Student>
      <Student name="alice"/>
      <Props1></Props1>
      <Props2></Props2>
      <ChildParent></ChildParent>
      <Task></Task>
      <Apicall></Apicall>
      <UsersTable></UsersTable>
      <Message></Message>
      <TitleUpdater></TitleUpdater>
      <ToDoList></ToDoList>
      {/* <Badprops></Badprops> */}

    </>
  );
};

export default App;
