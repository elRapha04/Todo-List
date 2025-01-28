import { ReactNode } from "react";

const ToDoContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mb-auto w-9/10 sm:w-4/5 h-4/5 sm:h-3/4 md:w-3/4 md:h-3/5 lg:w-3/5 xl:w-2/5 border-2 border-white rounded-xl space-y-4 p-2 sm:p-4 flex flex-col items-center overflow-y-scroll scroll-smooth custom-scrollbar bg-linear-to-tr from-transparent via-gray-200/20 to-white/20 backdrop-blur-xs transition-all duration-500">
      {children}
    </div>
  );
};

export default ToDoContainer;
