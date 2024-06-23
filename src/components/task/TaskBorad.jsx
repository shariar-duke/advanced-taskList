/* eslint-disable no-unused-vars */
import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import NoTaskFound from "./NoTaskFound";

export default function TaskBorad() {
  const [show, setShow] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const defaultTask = {
    id: crypto.randomUUID(), // eta amk random Id dey
    title: "Learn Reacat",
    description:
      "I want to learn react as much as I can. Then  I will try to learn the other things ",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavourite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [taskToUpdate, setTaskToUpdate] = useState(null); // eta holo task update er jnnoe

  // function executing when the open button is clicked in TaskAction
  const handleAddTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setTaskToUpdate(null);
    setShowModal(false);
  };

  // for edit the task

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowModal(true);
    console.log("The task I have selected is", task);
  };

  const handleDeleteTask = (task) => {
    const newTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(newTasks);
  };

  // Delete All Task
  const handleDeleteAllTask = () => {
    setTasks([]);
    console.log("I want to delete all tasks");
  };

  const handleFavourite = (id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const newTasks = [...tasks];
    newTasks[taskIndex].isFavourite = !newTasks[taskIndex].isFavourite;
    setTasks(newTasks)
  };

  return (
    <div>
      <SearchTask />
      <div className="mt-[25px] rounded-xl border-[rgba(206,206,206,0.12)] bg-[#1D212B] p-[30px]">
        <TaskAction
          onDeleteAllClick={handleDeleteAllTask}
          onAddClick={() => setShowModal(true)}
        />
        {tasks.length > 0 ? (
          <TaskList
            tasks={tasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            onFav={handleFavourite}
          />
        ) : (
          <NoTaskFound />
        )}

        {showModal && (
          <AddTaskModal
            taskToUpdate={taskToUpdate}
            onSave={handleAddTask}
            closeModal={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
}
