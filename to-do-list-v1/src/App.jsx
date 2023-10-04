import React from "react";

import "bootstrap/dist/css/bootstrap.min.css"

import AddTask from "./components/addTask";
import Task from "./components/Task";
import Tasks from "./components/Tasks";

export default () => (
  <>
    <AddTask/>
    <Task/>
    <Tasks/>
    
  </>
);
