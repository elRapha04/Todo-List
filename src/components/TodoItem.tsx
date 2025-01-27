import React from "react";
import { Checkbox } from "./ui/checkbox";


const TodoItem = () => {
  return (
  <div className="w-full h-1/5 border-2 border-lime-400 rounded-2xl p-2 flex justify-start space-x-10 items-center">
    <Checkbox />
    <p>Lorem Ipsum Dolor</p>
  </div>
  )
};

export default TodoItem;
