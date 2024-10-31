import { useNavigate, Link, useParams, Navigate } from "react-router-dom";
import {  useState, useEffect } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const dispatch = useDispatch();
    const navigateBack = useNavigate();

    const assignments = useSelector((state: any) => state.assignmentReducer.assignments);
    const assignment = assignments.find((a: any) => a._id === aid);

    const[title, setTitle] = useState("");
    const[available_date, setAvailable_date] = useState("");
    const[available_until, setAvailable_until] = useState( "");
    const[due_date, setDue_date] = useState("");
    const[points, setPoints] = useState("");
    const[description, setDescription] = useState("");

    // look up if assignment exists, if it does then populate fields with assignment details
    useEffect(() => {
      if (assignment) {
          setTitle(assignment.title);
          setAvailable_date(assignment.available_date);
          setAvailable_until(assignment.available_until);
          setDue_date(assignment.due_date);
          setPoints(assignment.points);
          setDescription(assignment.description);
      }}, [assignment]);

    const addOrEditAssignment = () => {
      // creating a new assignment 
      if (aid === "new"){
        const newAssignment = {
          _id: new Date().getTime().toString(), 
          title,
          course: cid,
          available_date,
          available_until,
          due_date,
          points,
          description,
        };
        dispatch(addAssignment(newAssignment))
      }
      else {
        // editing an existing assignment
        const editedAssignment = {
          _id: aid, 
          title,
          course: cid,
          available_date,
          available_until,
          due_date,
          points,
          description,
        };
        dispatch(updateAssignment(editedAssignment))
      }
      navigateBack(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return ( 
    <div id="assignment-editor">   
    <div className="mb-4">
       
    <label htmlFor="assignment-name" className="form-label col-form-label">
      Assignment Name</label>     
    <input 
    type="name" 
    className="form-control"
    id="assignment-name" 
    placeholder={assignment?.title}
    value = {title}
    onChange={(e) => setTitle(e.target.value)}/>     
    </div>

    <div className="mb-4">
    <textarea 
    className="form-control" 
    id="text-area"
    placeholder={assignment?.description}
    rows={13}
    value = {description}
    onChange={(e) => setDescription(e.target.value)}>
    </textarea>
    </div>

    <div className="mb-3">
    <div className="row align-items-center">
    <label htmlFor="points" 
    className="col-sm-3 col-form-label">
      Points
    </label>
    <div className="col-sm-9">
      <input 
      type="text" 
      className="form-control" 
      id="points" 
      placeholder={assignment?.points} 
      value = {points}
      onChange={(e) => setPoints(e.target.value)}/>
    </div>
  </div> 
  </div> 
  
    <div className="row align-items-center mb-3">
    <label htmlFor="assignment-group" className="col-sm-3 col-form-label">
      Assignment Group
    </label>
    <div className="col-sm-9">
      <select id="assignment-group" className="form-select">
        <option value="">ASSIGNMENTS</option>
        <option value="group1">Group 1</option>
        <option value="group2">Group 2</option>
        <option value="group3">Group 3</option>
      </select>

    </div>
  </div>

<div className="mb-3">
  <div className="row align-items-center">
    <label htmlFor="display-grade" className="col-sm-3 col-form-label">
      Display Grade as
    </label>
    <div className="col-sm-9">
      <select id="display-grade" className="form-select">
        <option value="">Percentage</option>
        <option value="group1">Group 1</option>
        <option value="group2">Group 2</option>
        <option value="group3">Group 3</option>
      </select>
    </div>
  </div>
</div>

<div className="mb-3">
  <div className="row">
    <label htmlFor="submission-type" className="col-sm-3 col-form-label">
      Submission Type
    </label>

    <div className="col-sm-9">
      <div className="border border-1 p-3">
        <select id="submission-type" className="form-select mb-3">
          <option value="">Online</option>
          <option value="group1">Group 1</option>
          <option value="group2">Group 2</option>
          <option value="group3">Group 3</option>
        </select>

        <label htmlFor="online-entry-options" className="col-sm-3 mb-3 fw-bold col-form-label">
        Online Entry Options
        </label>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="text-entry" />
          <label className="form-check-label" htmlFor="text-entry">
             Text Entry
          </label>
        </div>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="website-url" defaultChecked />
          <label className="form-check-label" htmlFor="website-url">
             Website URL
          </label>
        </div>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="media-recordings" />
          <label className="form-check-label" htmlFor="media-recordings">
             Media Recordings
          </label>
        </div>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="student-annotation" />
          <label className="form-check-label" htmlFor="student-annotation">
             Student Annotation
          </label>
        </div>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="file-upload" />
          <label className="form-check-label" htmlFor="file-upload">
             File Uploads
          </label>
        </div>
        
      </div>
    </div>
  </div>
</div>

<div className="mb-5">
  <div className="row align-items-start">
    <label htmlFor="assign" className="col-sm-3">
      Assign
    </label>

    <div className="col-sm-9">
      <div className="border border-1 p-3">
    
        <label htmlFor="assign-to" className="col-sm-3 col-form-label fw-bold fs-5">
        Assign to
        </label>

        <div className="border border-1 p-1">
       <div className="border border-secondary bg-secondary d-flex justify-content-between" style={{ width: '10rem', padding: '0.5rem' }}>
      <p className="mb-0">Everyone</p>
      <button className="btn btn-close"></button>
      </div>
      </div>

      <label htmlFor="due" className="col-sm-3 col-form-label fw-bold fs-5">
        Due
      </label>
      <div className="mb-3">  
        <input 
        type="text" 
        className="form-control" 
        id="due-date" 
        placeholder = {assignment?.due_date}
        value = {due_date}
        onChange={(e) => setDue_date(e.target.value)} />
      </div>

      <div className="mb-3">
      <div className="row">
        <div className="col-sm-6">
          <label htmlFor="available-from" className="form-label fw-bold fs-5">
          Available From</label>
          <input 
          type="text" 
          className="form-control" 
          id="available-from"
          placeholder={assignment?.available_date}
          value = {available_date}
          onChange={(e) => setAvailable_date(e.target.value)}
            />
        </div>
        <div className="col-sm-6">
          <label htmlFor="until-date" className="form-label fw-bold fs-5">
            Until</label>
          <input 
          type="date" 
          className="form-control" 
          id="until-date"
          value = {available_until}
          onChange={(e) => setAvailable_until(e.target.value)}
          />
        </div>
      </div>
    </div>  
      </div>
    </div>
  </div>
</div>

<div className="border border-1 "></div>
<div className="d-flex justify-content-end p-3">
  <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
      <button type="button" className="btn btn-secondary me-2">
        Cancel
      </button>
  </Link>
      <button 
      type="button" 
      className="btn btn-danger"
      onClick={addOrEditAssignment}
      >
      Save
      </button>
    </div>   
</div>
  );}
  