import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

export default function ProtectedRouteEnrolled({ children }: {children: any}) {

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollmentReducer.enrollments);
  const { cid } = useParams(); 

  // faculty has access to all courses
  if (currentUser.role === "FACULTY"){
    return children;
  }

  // checks if the user is enrolled to the course 
  const checkEnrollment = enrollments.some(
    (enrollment: { user: any; course: any}) =>
      enrollment.user === currentUser?._id && enrollment.course === cid
  );

    // redirect to dashboard when clicking on an unenrolled course
    if (!checkEnrollment) {
      return <Navigate to="/Kanbas/Dashboard" />;
    }
    
  return children;
}
