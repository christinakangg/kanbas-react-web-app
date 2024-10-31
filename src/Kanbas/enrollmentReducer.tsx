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
        toggleEnrollment(state, action) {
            const { userId, courseId } = action.payload;

        

        }

    }
});
export const {toggleEnrollment} =
enrollmentSlice.actions;
export default enrollmentSlice.reducer;