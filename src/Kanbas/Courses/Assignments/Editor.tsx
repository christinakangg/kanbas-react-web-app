export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><b>Assignment Name</b></label><br /><br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing 
          page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application
          Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br />

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
            <select id="wd-group">
            <option selected value="ASSIGNMENTS">
                ASSIGNMENTS</option>
            </select>
            </td>
          </tr>
          <br />

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
            <select id="wd-display-grade-as">
            <option selected value="Percentage">
                Percentage</option>
            </select>
            </td>
          </tr>
          <br />

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
            <select id="wd-submission-type">
            <option selected value="Online">
                Online</option>
            </select>
            </td>
          </tr>
          <br />

        <tr>     
            <label htmlFor="wd-submission-type">Online Entry Options</label> 
            <br />
            
            <input type="checkbox" name="text-entry" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label><br/>

            <input type="checkbox" name="website-url" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label><br/>

            <input type="checkbox" name="media-recordings" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

            <input type="checkbox" name="student-annotation" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotation</label><br />

            <input type="checkbox" name="file-upload" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Uploads</label><br />
      
        </tr>
        <br />

        <tr>
            <td>
              <label htmlFor="wd-assign-to">Assign To</label>
            </td>
            </tr>
        <tr>
            <td>
              <input id="wd-assign-to" value={"Everyone"} />
            </td>
        </tr>

        <tr>
            <td>
              <label htmlFor="wd-due-date">Due</label>
            </td>
        </tr>

        <tr>
            <td>
            <input type="date" name="website-url" id="wd-due-date"/>
            </td>
        </tr>

        <tr>

            <td>
              <label htmlFor="wd-available-from">Available from</label><br />
              <input type="date" name="available-from" id="wd-available-from"/>
            </td>
    
            <td>
              <label htmlFor="wd-available-until">Until</label><br />
              <input type="date" name="available-until" id="wd-available-until"/>
            </td>
        
        </tr>

        <br />
        <tr>
          
            <button type = "button" name = "cancel" id= "wd-cancel">Cancel</button>
            <button type ="button" name = "save" id="wd-save">Save</button>
         
        </tr>

        </table>
      </div>
  );}
  