import Error from "@/helpers/Error";
import Loader from "@/helpers/Loader";
import {
  FetchStudentCertificate,
  reset,
} from "@/services/features/student/studentSlice";
import { AppDispatch } from "@/store";
import { Box } from "@mui/material";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const StudentCertificate = () => {
  const { isLoading, isSuccess, isError, message, singleStudent } = useSelector(
    (state: any) => state.student
  );
  const dispatch = useDispatch<AppDispatch>();
  const { studentId } = useParams();

  useEffect(() => {
    if (studentId) {
      dispatch(FetchStudentCertificate(studentId));
    }
  }, []);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Student certificate is valid");
      dispatch(reset());
    }

    if (isError) {
      toast.error(message);
    }
  }, [isLoading, isError, isLoading, dispatch, message]);

  return (
    <Box className="h-screen py-10 flex-col items-center justify-center">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!isLoading && isError && <Error />}

          <Box className="flex items-center justify-center">
            <img
              src={singleStudent?.certificate}
              alt=""
              className="object-contain"
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default StudentCertificate;
