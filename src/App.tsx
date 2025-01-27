import React from "react";
import TodoContainer from "./components/ToDoContainer";
import TodoItem from "./components/TodoItem";
import AddButton from "./components/AddButton";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    // bg-linear-to-bl from-indigo-950 via-gray-900 to-black

    <div className="absolute space-y-8 inset-0 p-4 w-full h-full bg-cover bg-no-repeat bg-fixed bg-center flex flex-col justify-center items-center bg-[url('https://usagif.com/wp-content/uploads/gifs/starfall-gif-46.gif')]">

      <h1 className="font-serif font-bold text-white text-5xl mt-auto">To-Do List</h1>

      <TodoContainer>
        <TodoList></TodoList>
      </TodoContainer>
    </div>
  );
};

export default App;
