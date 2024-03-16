import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import tasks from "../data/tasks";

export const loadTasks = createAsyncThunk("tasks/loadTasks", async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return tasks;
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  extraReducer: {
    [loadTasks.fulfilled]: (state, action) => {
      state.tasks = action.payload;
    },
  },
});
export default taskSlice.reducer;
