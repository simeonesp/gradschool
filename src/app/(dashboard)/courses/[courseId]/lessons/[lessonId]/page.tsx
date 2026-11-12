"use client";

import Link from "next/link";
import { useState } from "react";

const lessonContent = {
  "1-3": {
    title: "Construct Simple Formal Systems",
    type: "Active exercise",
    duration: "About 30 minutes",
    content: `In this exercise, you'll construct a simple formal system from scratch and test its properties.

A formal system consists of:
1. A set of symbols (the alphabet)
2. Rules for combining symbols into well-formed formulas
3. Axioms (formulas accepted as true without proof)
4. Inference rules (ways to derive new formulas from existing ones)

Let's start with a very simple example: a system for generating strings of 'a's and 'b's.`,
    hasExercise: true,
  },
};

const exerciseQuestion = {
  prompt: "Which of these strings are well-formed in a system where valid strings must have equal numbers of 'a's and 'b's, with all 'a's before all 'b's?",
  options: [
    { id: "1", text: "aabb", correct: true },
    { id: "2", text: "abab", correct: false },
    { id: "3", text: "bbaa", correct: false },
    { id: "4", text: "aaabbb", correct: true },
  ],
};

export default function LessonPage({
  params,
}: {
  params: { courseId: string; lessonId: string };
}) {
  const lesson = lessonContent["1-3"];
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [confidence, setConfidence] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const toggleAnswer = (id: string) => {
    if (submitted) return;
    setSelectedAnswers((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    if (selectedAnswers.length > 0 && confidence !== null) {
      setSubmitted(true);
    }
  };

  const correctAnswers = exerciseQuestion.options
    .filter((o) => o.correct)
    .map((o) => o.id);
  const isCorrect =
    selectedAnswers.length === correctAnswers.length &&
    selectedAnswers.every((a) => correctAnswers.includes(a));

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-10">
        <Link href="/dashboard" className="text-lg font-semibold text-gray-900">
          GatherOS
        </Link>
        <span className="text-sm text-gray-500">
          FOUND 200 &middot; Week 1 &middot; 3 of 5
        </span>
      </header>

      <main className="pt-14">
        <div className="max-w-2xl mx-auto px-6 py-10">
          <Link
            href={`/courses/${params.courseId}`}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            &larr; Back to course
          </Link>

          <h1 className="text-2xl font-semibold text-gray-900 mt-8">
            {lesson.title}
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            {lesson.type} &middot; {lesson.duration}
          </p>

          <div className="border-t border-gray-200 mt-6 pt-6">
            <div className="prose prose-gray max-w-none">
              {lesson.content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-gray-600 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {lesson.hasExercise && (
            <div className="border border-gray-200 rounded-lg p-6 mt-8">
              <p className="text-gray-900 font-medium mb-4">
                {exerciseQuestion.prompt}
              </p>

              <div className="space-y-2">
                {exerciseQuestion.options.map((option) => (
                  <label
                    key={option.id}
                    className={`flex items-center gap-3 p-3 rounded-md cursor-pointer transition-colors ${
                      submitted
                        ? option.correct
                          ? "bg-gray-50"
                          : selectedAnswers.includes(option.id)
                          ? "bg-gray-50"
                          : ""
                        : selectedAnswers.includes(option.id)
                        ? "bg-gray-100"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedAnswers.includes(option.id)}
                      onChange={() => toggleAnswer(option.id)}
                      disabled={submitted}
                      className="w-4 h-4 rounded border-gray-300"
                    />
                    <span className="text-gray-900 font-mono">{option.text}</span>
                  </label>
                ))}
              </div>

              {!submitted && (
                <>
                  <p className="text-sm text-gray-600 mt-6 mb-3">
                    How confident are you?
                  </p>
                  <div className="flex gap-4">
                    {[50, 60, 70, 80, 90, 100].map((value) => (
                      <label
                        key={value}
                        className="flex flex-col items-center cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="confidence"
                          checked={confidence === value}
                          onChange={() => setConfidence(value)}
                          className="w-4 h-4 border-gray-300"
                        />
                        <span className="text-sm text-gray-600 mt-1">
                          {value}%
                        </span>
                      </label>
                    ))}
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={selectedAnswers.length === 0 || confidence === null}
                    className="mt-6 h-10 px-4 bg-gray-900 text-white rounded-md hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed font-medium"
                  >
                    Submit answer
                  </button>
                </>
              )}

              {submitted && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="font-medium text-gray-900">
                    {isCorrect
                      ? `Correct — ${correctAnswers.length} of ${correctAnswers.length}`
                      : "Incorrect"}
                  </p>
                  <p className="text-gray-600 mt-2">
                    <span className="font-mono">aabb</span> and{" "}
                    <span className="font-mono">aaabbb</span> follow the pattern
                    (a&apos;s then b&apos;s with equal counts).{" "}
                    <span className="font-mono">abab</span> alternates,{" "}
                    <span className="font-mono">bbaa</span> has b&apos;s first.
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Your confidence: {confidence}%
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <footer className="border-t border-gray-200 mt-12">
          <div className="max-w-2xl mx-auto px-6 py-4 flex justify-between">
            <Link
              href={`/courses/${params.courseId}/lessons/1-2`}
              className="text-gray-600 hover:text-gray-900"
            >
              &larr; Previous
              <span className="block text-sm text-gray-500">
                Historical Context
              </span>
            </Link>
            <Link
              href={`/courses/${params.courseId}/lessons/1-4`}
              className="text-right text-gray-600 hover:text-gray-900"
            >
              Next &rarr;
              <span className="block text-sm text-gray-500">
                Identify Ambiguities
              </span>
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
