import { FaCheckCircle, FaCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";

export default function GreenCheckmarkAndEllipsisVertical(){
    return (  
    <span className="d-flex align-items-center ms-auto">
    <FaCheckCircle style={{ top: "2px" }}
      className="text-success me-1 fs-2" />
    <FaCircle className="text-white me-1 fs-3" />
    <IoEllipsisVertical className="fs-3" />
  </span>
  
  );
  
}

