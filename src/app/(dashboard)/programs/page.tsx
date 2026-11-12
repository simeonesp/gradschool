import Link from "next/link";

const programs = [
  {
    id: "integrated-systems",
    title: "Integrated Systems of Mind, Meaning, and Decision",
    description:
      "Connect cognitive science, formal reasoning, and decision theory through an integrated curriculum.",
    courses: 21,
    duration: "2 years",
  },
  {
    id: "decision-science",
    title: "Decision Science and Critical Thinking",
    description:
      "Focus on judgment, rationality, and evidence-based reasoning for complex environments.",
    courses: 15,
    duration: "18 months",
  },
];

export default function ProgramsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Programs</h1>
      <p className="text-gray-600 mt-2 max-w-xl">
        Choose a program to structure your learning.
      </p>

      <div className="mt-8 space-y-4">
        {programs.map((program) => (
          <Link
            key={program.id}
            href={`/programs/${program.id}`}
            className="block border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors duration-150"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              {program.title}
            </h2>
            <p className="text-gray-600 mt-2">{program.description}</p>
            <p className="text-sm text-gray-500 mt-4">
              {program.courses} courses · {program.duration}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
