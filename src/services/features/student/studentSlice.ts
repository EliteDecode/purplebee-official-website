import { createAsyncThunkWithHandler } from "@/services/api/apiHandler";
import studentService from "./studenService";
import { createSlice } from "@reduxjs/toolkit";

interface initialStudentStateProps {
  singleStudent: any;
  isLoading: boolean;
  message: string;
  isSuccess: boolean;
  isError: boolean;
}

const initialState: initialStudentStateProps = {
  singleStudent: null,
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
};

export const FetchStudentCertificate = createAsyncThunkWithHandler(
  "student/FetchStudentCertificate",
  async (studentId: string) => {
    return await studentService.fetchStudentCertificate({ studentId });
  }
);

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(FetchStudentCertificate.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(FetchStudentCertificate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleStudent = action.payload.data;
      })
      .addCase(FetchStudentCertificate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      });
  },
});

export const { reset } = studentSlice.actions;
export default studentSlice.reducer;
