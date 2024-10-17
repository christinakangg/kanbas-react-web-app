import { Link, useLocation, useParams } from "react-router-dom";
export default function CoursesNavigation() {
  const {cid} = useParams();
  const { pathname } = useLocation();
  const links = [
    { name: "Home", path: `/Kanbas/Courses/${cid}/Home` },
    { name: "Modules", path: `/Kanbas/Courses/${cid}/Modules` },
    { name: "Piazza", path: `/Kanbas/Courses/${cid}/Piazza` },
    { name: "Zoom", path: `/Kanbas/Courses/${cid}/Zoom` },
    { name: "Assignments", path: `/Kanbas/Courses/${cid}/Assignments` },
    { name: "Quizzes", path: `/Kanbas/Courses/${cid}/Quizzes` },
    { name: "Grades", path: `/Kanbas/Courses/${cid}/Grades` },
    { name: "People", path: `/Kanbas/Courses/${cid}/People` },
  ];

  return (
     <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link key={link.path} to={link.path} className={`list-group-item border border-0 
          ${pathname.includes(link.path) ? "active text-black bg-white" : "text-danger bg-white"}`}>
          {link.name}
        </Link>
      ))}
    </div>);}
