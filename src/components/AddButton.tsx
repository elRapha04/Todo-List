import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

const AddButton = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant={"secondary"}
          className="group cursor-pointer hover:bg-transparent hover:border-3 transition-all duration-500"
        >
          <p className="text-2xl">+</p>
          <p className="hidden group-hover:inline">New ToDo</p>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add your new to-do item</AlertDialogTitle>
          <Input />
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="w-1/6 self-center bg-red-500 text-white cursor-pointer hover:bg-red-700 hover:text-white">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction className="w-1/6 self-center bg-green-500 text-black cursor-pointer hover:bg-green-700">
            Add
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddButton;
