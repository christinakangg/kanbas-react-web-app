import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kanbas/Courses/1234/Home"> CS1234 React JS </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/webdev.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kanbas/Courses/1234/Home"> CS5610 </Link>
            <p className="wd-dashboard-course-title">
            Web Development </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/ios.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kanbas/Courses/1234/Home"> CS5520 </Link>
            <p className="wd-dashboard-course-title">
              Mobile Application Development iOS </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/datastructures.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kanbas/Courses/1234/Home"> CS5008 </Link>
            <p className="wd-dashboard-course-title">
              Data Structures, Algorithms, and their Applications within Computer Systems  </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/discrete.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kanbas/Courses/1234/Home"> CS5002 </Link>
            <p className="wd-dashboard-course-title">
              Discrete Structures </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/ood.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kanbas/Courses/1234/Home"> CS5004 </Link>
            <p className="wd-dashboard-course-title">
              Object-Oriented Design </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/foundations.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kanbas/Courses/1234/Home"> CS5001 </Link>
            <p className="wd-dashboard-course-title">
              Intensive Foundations of CS </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
      </div>
    </div>
);}
