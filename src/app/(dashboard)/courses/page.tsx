import Link from "next/link";

const courses = [
  {
    id: "found-200",
    code: "FOUND 200",
    title: "Formal Systems and Representation",
    status: "In progress",
    progress: "8%",
    locked: false,
  },
  {
    id: "found-210",
    code: "FOUND 210",
    title: "Minds and Cognition",
    status: "Locked",
    progress: null,
    locked: true,
  },
  {
    id: "found-220",
    code: "FOUND 220",
    title: "Language, Meaning, and Communication",
    status: "Locked",
    progress: null,
    locked: true,
  },
  {
    id: "found-230",
    code: "FOUND 230",
    title: "Decision, Judgment, and Rationality",
    status: "Locked",
    progress: null,
    locked: true,
  },
  {
    id: "found-240",
    code: "FOUND 240",
    title: "Research Methods and Integration",
    status: "Locked",
    progress: null,
    locked: true,
  },
];

export default function CoursesPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Courses</h1>
      <p className="text-gray-600 mt-1 max-w-xl">
        Foundation courses required for all programs.
      </p>

      <div className="mt-8 space-y-1">
        {courses.map((course) => (
          <Link
            key={course.id}
            href={`/courses/${course.id}`}
            className={`flex justify-between items-center py-4 hover:bg-gray-50 -mx-2 px-2 rounded transition-colors duration-150 ${
              course.locked ? "opacity-60" : ""
            }`}
          >
            <div>
              <p className="text-gray-900">
                <span className="font-medium">{course.code}</span> &middot;{" "}
                {course.title}
              </p>
              {course.progress && (
                <p className="text-sm text-gray-500 mt-0.5">
                  {course.progress} complete
                </p>
              )}
            </div>
            <p className="text-sm text-gray-500">{course.status}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
