import { BsGripVertical } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import GreenCheckmarkAndEllipsisVertical from "./GreenCheckMarkAndEllipsisVertical";
import { GoTriangleDown } from "react-icons/go";
import AssignmentButtons from "./AssignmentButtons";

export default function Assignments() {
    return (

      <ul id="wd-assignments">
        <li className = "wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-1 fs-3" />
            <GoTriangleDown className="me-2" />
            <span className="fs-3">ASSIGNMENTS</span>
          </div>
          <AssignmentButtons />
        </div>
          
        <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
        <BsGripVertical className="me-2 fs-3" />
        <GiNotebook className="me-4 fs-3"/>
        <div>
        <a className="text-bold fs-3" href="#/Kanbas/Courses/1234/Assignments/123">A1</a>
        <div className="mb-1 fs-6">
          <span className="text-danger">
            Multiple Modules<b></b>
            </span>
          <span className = "ms-2">|</span>
          <span className = "fw-bold ms-2 fs-">Not available until</span>
          <span className = "ms-1">May 6 at 12:00 am |</span>
         
        </div>
        <div className="mb-1 fs-6 fw-bold">
        Due
        <span className = "ms-1 fw-normal">May 13 at 11:59 pm  |  100 pts</span>
        </div>
        </div>
        <GreenCheckmarkAndEllipsisVertical />
          </li>
          </ul>

          <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
        <BsGripVertical className="me-2 fs-3" />
        <GiNotebook className="me-4 fs-3"/>
        <div>
        <a className="text-bold fs-3" href="#/Kanbas/Courses/1234/Assignments/123">A2</a>
        <div className="mb-1 fs-6">
          <span className="text-danger">
            Multiple Modules<b></b>
            </span>
          <span className = "ms-2">|</span>
          <span className = "fw-bold ms-2 fs-">Not available until</span>
          <span className = "ms-1">May 13 at 12:00 am |</span>
         
        </div>
        <div className="mb-1 fs-6 fw-bold">
        Due
        <span className = "ms-1 fw-normal">May 20 at 11:59 pm  |  100 pts</span>
        </div>
        </div>
        <GreenCheckmarkAndEllipsisVertical />
          </li>
          </ul>

          <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
        <BsGripVertical className="me-2 fs-3" />
        <GiNotebook className="me-4 fs-3"/>
        <div>
        <a className="text-bold fs-3" href="#/Kanbas/Courses/1234/Assignments/123">A3</a>
        <div className="mb-1 fs-6">
          <span className="text-danger">
            Multiple Modules<b></b>
            </span>
          <span className = "ms-2">|</span>
          <span className = "fw-bold ms-2 fs-">Not available until</span>
          <span className = "ms-1">May 20 at 12:00 am |</span>
         
        </div>
        <div className="mb-1 fs-6 fw-bold">
        Due
        <span className = "ms-1 fw-normal">May 27 at 11:59 pm  |  100 pts</span>
        </div>
        </div>
        <GreenCheckmarkAndEllipsisVertical />
          </li>
          </ul>

        </li>
      </ul>
  );}
  