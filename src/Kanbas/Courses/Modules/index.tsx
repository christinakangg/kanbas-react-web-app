import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons"
import LessonControlButtons from "./LessonControlButtons";
import WeekGreenCheckmark from "./WeekGreenCheckmark";
import WeekEllipsisVertical from "./WeekEllipsisVertical";

export default function Modules() {
    return (
      <div>
  <ModulesControls /><br /><br /><br /><br />
  <ul id="wd-modules" className="list-group rounded-0">
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">
      <BsGripVertical className="me-2 fs-3" />
      Week 1 
      <WeekEllipsisVertical />
      <ModuleControlButtons />
      <WeekGreenCheckmark />   
      </div>
      <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
          LEARNING OBJECTIVES 
          <LessonControlButtons />
          </li>
        <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
          Introduction to the course 
          <LessonControlButtons />
          </li>
        <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
          Learn what is Web Development 
          <LessonControlButtons />
          </li>
        <li className="wd-lesson list-group-item p-3 ps-1"> 
        <BsGripVertical className="me-2 fs-3" /> 
        LESSON 1
        <LessonControlButtons />
        </li>
        <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" /> 
         LESSON 2 
         <LessonControlButtons />
         </li>
      </ul>
    </li>
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">
         Week 2 
        <WeekEllipsisVertical />
        <ModuleControlButtons />
        <WeekGreenCheckmark />  
        </div>
      <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" /> 
        LEARNING OBJECTIVES 
        <LessonControlButtons />
        </li>
        <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
        LESSON 1 
        <LessonControlButtons />
        </li>
        <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
        LESSON 2
        <LessonControlButtons />
        </li>
      </ul>
    </li>
  </ul> </div>
    );}
      /** 
      <div>
        <button style={{ marginRight: "5px" }}>Collapse All</button>
        <button style={{ marginRight: "5px" }}>View Progess</button>
        <select id="Publish">
        <option selected value="PublishAll">
       Publish All</option>
        </select>
        <button style={{ marginLeft: "5px" }}>+ Module</button>
        <ModulesControls /><br /><br /><br /><br />
        <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">Week 1</div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <span className="wd-title list-group-item p-3 ps-1">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item list-group-item p-3 ps-1">Introduction to the course</li>
                  <li className="wd-content-item list-group-item p-3 ps-1">Learn what is Web Development</li>
                </ul>
                </li>

              <li className="wd-lesson ">
                <span className="wd-title">READING</span>
                  <ul className="wd-content">
                  <li className="wd-content-item list-group-item p-3 ps-1">Full Stack Developer - Chapter 1 - Introduction</li>
                  <li className="wd-content-item list-group-item p-3 ps-1">Full Stack Developer - Chapter 2 - Creating User</li>
                </ul>
                </li>

              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item list-group-item p-3 ps-1">Introduction to Web Development</li>
                  <li className="wd-content-item list-group-item p-3 ps-1">Creating an HTTP server with Node.js</li>
                  <li className="wd-content-item list-group-item p-3 ps-1">Creating a React Application</li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="wd-module">
            <div className="wd-title ">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                <li className="wd-content-item">Deploy the assignment to Netify</li>
                </ul>
              </li>

              <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to HTML and the DOM</li>
                  <li className="wd-content-item">Formatting Web content with Headings and</li>
                  <li className="wd-content-item">Formatting content with Lists and Tables</li>
                </ul>
                </li>
            </ul>
            </li>
        </ul>
      </div>
  );}
  */