import React, { useState } from "react";

const Addtask = ({ setNav, addNewTask }) => {
  const [newTask, setNewTask] = useState({
    id: Date.now() + "" + Math.random().toString(16),
    title: "",
    time: "",
    completed: false,
    details: "",
  });

  function valueChange(e) {
    const name = e.name;
    const value = e.value;
    setNewTask({ ...newTask, [name]: value });
  }

  return (
    <div className="form_container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addNewTask(newTask);
          setNav("tasks");
        }}
      >
        <h3>Add Task</h3>
        <input
          type="text"
          required
          placeholder="Task"
          name="title"
          value={newTask.title}
          onChange={(e) => valueChange(e.target)}
        />
        <input
          type="datetime-local"
          placeholder="Task time"
          name="time"
          value={newTask.time}
          onChange={(e) => valueChange(e.target)}
        />{" "}
        <div className="btn_container">
          <button type="submit">Done</button>
          <button id="discard" type="button" onClick={() => setNav("tasks")}>
            Discard
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addtask;
