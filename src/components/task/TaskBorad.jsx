
import { useState, useContext } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import NoTaskFound from "./NoTaskFound";
import { TaskContext } from "../../context";
export default function TaskBorad() {
  const [show, setShow] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null); 
  // getting the state value : 
  const {state} = useContext(TaskContext)


  // const handleAddTask = (newTask, isAdd) => {
  //   if (isAdd) {
  //     setTasks([...tasks, newTask]);
  //   } else {
  //     setTasks(
  //       tasks.map((task) => {
  //         if (task.id === newTask.id) {
  //           return newTask;
  //         }
  //         return task;
  //       })
  //     );
  //   }
  //   setTaskToUpdate(null);
  //   setShowModal(false);
  // };



  // const handleEditTask = (task) => {
  //   setTaskToUpdate(task);
  //   setShowModal(true);
  //   console.log("The task I have selected is", task);
  // };

  // const handleDeleteTask = (task) => {
  //   const newTasks = tasks.filter((t) => t.id !== task.id);
  //   setTasks(newTasks);
  // };


  // const handleDeleteAllTask = () => {
  //   setTasks([]);
  //   console.log("I want to delete all tasks");
  // };

  // const handleFavourite = (id) => {
  //   const taskIndex = tasks.findIndex((task) => task.id === id);
  //   const newTasks = [...tasks];
  //   newTasks[taskIndex].isFavourite = !newTasks[taskIndex].isFavourite;
  //   setTasks(newTasks)
  // };

  return (
    <div>
      <SearchTask />
      <div className="mt-[25px] rounded-xl border-[rgba(206,206,206,0.12)] bg-[#1D212B] p-[30px]">
        <TaskAction
  
          onAddClick={() => setShowModal(true)}
        />
        {state?.length > 0 ? (
          <TaskList
            tasks={state}
          />
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
