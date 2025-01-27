import React, { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { MdDeleteOutline } from "react-icons/md";

const TodoList = () => {
  const [tasks, setTasks] = useState(["task 1", "task 2", "task 3"]);
  const [newTask, setNewTask] = useState("");

  function handleInput(event) {}

  function addTask() {}

  function deleteTask(index) {}

  function moveUp(index) {}

  function moveDown(index) {}

  return (
    <div className="w-full">
      <ol>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="w-full h-1/5 border-2 border-lime-400 rounded-2xl p-2 flex justify-between space-x-10 items-center"
          >
            <Checkbox className="cursor-pointer hover:bg-black/10 active:bg-white" />
            <span>{task}</span>
            <MdDeleteOutline className="size-6 rounded-sm cursor-pointer bg-red-500 text-black hover:bg-red-700 hover:text-white active:text-red-700 active:bg-white" />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
