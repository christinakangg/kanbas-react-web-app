export default function AssignmentEditor() {
    return (
    <div id="assignment-editor">
    <div className="mb-4">
    <label htmlFor="assignment-name" className="form-label">
      Assignment Name</label>
    <input type="name" className="form-control"
      id="assignment-name" placeholder="A1"/>
    </div>

    <div className="mb-4">
  <textarea className="form-control" id="text-area"
    placeholder={'\nThe assignment is available online\n\nSubmit a link to the landing page of your Web application running on Netlify.\n\nThe landing page should include the following:\n\nYour full name and section\nLinks to each of the lab assignments\nLink to the Kanbas application\nLinks to all relevant source code repositories\n\nThe Kanbas application should include a link to navigate back to the landing page.'}
    rows={13}></textarea>
</div>

<div className="mb-3">
  <div className="row align-items-center">
    <label htmlFor="points" className="col-sm-3 col-form-label mb-0">
      Points
    </label>
    <div className="col-sm-9">
      <input type="text" className="form-control" id="points" value="100" />
    </div>
  </div>  
  
  <div className="row align-items-center mt-3">
    <label htmlFor="assignment-group" className="col-sm-3 col-form-label mb-0">
      Assignment Group
    </label>
    <div className="col-sm-9">
      <select id="assignmentGroup" className="form-select">
        <option value="">ASSIGNMENTS</option>
        <option value="group1">Group 1</option>
        <option value="group2">Group 2</option>
        <option value="group3">Group 3</option>
      </select>
    </div>
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
  <div className="row align-items-start">
    <label htmlFor="display-grade" className="col-sm-3 col-form-label mb-0">
      Submission Type
    </label>

    <div className="col-sm-9">
      <div className="border border-1 p-3">
        <select id="assignmentGroup" className="form-select mb-3">
          <option value="">Online</option>
          <option value="group1">Group 1</option>
          <option value="group2">Group 2</option>
          <option value="group3">Group 3</option>
        </select>

        <label htmlFor="points" className="col-sm-3 col-form-label mb-3 fw-bold">
        Online Entry Options
        </label>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="r6" />
          <label className="form-check-label" htmlFor="r6">
             Text Entry
          </label>
        </div>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="r6" />
          <label className="form-check-label" htmlFor="r6">
             Website URL
          </label>
        </div>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="r6" />
          <label className="form-check-label" htmlFor="r6">
             Media Recordings
          </label>
        </div>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="r6" />
          <label className="form-check-label" htmlFor="r6">
             Student Annotation
          </label>
        </div>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="r6" />
          <label className="form-check-label" htmlFor="r6">
             File Uploads
          </label>
        </div>
        
      </div>
    </div>
  </div>
</div>

<div className="mb-5">
  <div className="row align-items-start">
    <label htmlFor="display-grade" className="col-sm-3 col-form-label mb-0">
      Assign
    </label>

    <div className="col-sm-9">
      <div className="border border-1 p-3">
    
        <label htmlFor="points" className="col-sm-3 col-form-label fw-bold fs-5">
        Assign to
        </label>

        <div className="border border-1 p-1">
       <div className="border border-secondary bg-secondary d-flex justify-content-between align-items-center" style={{ width: '10rem', padding: '0.5rem' }}>
      <p className="mb-0">Everyone</p>
      <button className="btn btn-close"></button>
      </div>
      </div>

      <label htmlFor="points" className="col-sm-3 col-form-label fw-bold fs-5">
        Due
      </label>

      <div className="mb-3">  
        <input type="date" className="form-control" id="dateInput" defaultValue="2024-05-13" />
      </div>

      <div className="mb-3">
      <div className="row">
        <div className="col-sm-6">
          <label htmlFor="startDate" className="form-label fw-bold fs-5">
            Available From</label>
          <input
            type="date"
            className="form-control"
            id="startDate"
            defaultValue={"2024-05-06"}
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="endDate" className="form-label fw-bold fs-5">
            Until</label>
          <input
            type="date"
            className="form-control"
            id="endDate"
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
      <button type="button" className="btn btn-secondary me-2">
        Cancel
      </button>
      <button type="button" className="btn btn-danger">
        Save
      </button>
    </div>
</div>


  );}
  