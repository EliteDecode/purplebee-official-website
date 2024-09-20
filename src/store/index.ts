import studentSlice from "@/services/features/student/studentSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    student: studentSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
