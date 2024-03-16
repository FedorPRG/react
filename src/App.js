import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTasks } from "./reducer/taskSlice";

function App() {
  const dispatch = useDispatch();
  function load() {
    dispatch(loadTasks());
  }

  const tasks = useSelector((state) => state.tasks.tasks);
  console.log(tasks);
  return (
    <>
      <button onClick={load}>load tasks</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </>
  );
}
export default App;
