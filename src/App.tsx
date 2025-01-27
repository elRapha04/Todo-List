import React from "react";

const App = () => {
  return (
    <div className="absolute inset-0 p-4 w-full h-full bg-cover bg-no-repeat flex flex-col justify-center items-center bg-linear-to-bl from-indigo-950 via-gray-900 to-black">
      <h1 className="font-serif font-bold text-white text-3xl">To-Do List</h1>
      <div className="border-2 border-white rounded-lg w-2/3 h-2/3 p-4"></div>
    </div>
  );
};

export default App;
