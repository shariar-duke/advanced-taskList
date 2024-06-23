/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
export default function TaskList({ tasks, onEdit, onDelete, onFav }) {
  return (
    <div className="overflow-auto container mx-auto pb-[100px]">
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr className="text-white">
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
              Title
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
              Description
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[350px]">
              Tags
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[100px]">
              Priority
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[100px]">
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task, index) => (
            <tr
              key={index}
              className="text-white border-b border-[#2E2443] [&>td]:text-center [&>td]:px-2  [&>td]:py-4"
            >
              <button onClick={() => onFav(task.id)}>
                <td>
                  <FaStar
                    size={18}
                    color={`${task?.isFavourite ? "yellow" : "gray"}`}
                  />
                </td>
              </button>

              <td>{task?.title}</td>

              <td>{task?.description}</td>
              <td>
                <ul className="flex gap-1.5 justify-center flex-wrap">
                  {task.tags?.map((t, v) => (
                    <li key={v}>
                      <span className="inline-block h-6 whitespace-nowrap rounded-[45px] bg-green-500 px-2.5 text-sm capitilize text-white">
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </td>
              <td>{task?.priority}</td>
              <td>
                <div className="flex items-center justify-center space-x-3">
                  <button
                    onClick={() => onDelete(task)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => onEdit(task)}
                    className="text-blue-500"
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
