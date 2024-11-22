import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { enrollmentStatus } from "./enrollmentReducer"; 
import * as coursesClient from "./Courses/client"
import * as enrollmentsClient from "./enrollmentsClient"

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: any) => void;
  updateCourse: () => void;
}) {

  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state:any) => state.enrollmentReducer.enrollments);
  // toggle between showing all courses and only enrolled courses 
  // shows only enrolled courses first
  const [showCourses, setShowCourses] = useState(false);

  // handles showing all courses or only enrolled courses
  const toggleCourses = () => {
    // switch between all or enrolled courses
    setShowCourses(!showCourses);
  };

  const enrollCourses = async (courseId: string) => {
    await enrollmentsClient.enrollInCourse(currentUser._id, courseId);
    dispatch(enrollmentStatus({ userId: currentUser._id, courseId }));
  }

  const unenrollCourses = async (courseId: string) => {
    await enrollmentsClient.unenrollInCourse(currentUser._id, courseId);
    dispatch(enrollmentStatus({ userId: currentUser._id, courseId }));
  }

  const [allCourses, setAllCourses] = useState<any[]>([]);
  const fetchCourses = async () => {
    const courses = await coursesClient.fetchAllCourses();
    setAllCourses(courses);
  };
  useEffect(() => {
    fetchCourses();
  }, []);


  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {currentUser.role === "FACULTY" && (
        <>
          <h5>New Course</h5>
          <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={addNewCourse}>
            Add
          </button>
          <button className="btn btn-warning float-end me-2" onClick={updateCourse} id="wd-update-course-click">
            Update
          </button>

          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </>
      )}

      {currentUser.role === "STUDENT" && (
        // switch between all or enrolled courses when the button is clicked 
        <button className="btn btn-primary mb-2" 
        onClick={toggleCourses}>
          {showCourses ? "Enrolled Courses" : "All Courses"}
        </button>
      )}

      <h2 id="wd-dashboard-published">Published Courses ({allCourses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {allCourses
            .filter((course) => {

              if (currentUser.role === "STUDENT") {

                // return all courses if showCourses is true 
                if (showCourses) {
                  return true;
                }
                else {
                  // checks if the user is enrolled in the course
                return enrollments.some(
                  (enrollment: { user: any; course: any }) =>
                    enrollment.user === currentUser._id && enrollment.course === course._id
                )};
              }
              // shows all courses for roles other than student 
              else {
              return true;
              }
            })

            .map((course) => {
              const isEnrolled = enrollments.some(
                (enrollment: { user: any; course: any }) =>
                  enrollment.user === currentUser._id && enrollment.course === course._id
              );

              return (
                <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                  <div className="card rounded-3 overflow-hidden">
                    <Link
                      to={`/Kanbas/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                    >
                      <img src="/images/reactjs.jpg" width="100%" height={160} />
                      <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                          {course.description}
                        </p>
                        <button className="btn btn-primary">Go</button>

                        {currentUser.role === "STUDENT" && (
                            // if the user is enrolled, show the unenroll button 
                            isEnrolled ? (
                              // prevent going to the course page when clicking on button
                              <button className="btn btn-danger" onClick={(event) => {
                                event.preventDefault(); 
                                unenrollCourses(course._id);
                              }}>
                               Unenroll
                              </button>) 
                              // otherwise, show the enroll button 
                              : (<button className="btn btn-success" onClick={(event) => {
                                event.preventDefault();
                                enrollCourses(course._id);
                              }}>
                                Enroll
                              </button>
                            )
                          )}

                        {currentUser.role === "FACULTY" && (
                          <>
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                              }}
                              className="btn btn-danger float-end"
                              id="wd-delete-course-click"
                            >
                              Delete
                            </button>

                            <button
                              id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                              className="btn btn-warning me-2 float-end"
                            >
                              Edit
                            </button>
                          </>
                        )}
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
