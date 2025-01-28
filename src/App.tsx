import ToDoContainer from "./components/ToDoContainer";
import TodoList from "./components/TodoList";
import MouseAnim from "./components/ui/MouseAnim";

const App = () => {
  return (
    // bg-linear-to-bl from-indigo-950 via-gray-900 to-black

    
    <div className="absolute overflow-x-hidden space-y-8 inset-0 p-4 w-full h-full bg-cover bg-no-repeat bg-fixed bg-center flex flex-col justify-center items-center bg-[url('https://usagif.com/wp-content/uploads/gifs/starfall-gif-46.gif')]">
      <MouseAnim />
      <h1 className="font-serif font-bold text-white text-5xl mt-auto">
        To-Do List
      </h1>

      <ToDoContainer>
        <TodoList></TodoList>
      </ToDoContainer>
      <div className="bottom-0 opacity-50 xs:flex sm:grid items-center sm:grid-cols-[1fr_1fr] gap-8 w-4/5 md:w-3/4 lg:w-3/5 xl:w-2/5">
        <p className="border-2 rounded-2xl py-1 sm:p-4 text-center text-xs text-white italic transition-all duration-500">
          The checkbox for the "Mark as Done" feature isn't behaving as
          intended.
        </p>
        <p className="border-2 rounded-2xl sm:p-4 text-center text-xs text-white italic transition-all duration-500">
          Editing is performed through a window prompt.
        </p>
      </div>
    </div>
  );
};

export default App;
