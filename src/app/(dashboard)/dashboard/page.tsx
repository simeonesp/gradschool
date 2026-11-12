import Link from "next/link";

const upcomingCourses = [
  {
    code: "FOUND 210",
    title: "Minds and Cognition",
    description: "Explore how minds process information, form beliefs, and generate behavior.",
    weeks: 12,
  },
  {
    code: "FOUND 220",
    title: "Language, Meaning, and Communication",
    description: "Study how language conveys meaning and enables human coordination.",
    weeks: 12,
  },
  {
    code: "FOUND 230",
    title: "Decision, Judgment, and Rationality",
    description: "Learn frameworks for making better decisions under uncertainty.",
    weeks: 12,
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
      className="text-gray-400"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export default function DashboardPage() {
  return (
    <div className="max-w-3xl">
      {/* Hero section */}
      <div className="mb-12">
        <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">
          Pick up where you left off
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          You&apos;re making progress on Formal Systems and Representation.
        </p>
      </div>

      {/* Current course card */}
      <Link
        href="/courses/found-200"
        className="block bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors duration-150"
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              FOUND 200
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-2 tracking-tight">
              Formal Systems and Representation
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed max-w-lg">
              Week 1: The Nature of Formal Systems
            </p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-semibold text-gray-900">8%</p>
            <p className="text-sm text-gray-500 mt-1">complete</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gray-900 rounded-full"
              style={{ width: "8%" }}
            />
          </div>
        </div>

        <p className="text-blue-600 font-medium mt-6">
          Continue learning
        </p>
      </Link>

      {/* Stats */}
      <section className="mt-12 grid grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <p className="text-2xl font-semibold text-gray-900">3</p>
          <p className="text-sm text-gray-500 mt-1">lessons done</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <p className="text-2xl font-semibold text-gray-900">12h</p>
          <p className="text-sm text-gray-500 mt-1">this month</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <p className="text-2xl font-semibold text-gray-900">1/12</p>
          <p className="text-sm text-gray-500 mt-1">weeks</p>
        </div>
      </section>

      {/* Upcoming courses */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900 tracking-tight mb-6">
          Coming up next
        </h2>
        <div className="grid gap-4">
          {upcomingCourses.map((course) => (
            <div
              key={course.code}
              className="border border-gray-200 rounded-lg p-6 opacity-60"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    {course.code}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mt-1.5">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <LockIcon />
                  <span>Locked</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                {course.weeks} weeks · Complete FOUND 200 to unlock
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
