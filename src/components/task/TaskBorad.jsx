import { useState, useContext } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import NoTaskFound from "./NoTaskFound";
import { TaskContext } from "../../context";

export default function TaskBorad() {
  const {dispatch, state} = useContext(TaskContext)
  const [show, setShow] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleEditTask = (e,task) => {
     setShowModal(true);
     setTaskToUpdate(task);

  };


  return (
    <div>
      <SearchTask />
      <div className="mt-[25px] rounded-xl border-[rgba(206,206,206,0.12)] bg-[#1D212B] p-[30px]">
        <TaskAction onAddClick={() => setShowModal(true)} />

        {state?.length > 0 ? (
          <TaskList tasks={state} onEdit={handleEditTask} />
        ) : (
          <NoTaskFound />
        )}

        {showModal && (
          <AddTaskModal
            taskToUpdate={taskToUpdate}
            closeModal={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
}
