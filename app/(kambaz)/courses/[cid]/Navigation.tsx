"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { label: "Home", segment: "home" },
  { label: "Modules", segment: "modules" },
  { label: "Piazza", segment: "piazza" },
  { label: "Zoom", segment: "zoom" },
  { label: "Assignments", segment: "assignments" },
  { label: "Quizzes", segment: "quizzes" },
  { label: "Grades", segment: "grades" },
  { label: "People", segment: "people/table" },
  { segment: "announcements", id: "wd-course-announcements-link", label: "Announcements" },
] as const;

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";

  return (

     <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg">

      {LINKS.map(({label, segment}) => {
        const href = `/courses/${cid}/${segment}`;
        const active = pathname.includes(href)
        return (
          <Link
            key={label}
            href={href}
            id={`wd-course-${label}-link`}
            className={`block py-3 text-center text-sm no-underline ${
              active
              ? "list-group-item active border 0"
              : "list-group-item border-0 text-red-600"
            }`}
          >
            {label}
          </Link>
        );
      })}
     </div>

  );
}