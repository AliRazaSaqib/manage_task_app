import {
  CREATETASK,
  EDITTASK,
  DELETETASK,
  UPDATESTATUS,
} from "../action/actionTypes";

const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATETASK:
      // Check if task already exists
      const taskExists = state.tasks.some(
        (task) => task.name.toLowerCase() === action.payload.name.toLowerCase()
      );

      // If task exists, return current state with error message
      if (taskExists) {
        return {
          ...state,
          error: "Task already exists with this name",
        };
      }

      // If task doesn't exist, add it to the tasks array with status set to "pending"
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: action.payload.id,
            name: action.payload.name,
            detail: action.payload.detail,
            status: "pending",
          },
        ],
        error: null,
      };

    case EDITTASK:
      // Find the index of the task to be updated
      const edittaskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );

      // If the task is not found, return the current state with error message
      if (edittaskIndex === -1) {
        return {
          ...state,
          error: "Task not found",
        };
      }

      // Update the task at the given index with the new properties
      const updateTask = {
        ...state.tasks[edittaskIndex],
        name: action.payload.name,
        detail: action.payload.detail,
      };

      // Create a new tasks array with the updated task
      const updateTasksArray = [
        ...state.tasks.slice(0, edittaskIndex),
        updateTask,
        ...state.tasks.slice(edittaskIndex + 1),
      ];

      return {
        ...state,
        tasks: updateTasksArray,
        error: null,
      };

    case UPDATESTATUS:
      // Find the index of the task to be updated
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );

      // If the task is not found, return the current state with error message
      if (taskIndex === -1) {
        return {
          ...state,
          error: "Task not found",
        };
      }

      // Update the task at the given index with the new status
      const updatedTask = {
        ...state.tasks[taskIndex],
        status: action.payload.status,
      };

      // Create a new tasks array with the updated task
      const updatedTasksArray = [
        ...state.tasks.slice(0, taskIndex),
        updatedTask,
        ...state.tasks.slice(taskIndex + 1),
      ];

      return {
        ...state,
        tasks: updatedTasksArray,
        error: null,
      };

    case DELETETASK:
      // Get the task to be deleted
      const taskToDelete = state.tasks.find(
        (task) => task.id === action.payload.id
      );

      // If the task is not found, return the current state with error message
      if (!taskToDelete) {
        return {
          ...state,
          error: "Task not found",
        };
      }

      // If the task is found, remove it from the tasks array
      const updatedTasks = state.tasks.filter(
        (task) => task.id !== action.payload.id
      );

      return {
        ...state,
        tasks: updatedTasks,
        error: null,
      };

    default:
      return state;
  }
};

export default reducer;
