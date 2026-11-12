import Link from "next/link";

const upcomingCourses = [
  { code: "FOUND 210", title: "Minds and Cognition" },
  { code: "FOUND 220", title: "Language, Meaning, and Communication" },
  { code: "FOUND 230", title: "Decision, Judgment, and Rationality" },
];

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">
        Pick up where you left off
      </h1>

      <Link
        href="/courses/found-200"
        className="block border border-gray-200 rounded-lg p-6 mt-6 hover:border-gray-300 transition-colors duration-150"
      >
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
          FOUND 200
        </p>
        <p className="text-xl font-semibold text-gray-900 mt-1">
          Formal Systems and Representation
        </p>
        <p className="text-gray-600 mt-2">
          Week 1: The Nature of Formal Systems
        </p>
        <p className="text-sm text-gray-500 mt-1">
          3 of 36 lessons completed
        </p>
        <p className="text-blue-600 font-medium mt-4 hover:underline">
          Continue
        </p>
      </Link>

      <section className="mt-12">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Progress</h2>
        <div className="flex gap-12 text-gray-900">
          <p>
            <span className="font-medium">1</span> active course
          </p>
          <p>
            <span className="font-medium">12</span> hours this month
          </p>
          <p>
            Week <span className="font-medium">1</span> of 12
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Upcoming courses
        </h2>
        <div className="space-y-1">
          {upcomingCourses.map((course) => (
            <Link
              key={course.code}
              href={`/courses/${course.code.toLowerCase().replace(" ", "-")}`}
              className="flex justify-between items-center py-3 opacity-50"
            >
              <p className="text-gray-900">
                {course.code}: {course.title}
              </p>
              <p className="text-sm text-gray-500">Locked</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
