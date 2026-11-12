"use client";

import Link from "next/link";
import { useState } from "react";

const lessonContent = {
  title: "Construct Simple Formal Systems",
  type: "Exercise",
  duration: "30 min",
  intro: `You will construct a simple formal system from scratch and test its properties.`,
  body: `A formal system has four parts:

1. An alphabet — the symbols you can use
2. Formation rules — how to combine symbols into valid strings
3. Axioms — strings accepted as true without proof
4. Inference rules — how to derive new strings from existing ones

Consider a system for generating strings of 'a' and 'b' characters. The formation rule is: a valid string has some number of a's followed by the same number of b's.

Examples: "ab", "aabb", "aaabbb" are valid. "ba", "abab", "aab" are not.`,
};

const checkpoint = {
  prompt:
    "Which strings are well-formed in this system? Select all that apply.",
  options: [
    { id: "1", text: "aabb", correct: true },
    { id: "2", text: "abab", correct: false },
    { id: "3", text: "bbaa", correct: false },
    { id: "4", text: "aaabbb", correct: true },
  ],
  explanation:
    "aabb and aaabbb follow the pattern: all a's first, then an equal number of b's. abab alternates (wrong order). bbaa has b's before a's (wrong order).",
};

export default function LessonPage({
  params,
}: {
  params: { courseId: string; lessonId: string };
}) {
  const [selected, setSelected] = useState<string[]>([]);
  const [confidence, setConfidence] = useState<number>(70);
  const [submitted, setSubmitted] = useState(false);

  const toggle = (id: string) => {
    if (submitted) return;
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const submit = () => {
    if (selected.length > 0) setSubmitted(true);
  };

  const correctIds = checkpoint.options.filter((o) => o.correct).map((o) => o.id);
  const gotItRight =
    selected.length === correctIds.length &&
    selected.every((id) => correctIds.includes(id));

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-10">
        <Link href="/dashboard" className="text-lg font-semibold text-gray-900">
          Gradschool
        </Link>
        <p className="text-sm text-gray-500">FOUND 200 · Week 1 · 3 of 5</p>
      </header>

      <main className="pt-14 pb-20">
        <div className="max-w-2xl mx-auto px-6 py-10">
          <Link
            href={`/courses/${params.courseId}`}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-150"
          >
            Back to course
          </Link>

          <h1 className="text-2xl font-semibold text-gray-900 mt-8">
            {lessonContent.title}
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            {lessonContent.type} · {lessonContent.duration}
          </p>

          <div className="mt-8 space-y-4 text-gray-600">
            <p>{lessonContent.intro}</p>
            {lessonContent.body.split("\n\n").map((para, i) => (
              <p key={i} className="whitespace-pre-line">
                {para}
              </p>
            ))}
          </div>

          {/* Signature element: Prediction checkpoint with confidence */}
          <div className="border border-gray-200 rounded-lg p-6 mt-10">
            <p className="font-medium text-gray-900">{checkpoint.prompt}</p>

            <div className="mt-4 space-y-2">
              {checkpoint.options.map((opt) => (
                <label
                  key={opt.id}
                  className={`flex items-center gap-3 py-2.5 px-3 rounded-md cursor-pointer transition-colors duration-150 ${
                    submitted
                      ? opt.correct
                        ? "bg-gray-50"
                        : ""
                      : selected.includes(opt.id)
                      ? "bg-gray-100"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selected.includes(opt.id)}
                    onChange={() => toggle(opt.id)}
                    disabled={submitted}
                    className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                  />
                  <code className="text-gray-900">{opt.text}</code>
                </label>
              ))}
            </div>

            {!submitted && (
              <>
                <div className="mt-8">
                  <label className="block text-sm text-gray-600 mb-3">
                    How confident are you?
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min={50}
                      max={100}
                      step={10}
                      value={confidence}
                      onChange={(e) => setConfidence(Number(e.target.value))}
                      className="flex-1 h-2 bg-gray-100 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-gray-900 [&::-webkit-slider-thumb]:rounded-full"
                    />
                    <span className="text-sm font-medium text-gray-900 w-12 text-right">
                      {confidence}%
                    </span>
                  </div>
                </div>

                <button
                  onClick={submit}
                  disabled={selected.length === 0}
                  className="mt-6 h-10 px-5 bg-gray-900 text-white rounded-md hover:bg-gray-800 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed font-medium transition-colors duration-150"
                >
                  Check answer
                </button>
              </>
            )}

            {submitted && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="font-medium text-gray-900">
                  {gotItRight ? "Correct" : "Incorrect"}
                </p>
                <p className="text-gray-600 mt-2">{checkpoint.explanation}</p>
                <p className="text-sm text-gray-500 mt-3">
                  Your confidence: {confidence}%
                  {gotItRight && confidence >= 80 && " — well calibrated"}
                  {gotItRight && confidence < 60 && " — you knew more than you thought"}
                  {!gotItRight && confidence >= 80 && " — overconfident on this one"}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white">
        <div className="max-w-2xl mx-auto px-6 py-4 flex justify-between">
          <Link
            href={`/courses/${params.courseId}/lessons/1-2`}
            className="text-gray-600 hover:text-gray-900 transition-colors duration-150"
          >
            <span className="text-sm">Previous</span>
            <span className="block text-gray-400 text-sm">Historical Context</span>
          </Link>
          <Link
            href={`/courses/${params.courseId}/lessons/1-4`}
            className="text-right text-gray-600 hover:text-gray-900 transition-colors duration-150"
          >
            <span className="text-sm">Next</span>
            <span className="block text-gray-400 text-sm">Identify Ambiguities</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
