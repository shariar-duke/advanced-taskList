const initialState = [
  {
    id: crypto.randomUUID(),
    title: "Learn Reacat",
    description:
      "I want to learn react as much as I can. Then  I will try to learn the other things ",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavourite: true,
  },
];

// now I want to write the reducer function

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          ...action.payload,
        },
      ];
      break;

    case "DELETE_TASK":
      const filteredTask = state.filter(
        (task) => task.id !== action.payload.id
      );
      return [...filteredTask];
      break;

    case "DELETE_ALL_TASK":
      return [];

      break;

    case "EDIT_TASK":
      const updateTask = state.map((task) =>
        task.id === action.payload.id ? { ...action.payload } : task
      );

      return [...updateTask];

      break;

    case "MAKE_FAV":
      const favTasks = state.map((task) =>
        task.id === action.payload.id
          ? { ...task, isFavourite: !task.isFavourite }
          : task
      );

      return [...favTasks];
      break;

      case "SEARCH_TASK":
        console.log(action.payload)
         const searchTask = state.filter((task) => task.title.toLowerCase().includes(action.payload.searchTask.toLowerCase()))
         return[...searchTask]
        
    default:
      return state;
  }
};

export { initialState, taskReducer };
