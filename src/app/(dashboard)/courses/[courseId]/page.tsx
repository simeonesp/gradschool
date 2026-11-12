import Link from "next/link";
import { found200, found200Weeks } from "@/lib/courseData";

export default function CourseDetailPage({
  params,
}: {
  params: { courseId: string };
}) {
  const course = found200;
  const weeks = found200Weeks;

  return (
    <div>
      <Link
        href="/courses"
        className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-150"
      >
        Back to courses
      </Link>

      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-6">
        {course.code}
      </p>
      <h1 className="text-2xl font-semibold text-gray-900 mt-1">
        {course.title}
      </h1>
      <p className="text-gray-600 mt-3 max-w-2xl">{course.description}</p>
      <p className="text-sm text-gray-500 mt-3">
        {course.weeks} weeks · {course.units} units · {course.lessons} lessons
      </p>

      <section className="border-t border-gray-200 mt-8 pt-8">
        <h2 className="text-lg font-semibold text-gray-900">Your progress</h2>
        <div className="mt-4">
          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gray-900 rounded-full transition-all duration-300"
              style={{ width: `${course.progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-3">
            {course.completedLessons} of {course.lessons} lessons completed · Week {course.currentWeek}
          </p>
        </div>
        <Link
          href={`/courses/${course.id}/lessons/1-3`}
          className="inline-block text-blue-600 font-medium mt-4 hover:underline"
        >
          Continue
        </Link>
      </section>

      <section className="border-t border-gray-200 mt-8 pt-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Curriculum</h2>

        <div className="space-y-6">
          {weeks.map((week) => (
            <div
              key={week.number}
              className={week.status === "locked" ? "opacity-50" : ""}
            >
              <div className="flex justify-between items-baseline">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Week {week.number}
                  </p>
                  <p className="text-gray-600 mt-0.5">{week.title}</p>
                </div>
                <p className="text-sm text-gray-500">
                  {week.status === "in_progress"
                    ? "In progress"
                    : week.status === "completed"
                    ? "Done"
                    : "Locked"}
                </p>
              </div>

              {week.status !== "locked" && week.lessons.length > 0 && (
                <div className="mt-3 ml-4 space-y-1">
                  {week.lessons.map((lesson) => (
                    <Link
                      key={lesson.id}
                      href={
                        lesson.status !== "locked"
                          ? `/courses/${course.id}/lessons/${lesson.id}`
                          : "#"
                      }
                      className={`block py-2 text-sm transition-colors duration-150 ${
                        lesson.status === "current"
                          ? "text-gray-900 font-medium"
                          : lesson.status === "completed"
                          ? "text-gray-500"
                          : "text-gray-400"
                      } ${lesson.status !== "locked" ? "hover:text-gray-900" : ""}`}
                    >
                      <span className="flex justify-between">
                        <span>{lesson.title}</span>
                        <span className="text-gray-400">
                          {lesson.status === "current" && "Current"}
                          {lesson.status === "completed" && "Done"}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              )}

              {week.status === "locked" && (
                <p className="text-sm text-gray-400 mt-1 ml-4">
                  Complete Week {week.number - 1} to unlock
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
