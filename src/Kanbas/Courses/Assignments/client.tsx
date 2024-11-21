import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/assignments`;


export const deleteAssignment = async (assignmentId: string) => {
    const response = await axios.delete(`${COURSES_API}/${assignmentId}`);
    return response;
}
  
export const updateAssignment = async (assignment:any) => {
    const { data } = await axios.put(`${COURSES_API}/${assignment._id}`, assignment);
    return data; 
}