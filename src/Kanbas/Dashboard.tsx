import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { enrollmentStatus } from "./enrollmentReducer"; 

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
  const [showAllCourses, setShowAllCourses] = useState(false);

  const handleToggleEnrollments = () => {
    setShowAllCourses(!showAllCourses);
  };

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
        <button className="btn btn-primary mb-3" onClick={handleToggleEnrollments}>
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </button>
      )}

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            .filter((course) => {

              if (currentUser.role === "STUDENT") {
                if (showAllCourses) return true; // Show all courses if toggled
                return enrollments.some(
                  (enrollment: { user: any; course: any }) =>
                    enrollment.user === currentUser._id && enrollment.course === course._id
                );
              }
              return true; // Show all courses for faculty
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
                          <>
                            {isEnrolled ? (
                              <button
                                onClick={(event) => {
                                  event.preventDefault(); // Prevent navigation
            
                                  dispatch(enrollmentStatus({ userId: currentUser._id, courseId: course._id }));
                                }}
                                className="btn btn-danger float-end"
                              >
                                Unenroll
                              </button>
                            ) : (
                              <button
                              onClick={(event) => {

                                dispatch(enrollmentStatus({ userId: currentUser._id, courseId: course._id }));
                              }}
                              className="btn btn-success float-end"
                            >
                                Enroll
                              </button>
                            )}
                          </>
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
