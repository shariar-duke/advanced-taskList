import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TaskBorad from "./components/task/TaskBorad";
import { TaskContext } from "./context";
import { initialState, taskReducer } from "./reducer/TaskReducer.js";
import { useReducer } from "react";

export default function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  
  return (
    <TaskContext.Provider value={{state, dispatch}}>
      <div className="flex flex-col  h-[100%] pb-[70px]">
        <Header />
        <div className="container mx-auto  mt-[100px] ">
          <HeroSection />
          <TaskBorad className="mt-5" />
        </div>
      </div>
    </TaskContext.Provider>
  );
}
