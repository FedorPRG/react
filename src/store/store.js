import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../reducer/taskSlice";

const store = configureStore({
  reducer: {
    tasks: taskSlice,
  },
});

export default store;
