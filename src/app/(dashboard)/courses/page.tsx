import Link from "next/link";

const courses = [
  {
    id: "found-200",
    code: "FOUND 200",
    title: "Formal Systems and Representation",
    description: "Construct and analyze formal systems, understand syntax and semantics, apply formal methods to represent knowledge.",
    progress: 8,
    weeks: 12,
    locked: false,
  },
  {
    id: "found-210",
    code: "FOUND 210",
    title: "Minds and Cognition",
    description: "Explore how minds process information, form beliefs, and generate behavior through computational and philosophical lenses.",
    progress: null,
    weeks: 12,
    locked: true,
  },
  {
    id: "found-220",
    code: "FOUND 220",
    title: "Language, Meaning, and Communication",
    description: "Study how language conveys meaning, enables coordination, and shapes thought across contexts.",
    progress: null,
    weeks: 12,
    locked: true,
  },
  {
    id: "found-230",
    code: "FOUND 230",
    title: "Decision, Judgment, and Rationality",
    description: "Learn frameworks for making better decisions under uncertainty, recognizing biases, and evaluating evidence.",
    progress: null,
    weeks: 12,
    locked: true,
  },
  {
    id: "found-240",
    code: "FOUND 240",
    title: "Research Methods and Integration",
    description: "Design studies, analyze data, and integrate insights across cognitive science, linguistics, and decision theory.",
    progress: null,
    weeks: 12,
    locked: true,
  },
];

function LockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

export default function CoursesPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">
          Foundation Courses
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          Complete these five courses to build your foundation.
        </p>
      </div>

      <div className="space-y-4">
        {courses.map((course) => (
          <Link
            key={course.id}
            href={`/courses/${course.id}`}
            className={`block border rounded-xl p-6 transition-colors duration-150 ${
              course.locked
                ? "border-gray-200 opacity-60"
                : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {course.code}
                </p>
                <h2 className="text-xl font-semibold text-gray-900 mt-1.5 tracking-tight">
                  {course.title}
                </h2>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  {course.description}
                </p>
                <p className="text-sm text-gray-400 mt-3">
                  {course.weeks} weeks
                </p>
              </div>

              <div className="flex-shrink-0">
                {course.locked ? (
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <LockIcon />
                    <span>Locked</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-2xl font-semibold text-gray-900">
                        {course.progress}%
                      </p>
                      <p className="text-xs text-gray-500">complete</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center">
                      <PlayIcon />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {!course.locked && course.progress !== null && (
              <div className="mt-4">
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gray-900 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
