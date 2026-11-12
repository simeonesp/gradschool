import Link from "next/link";

const nextCourses = [
  { code: "FOUND 210", title: "Minds and Cognition" },
  { code: "FOUND 220", title: "Language, Meaning, and Communication" },
  { code: "FOUND 230", title: "Decision, Judgment, and Rationality" },
];

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">
        Continue where you left off
      </h1>

      <Link
        href="/courses/found-200"
        className="block border border-gray-200 rounded-lg p-6 mt-6 hover:border-gray-300 transition-colors duration-150"
      >
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
          FOUND 200
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-1">
          Formal Systems and Representation
        </h2>
        <p className="text-gray-600 mt-2">
          Week 1 &middot; The Nature of Formal Systems
        </p>
        <p className="text-sm text-gray-500 mt-1">
          8% complete &middot; 3 of 36 lessons
        </p>
        <p className="text-blue-600 font-medium mt-4 hover:underline">
          Continue &rarr;
        </p>
      </Link>

      <div className="mt-12">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Your stats</h2>
        <div className="flex gap-12">
          <p className="text-gray-900">
            <span className="font-medium">1</span> course active
          </p>
          <p className="text-gray-900">
            <span className="font-medium">12</span> hours this month
          </p>
          <p className="text-gray-900">
            <span className="font-medium">Week 1</span> of 12
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Next courses
        </h2>
        <div className="space-y-3">
          {nextCourses.map((course) => (
            <div
              key={course.code}
              className="flex justify-between items-center py-3 opacity-60"
            >
              <p className="text-gray-900">
                {course.code} &middot; {course.title}
              </p>
              <p className="text-sm text-gray-500">Locked</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
