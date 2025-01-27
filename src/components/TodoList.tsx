import React, { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { MdDeleteOutline } from "react-icons/md";
import { CiCircleChevUp } from "react-icons/ci";
import { CiCircleChevDown } from "react-icons/ci";

const TodoList = () => {
  const [tasks, setTasks] = useState(["task 1", "task 2", "task 3", "DESIGN START"]);
  const [newTask, setNewTask] = useState("");

  function handleInput(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div>
      <div className="w-full flex justify-evenly">
        <input
          className="bg-amber-50"
          type="text"
          placeholder="enter"
          value={newTask}
          onChange={handleInput}
        />
        <Button onClick={addTask}>+</Button>
      </div>

      <div className="w-full">
        <ol>
          {tasks.map((task, index) => (
            <li
              key={index}
              className="w-full h-1/5 border-2 border-lime-400 rounded-2xl p-2 flex justify-between space-x-10 items-center"
            >
              <Checkbox className="cursor-pointer hover:bg-black/10 active:bg-white" />
              <span>{task}</span>
              <MdDeleteOutline
                onClick={() => deleteTask(index)}
                className="size-6 rounded-sm cursor-pointer bg-red-500 text-black hover:bg-red-700 hover:text-white active:text-red-700 active:bg-white"
              />
              <CiCircleChevUp
                onClick={() => moveUp(index)}
                className="size-6 rounded-sm cursor-pointer bg-red-500 text-black hover:bg-red-700 hover:text-white active:text-red-700 active:bg-white"
              />
              <CiCircleChevDown
                onClick={() => moveDown(index)}
                className="size-6 rounded-sm cursor-pointer bg-red-500 text-black hover:bg-red-700 hover:text-white active:text-red-700 active:bg-white"
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TodoList;
