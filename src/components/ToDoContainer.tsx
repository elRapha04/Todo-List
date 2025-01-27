import React from "react";

const TodoContainer = ({ children }) => {
  return (
    <div className="mb-auto w-4/5 h-4/5 sm:h-3/4 md:w-3/4 md:h-3/5 lg:w-3/5 xl:w-2/5 border-2 border-white rounded-xl space-y-4 p-4 flex flex-col items-center overflow-y-scroll custom-scrollbar bg-linear-to-tr from-transparent via-gray-200/20 to-white/20 backdrop-blur-sm transition-all duration-500">
      {children}
    </div>
  );
};

export default TodoContainer;
