import React, { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { CiCircleChevUp } from "react-icons/ci";
import { CiCircleChevDown } from "react-icons/ci";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    "Hover then",
    "[Shift + scroll]",
    "to scroll",
    "horizontally.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam consequatur est ipsum officiis eveniet voluptates, amet magnam, obcaecati eligendi maiores laborum recusandae, illo animi a ipsam suscipit eos molestiae tempore rerum in corporis.",
    "Accusantium qui facilis nisi doloribus sapiente beatae saepe consequatur magni sequi quidem voluptatem quaerat unde voluptatibus corporis recusandae laudantium, quas amet cum blanditiis, animi molestiae.",
    "Ipsa possimus culpa, ducimus nemo dicta debitis pariatur explicabo quisquam molestiae non placeat laboriosam iusto voluptates aut error quod recusandae animi beatae incidunt quo dolorem ratione totam cumque.",
    "Ipsa totam fugiat ut saepe quia, illo assumenda nostrum, vero eius dolor esse nam?"
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
    const updatedTask = prompt("Edit task:", tasks[index]);
    if (updatedTask !== null && updatedTask.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[index] = updatedTask;
      setTasks(updatedTasks);
    }
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
          className="bg-transparent text-xl backdrop-blur-sm rounded-tl-md rounded-bl-md px-4 text-black active:scale-95 transition-all duration-100 font-mono"
          type="text"
          placeholder="Enter task"
          value={newTask}
          maxLength={50}
          onChange={handleInput}
        />
        <Button
          className="bg-green-500/30 backdrop-blur-sm hover:bg-green-600/60 text-black text-xl hover:scale-105 hover:text-white cursor-pointer rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md transition-all duration-100"
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
              className="w-full h-1/5 backdrop-blur-xs border-2 border-lime-400 rounded-2xl p-2 grid items-center grid-cols-[10%_1fr_64px] text-nowrap"
            >
              <Checkbox className="cursor-pointer hover:bg-black/10 active:bg-white" />

              <span className="flex overflow-scroll custom-scrollbar text-black text-2xl font-bold font-mono w-9/10">
                {task}
              </span>

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
