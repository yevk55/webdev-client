"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../kambaz.css";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const home = `/courses/${cid}/home`;
  const modules = `/courses/${cid}/modules`;
  const piazza = `/courses/${cid}/piazza`;
  const assignments = `/courses/${cid}/assignments`;
  const grades = `/courses/${cid}/grades`;
  const people = `/courses/${cid}/people`;
  const quizzes = `/courses/${cid}/quizzes`;
  const zoom = `/courses/${cid}/zoom`;



  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg">
      <Link
        href={home}
        id="wd-course-home-link"
        className={
          pathname === home
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Home
      </Link>
      <Link
        href={modules}
        id="wd-course-modules-link"
        className={
          pathname === modules
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Modules
      </Link>

      <Link
        href={piazza}
        id="wd-course-piazza-link"
        className={
          pathname === piazza
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Piazza
      </Link>

      <Link
        href={grades}
        id="wd-course-grades-link"
        className={
          pathname === grades
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Grades
      </Link>

      <Link
        href={zoom}
        id="wd-course-zoom-link"
        className={
          pathname === zoom
            ? "list-group-item active border-0 border-start border-3 border-dark"
            : "list-group-item border-0 text-red-600"
        }
      >
        Zoom
      </Link>

      {/* ...Piazza and Zoom, same pattern... */}
      <Link
        href={assignments}
        id="wd-course-assignments-link"
        className={
          pathname === assignments || pathname.startsWith(assignments + "/")
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Assignments
      </Link>

      <Link
        href={people}
        id="wd-course-people-link"
        className={
          pathname === people || pathname.startsWith(people + "/")
            ? "list-group-item active border-0 border-start border-3 border-dark"
            : "list-group-item border-0 text-red-600"
        }
      >
        People
      </Link>

      <Link
        href={quizzes}
        id="wd-course-quizzes-link"
        className={
          pathname === quizzes
            ? "list-group-item active border-0 border-start border-3 border-dark"
            : "list-group-item border-0 text-red-600"
        }
      >
        Quizzes
      </Link>

      <Link
        href={home}
        id="wd-course-ai-link"
        className="list-group-item border-0 text-red-600"
      >
        Sample
      </Link>

      {/* ...Quizzes, Grades, People, same pattern... */}
    </div>
  );
}