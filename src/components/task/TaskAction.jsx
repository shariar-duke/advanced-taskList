/* eslint-disable react/prop-types */

export default function TaskAction({onAddClick , onDeleteAllClick}) {
  return (
    <div className="container mx-auto flex justify-between  text-white">
        <h2 className="text-2xl font-extrabold ">Your Tasks</h2>
        <div className="flex gap-[18px]">
            <button onClick={onAddClick} className="rounded-md px-3.5 py-2.5 text-sm font-semibold bg-blue-500">Add Task</button>
            <button onClick={onDeleteAllClick} className="rounded-md px-3.5 py-2.5 text-sm font-semibold bg-red-500">Delete All</button>
        </div>
    </div>
  )
}
