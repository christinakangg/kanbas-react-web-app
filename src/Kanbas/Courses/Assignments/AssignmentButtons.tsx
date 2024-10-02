import { IoEllipsisVertical } from "react-icons/io5";
import { GoPlus } from "react-icons/go";


export default function AssignmentButtons(){
    return(
        <span className="d-flex align-items-center">
        <span className=" px-3 py-2 me-1 bg-secondary rounded-pill border border-dark">
            40% of Total
        </span>
        <GoPlus className="fs-2" />
        <IoEllipsisVertical className="fs-2" />
      </span>
    )
}