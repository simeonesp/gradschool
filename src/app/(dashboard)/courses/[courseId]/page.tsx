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
        className="text-sm text-gray-500 hover:text-gray-700"
      >
        &larr; Back to courses
      </Link>

      <p className="text-xs font-medium text-gray-500 tracking-wide mt-6">
        {course.code} &middot; Foundation
      </p>
      <h1 className="text-2xl font-semibold text-gray-900 mt-1">
        {course.title}
      </h1>
      <p className="text-gray-600 mt-2 max-w-2xl">{course.description}</p>
      <p className="text-sm text-gray-500 mt-2">
        {course.weeks} weeks &middot; {course.units} units &middot;{" "}
        {course.lessons} lessons
      </p>

      <div className="border-t border-gray-200 mt-8 pt-8">
        <h2 className="text-lg font-semibold text-gray-900">Your progress</h2>
        <div className="mt-4">
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gray-900 rounded-full"
              style={{ width: `${course.progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Week {course.currentWeek} of {course.weeks} &middot;{" "}
            {course.completedLessons} of {course.lessons} lessons completed
          </p>
        </div>
        <Link
          href={`/courses/${course.id}/lessons/1-3`}
          className="inline-block text-blue-600 font-medium mt-4 hover:underline"
        >
          Continue &rarr;
        </Link>
      </div>

      <div className="border-t border-gray-200 mt-8 pt-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Curriculum</h2>

        <div className="divide-y divide-gray-100">
          {weeks.map((week) => (
            <div key={week.number} className="py-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Week {week.number}
                  </p>
                  <p className="text-gray-600">{week.title}</p>
                </div>
                <p className="text-sm text-gray-500">
                  {week.status === "in_progress"
                    ? "In progress"
                    : week.status === "completed"
                    ? "Completed"
                    : "Locked"}
                </p>
              </div>

              {week.status !== "locked" && week.lessons.length > 0 && (
                <div className="mt-4 space-y-2 pl-4">
                  {week.lessons.map((lesson) => (
                    <Link
                      key={lesson.id}
                      href={
                        lesson.status !== "locked"
                          ? `/courses/${course.id}/lessons/${lesson.id}`
                          : "#"
                      }
                      className={`flex justify-between items-center py-2 text-sm ${
                        lesson.status === "current"
                          ? "text-gray-900 font-medium"
                          : lesson.status === "completed"
                          ? "text-gray-500"
                          : "text-gray-400"
                      }`}
                    >
                      <span>
                        {lesson.status === "completed" && ""}
                        {lesson.title}
                      </span>
                      <span>
                        {lesson.status === "current"
                          ? "Current"
                          : lesson.status === "completed"
                          ? "Completed"
                          : ""}
                      </span>
                    </Link>
                  ))}
                </div>
              )}

              {week.status === "locked" && (
                <p className="text-sm text-gray-400 mt-2">
                  Complete Week {week.number - 1} to unlock
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
