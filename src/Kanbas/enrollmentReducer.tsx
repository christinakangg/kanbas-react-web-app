import { createSlice } from "@reduxjs/toolkit";
import { courses } from "./Database";
import { enrollments } from "./Database/";

const initialState = {
    courses: courses,
    enrollments: enrollments,
};

const enrollmentSlice = createSlice({
    name: "enrollment",
    initialState,
    reducers: {
        enrollmentStatus(state, action) {
            const { userId, courseId } = action.payload;

            // checks if the current user is already enrolled in the course
            const checkEnrollment = state.enrollments.some(
                (enrollment) => enrollment.user === userId && enrollment.course === courseId
            );
            
            // if the user is already enrolled and they click the button, they are removed from array and shows the "enroll" button
            // if the user clicks button and they are not enrolled, they are added to array and shows "unenroll" button
            if (checkEnrollment) {
                state.enrollments = state.enrollments.filter(
                 (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
                );
            }
            else {
                state.enrollments.push({_id: new Date().getTime.toString(), user: userId, course: courseId });
            }

            // saved to local storage so choices still persist
            localStorage.setItem('enrollments', JSON.stringify(state.enrollments))

        }
    }
});
export const {enrollmentStatus} =
enrollmentSlice.actions;
export default enrollmentSlice.reducer;