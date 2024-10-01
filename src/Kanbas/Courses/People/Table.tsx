import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
        </thead>
        <tbody>
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span></td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:21:32</td> </tr>
         
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Bruce</span>{" "}
              <span className="wd-last-name">Wayne</span></td>
            <td className="wd-login-id">091243486A</td>
            <td className="wd-section">S204</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2024-10-1</td>
            <td className="wd-total-activity">11:08:41</td> </tr>

            <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Steve</span>{" "}
              <span className="wd-last-name">Rodgers</span></td>
            <td className="wd-login-id">998763514B</td>
            <td className="wd-section">S311</td>
            <td className="wd-role">TA</td>
            <td className="wd-last-activity">2024-09-30</td>
            <td className="wd-total-activity">02:11:28</td> </tr>

            <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Natasha</span>{" "}
              <span className="wd-last-name">Romanoff</span></td>
            <td className="wd-login-id">123847811V</td>
            <td className="wd-section">S102</td>
            <td className="wd-role">TA</td>
            <td className="wd-last-activity">2024-10-02</td>
            <td className="wd-total-activity">12:11:10</td> </tr>

            <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Peter</span>{" "}
              <span className="wd-last-name">Parker</span></td>
            <td className="wd-login-id">12893471P</td>
            <td className="wd-section">S781</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2024-9-29</td>
            <td className="wd-total-activity">09:32:49</td> </tr>

            <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Christina</span>{" "}
              <span className="wd-last-name">Kang</span></td>
            <td className="wd-login-id">2468101214C</td>
            <td className="wd-section">S402</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2024-10-01</td>
            <td className="wd-total-activity">06:35:14</td> </tr>

        </tbody>
      </table>
    </div> );}