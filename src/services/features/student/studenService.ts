import axiosClient from "@/services/api/axiosClient";

const fetchStudentCertificate = async ({
  studentId,
}: {
  studentId: string;
}) => {
  const response = await axiosClient.get(`/student/certificate/${studentId}`);
  return response.data;
};

const authService = {
  fetchStudentCertificate,
};

export default authService;
