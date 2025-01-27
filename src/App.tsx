import React from "react";
import TodoContainer from "./components/ToDoContainer";
import TodoItem from "./components/TodoItem";
import AddButton from "./components/AddButton";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    // bg-linear-to-bl from-indigo-950 via-gray-900 to-black

    <div className="absolute inset-0 p-4 w-full h-full bg-cover bg-no-repeat flex flex-col justify-center items-center bg-[url('https://images.unsplash.com/photo-1736077722346-31ba59414728?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8')]">
      <h1 className="font-serif font-bold text-white text-3xl">To-Do List</h1>

      <TodoContainer>
        <TodoList></TodoList>

        <AddButton></AddButton>
      </TodoContainer>
    </div>
  );
};

export default App;
