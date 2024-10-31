import { IoEllipsisVertical } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import * as db from "../../Database/";
import { GoPlus } from "react-icons/go";
import { FaTrash } from "react-icons/fa";


export default function AssignmentButtons({ assignmentId, deleteAssignment }: { assignmentId: string; deleteAssignment: (assignmentId: string) => void; }) {
  const { cid } = useParams();
  const assignment = db.assignments.find((assignment) => assignment.course === cid);

  // if no assignment exists, return null
  if (!assignment){
    return null;
  }

  return (
          <span className="d-flex align-items-center">
            <span className="px-3 py-2 me-1 bg-secondary rounded-pill border border-dark">
              40% of Total
            </span>
            <Link to={`/Kanbas/Courses/${cid}/Assignments/new`}>
            <GoPlus className="fs-2" />
            </Link>
            <IoEllipsisVertical className="fs-2" />
            <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(assignmentId)} />
          </span>
  );
}
