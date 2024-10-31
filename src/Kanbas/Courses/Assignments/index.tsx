import { BsGripVertical } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import GreenCheckmarkAndEllipsisVertical from "./GreenCheckMarkAndEllipsisVertical";
import { GoTriangleDown } from "react-icons/go";
import AssignmentButtons from "./AssignmentButtons";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";
export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const assignments = useSelector((state: any) => state.assignmentReducer.assignments);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  
    return (

      <ul id="wd-assignments">
        {assignments
        .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
        <li className = "wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-1 fs-3" />
            <GoTriangleDown className="me-2" />
            <span className="fs-3">ASSIGNMENTS</span>
          </div>
          {currentUser.role === "FACULTY" && (
          <AssignmentButtons assignmentId={assignment._id} deleteAssignment={(assignmentId) => {dispatch(deleteAssignment(assignmentId))}} />
      
          )}
        </div>

        <ul className="wd-lessons list-group rounded-0">

        <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
        <BsGripVertical className="me-2 fs-3" />
        <GiNotebook className="me-4 fs-3"/>
        <div>
    
        <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
        <a className="text-bold fs-3"> 
          {assignment.title}       
        </a>
        </Link>
        <div className="mb-1 fs-6">
          <span className="text-danger">
            Multiple Modules<b></b>
            </span>
          <span className = "ms-2">|</span>
          <span className = "fw-bold ms-2 fs-">Not available until</span>
          
          <span className = "ms-1">{assignment.available_date} |</span> 
              
        </div>
        <div className="mb-1 fs-6 fw-bold">
        Due
        <span className = "ms-1 fw-normal">{assignment.due_date}  |  {assignment.points} pts</span>
        </div>
        </div>
        <GreenCheckmarkAndEllipsisVertical />
          </li>
        </ul>
        </li>
        ))}
      </ul>
  );}
  