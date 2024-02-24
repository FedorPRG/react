import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Это первое дело" },
    { id: 2, text: "Это второе дело" },
    { id: 3, text: "Это третье дело" },
  ]);

  const [inputTask, setInputTask] = useState("");

  function addTask() {
    if (!inputTask.trim()) {
      return;
    }
    setTasks([
      ...tasks,
      {
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
        text: inputTask,
      },
    ]);
    setInputTask("");
  }

  function delTask(event) {
    if (tasks.length === 0) {
      return;
    }
    setTasks(
      tasks.filter(
        (comment) =>
          comment.id !== +event.target.parentElement.parentElement.dataset.id
      )
    );
  }

  return (
    <div>
      <h2>Ввод новой задачи</h2>
      <div className="bloc">
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          value={inputTask}
          onChange={(event) => setInputTask(event.target.value)}
          variant="filled"
          size="small"
        />
        <Button variant="outlined" onClick={addTask}>
          Добавить задачу
        </Button>
      </div>
      <h2>Список дел</h2>
      <div className="list">
        {tasks.map((item) => (
          <ListItem
            secondaryAction={
              <IconButton
                key={item.id}
                data-id={item.id}
                onClick={delTask}
                edge="end"
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText />
            {item.text}
          </ListItem>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
