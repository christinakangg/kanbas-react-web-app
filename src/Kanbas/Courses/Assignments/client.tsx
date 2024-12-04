import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/assignments`;

export const updateAssignment = async (assignment:any) => {
    const { data } = await axiosWithCredentials.put(`${COURSES_API}/${assignment._id}`, assignment);
    return data; 
}

export const deleteAssignment = async (assignmentId: string) => {
    const response = await axiosWithCredentials.delete(`${COURSES_API}/${assignmentId}`);
    return response;
}
  