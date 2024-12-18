import { Link, useParams } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignment = db.assignments.find((assignment) => assignment._id === aid); 

    return ( 
    <div id="assignment-editor">   
    <div className="mb-4">
       
    <label htmlFor="assignment-name" className="form-label col-form-label">
      Assignment Name</label>     

    <input type="name" className="form-control"
      id="assignment-name" placeholder={assignment?.title}/>     
    </div>

    <div className="mb-4">
    <textarea className="form-control" id="text-area"
    placeholder={'\nThe assignment is available online\n\nSubmit a link to the landing page of your Web application running on Netlify.\n\nThe landing page should include the following:\n\nYour full name and section\nLinks to each of the lab assignments\nLink to the Kanbas application\nLinks to all relevant source code repositories\n\nThe Kanbas application should include a link to navigate back to the landing page.'}
    rows={13}>
      {assignment?.description}
    </textarea>
    </div>

    <div className="mb-3">
    <div className="row align-items-center">
    <label htmlFor="points" className="col-sm-3 col-form-label">
      Points
    </label>
    <div className="col-sm-9">
      <input type="text" className="form-control" id="points" value={assignment?.points} />
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
        <input type="text" className="form-control" id="due-date" defaultValue={assignment?.due_date} />
      </div>

      <div className="mb-3">
      <div className="row">
        <div className="col-sm-6">
          <label htmlFor="available-from" className="form-label fw-bold fs-5">
          Available From</label>
          <input type="text" className="form-control" id="available-from" defaultValue={assignment?.available_date}  />
        </div>
        <div className="col-sm-6">
          <label htmlFor="until-date" className="form-label fw-bold fs-5">
            Until</label>
          <input type="date" className="form-control" id="until-date"
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
      <button type="button" className="btn btn-danger">
        Save
      </button>
    </Link>
    </div>
    
</div>

  );}
  