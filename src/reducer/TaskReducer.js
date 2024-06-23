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
      return;
      {
        []
      }
      break;

    case "EDIT_TASK":
      return;
      {
      }
      break;

    case "MAKE_FAV":
      return;
      {
      }
    default:
      return state;
  }
};

export { initialState, taskReducer };
