import React from "react";
import TodoContainer from "./components/ToDoContainer";
import TodoItem from "./components/TodoItem";
import AddButton from "./components/AddButton";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    // bg-linear-to-bl from-indigo-950 via-gray-900 to-black

    <div className="absolute inset-0 p-4 w-full h-full bg-cover bg-no-repeat bg-fixed bg-center flex flex-col justify-center items-center bg-[url('https://usagif.com/wp-content/uploads/gifs/starfall-gif-46.gif')]">
      {/* SIZE INDICATORS */}
      <ul>
        <li className="font-bold uppercase text-2xl inline sm:hidden md:hidden lg:hidden xl:hidden">
          xs
        </li>
        <li className="font-bold uppercase text-2xl hidden sm:inline md:hidden lg:hidden xl:hidden">
          sm
        </li>
        <li className="font-bold uppercase text-2xl hidden sm:hidden md:inline lg:hidden xl:hidden">
          md
        </li>
        <li className="font-bold uppercase text-2xl hidden sm:hidden md:hidden lg:inline xl:hidden">
          lg
        </li>
        <li className="font-bold uppercase text-2xl hidden sm:hidden md:hidden lg:hidden xl:inline">
          xl
        </li>
      </ul>

      <h1 className="font-serif font-bold text-white text-3xl">To-Do List</h1>

      <TodoContainer>
        <TodoList></TodoList>
      </TodoContainer>
    </div>
  );
};

export default App;
