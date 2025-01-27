import React from "react";

const TodoContainer = ({children}) => {
  return (
    <div className="w-2/3 h-2/3 border-2 border-white rounded-lg space-y-4 p-4 flex flex-col justify-center items-center bg-linear-to-bl from-transparent via-gray-200/20 to-white/20 backdrop-blur-sm">
      {children}
    </div>
  );
};

export default TodoContainer;
