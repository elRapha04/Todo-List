import { useState } from "react";
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

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index: number) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function editTask(index: number) {
    const updatedTask = prompt("Edit task:", tasks[index]);
    if (updatedTask !== null && updatedTask.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[index] = updatedTask;
      setTasks(updatedTasks);
    }
  }

  function moveUp(index: number) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveDown(index: number) {
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
      <div className="sticky z-10 shadow-[10px_10px_10px_rgb(0, 0, 0)] top-0 w-full grid grid-cols-[1fr_25%] mb-8">
        <input
          className="bg-transparent text-xl backdrop-blur-sm rounded-tl-md rounded-bl-md px-4 text-black active:scale-95 transition-all duration-100 font-mono"
          type="text"
          placeholder="Enter task"
          value={newTask}
          maxLength={50}
          onChange={handleInput}
          title="Enter Task"
        />
        <Button
          className="bg-green-400/50 backdrop-blur-sm hover:bg-green-600/60 text-black text-xl hover:scale-105 hover:text-white cursor-pointer rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md transition-all duration-100 active:scale-95"
          onClick={addTask}
          title="Add Task"
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
              <Checkbox
                onClick={() => deleteTask(index)}
                title="Mark as done"
                className="cursor-pointer hover:bg-black/10 active:bg-white transition-all duration-500"
              />

              <span className="flex overflow-scroll custom-scrollbar text-black text-2xl font-bold font-mono w-9/10">
                {task}
              </span>

              <span className="grid grid-cols-[1fr_1fr]">
                <MdDeleteOutline
                  onClick={() => deleteTask(index)}
                  title="Delete Task"
                  className="size-8 cursor-pointer bg-red-500 text-black hover:bg-red-700 hover:text-white active:text-red-700 active:bg-white rounded-tl-xl transition-all duration-500 border-t-2 border-l-2 border-b-2 border-black"
                />
                <FiEdit
                  onClick={() => editTask(index)}
                  title="Edit Task"
                  className="size-8 cursor-pointer bg-yellow-500 text-black hover:bg-yellow-700 hover:text-white active:text-red-700 active:bg-white rounded-tr-xl transition-all duration-500 border-2 border-black"
                />
                <CiCircleChevUp
                  onClick={() => moveUp(index)}
                  title="Move Task Up"
                  className="size-8 cursor-pointer bg-blue-500 text-black hover:bg-blue-700 hover:text-white active:text-red-700 active:bg-white rounded-bl-xl transition-all duration-500 border-b-2 border-l-2 border-black"
                />
                <CiCircleChevDown
                  onClick={() => moveDown(index)}
                  title="Move Task Down"
                  className="size-8 cursor-pointer bg-blue-500 text-black hover:bg-blue-700 hover:text-white active:text-red-700 active:bg-white rounded-br-xl transition-all duration-500 border-b-2 border-r-2 border-black"
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
