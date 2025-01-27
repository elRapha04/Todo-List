import { Checkbox } from "./ui/checkbox";
import { MdDeleteOutline } from "react-icons/md";

const TodoItem = () => {
  return (
    <div className="w-full h-1/5 border-2 border-lime-400 rounded-2xl p-2 flex justify-between space-x-10 items-center">
      <Checkbox className="cursor-pointer hover:bg-black/10 active:bg-white" />
      <p>Lorem Ipsum Dolor</p>
      <MdDeleteOutline className="size-6 rounded-sm cursor-pointer bg-red-500 text-black hover:bg-red-700 hover:text-white active:text-red-700 active:bg-white" />
    </div>
  );
};

export default TodoItem;
