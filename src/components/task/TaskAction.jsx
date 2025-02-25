/* eslint-disable react/prop-types */
import { TaskContext } from "../../context";
import { useContext } from "react";
export default function TaskAction({onAddClick , onDeleteAllClick}) {
  const {dispatch} = useContext(TaskContext)
  return (
    <div className="container mx-auto flex justify-between  text-white">
        <h2 className="text-2xl font-extrabold ">Your Tasks</h2>
        <div className="flex gap-[18px]">
            <button onClick={onAddClick} className="rounded-md px-3.5 py-2.5 text-sm font-semibold bg-blue-500">Add Task</button>
            <button
            onClick={()=> 
            {
              dispatch({
               type:"DELETE_ALL_TASK"
              })
            } 
          
        }
             className="rounded-md px-3.5 py-2.5 text-sm font-semibold bg-red-500">Delete All</button>
        </div>
    </div>
  )
}
