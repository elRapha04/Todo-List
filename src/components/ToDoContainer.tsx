import React from "react";

const TodoContainer = ({ children }) => {
  return (
    <div className="w-4/5 h-9/10 border-2 border-white rounded-lg space-y-4 p-4 flex flex-col items-center overflow-y-scroll bg-linear-to-bl from-transparent via-gray-200/20 to-white/20 backdrop-blur-sm">
      {children}
    </div>
  );
};

export default TodoContainer;
