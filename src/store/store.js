import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import taskSlice from "../reducer/taskSlice";

export default configureStore({
  reducer: { tasks: taskSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
