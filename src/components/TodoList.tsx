import React, { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { CiCircleChevUp } from "react-icons/ci";
import { CiCircleChevDown } from "react-icons/ci";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    "task 1",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, ratione!",
    "Lorem ipsum,dolorsitametconsecteturadipisicingelit.Placeat,ratione!",
    "task 2",
    "task 3",
    "DESIGN START",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, ratione!",
  ]);
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
  
  function editTask(index) {
    
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
    <div className="w-full">
      <div className="top-0 w-full grid grid-cols-[1fr_25%] mb-8">
        <input
          className="bg-white rounded-tl-md rounded-bl-md px-4 text-black"
          type="text"
          placeholder="Enter task"
          value={newTask}
          onChange={handleInput}
        />
        <Button
          className="bg-green-400 hover:bg-green-600 text-black hover:text-white cursor-pointer rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md"
          onClick={addTask}
        >
          Add
        </Button>
      </div>

      <div className="w-full">
        <ol className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="w-full h-1/5 backdrop-blur-xs border-2 border-lime-400 rounded-2xl p-2 grid items-center grid-cols-[10%_1fr_64px]"
            >
              <Checkbox className="cursor-pointer hover:bg-black/10 active:bg-white" />

              <span className="flex overflow-hidden ">{task}</span>

              <span className="grid grid-cols-[1fr_1fr]">
                <MdDeleteOutline
                  onClick={() => deleteTask(index)}
                  className="size-8 cursor-pointer bg-red-500 text-black hover:bg-red-700 hover:text-white active:text-red-700 active:bg-white rounded-tl-xl"
                />
                <FiEdit
                  onClick={() => editTask(index)}
                  className="size-8 cursor-pointer bg-yellow-500 text-black hover:bg-yellow-700 hover:text-white active:text-red-700 active:bg-white rounded-tr-xl"
                />
                <CiCircleChevUp
                  onClick={() => moveUp(index)}
                  className="size-8 cursor-pointer bg-blue-500 text-black hover:bg-blue-700 hover:text-white active:text-red-700 active:bg-white rounded-bl-xl"
                />
                <CiCircleChevDown
                  onClick={() => moveDown(index)}
                  className="size-8 cursor-pointer bg-blue-500 text-black hover:bg-blue-700 hover:text-white active:text-red-700 active:bg-white rounded-br-xl"
                />
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TodoList;
