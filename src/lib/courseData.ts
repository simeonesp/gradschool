export interface Lesson {
  id: string;
  title: string;
  type: "reading" | "exercise" | "assessment";
  duration: string;
  status: "completed" | "current" | "upcoming" | "locked";
}

export interface Week {
  number: number;
  title: string;
  status: "completed" | "in_progress" | "locked";
  lessons: Lesson[];
}

export const found200Weeks: Week[] = [
  {
    number: 1,
    title: "The Nature of Formal Systems",
    status: "in_progress",
    lessons: [
      {
        id: "1-1",
        title: "What is a Formal System?",
        type: "reading",
        duration: "20 min",
        status: "completed",
      },
      {
        id: "1-2",
        title: "Historical Context",
        type: "reading",
        duration: "25 min",
        status: "completed",
      },
      {
        id: "1-3",
        title: "Construct Simple Systems",
        type: "exercise",
        duration: "30 min",
        status: "current",
      },
      {
        id: "1-4",
        title: "Identify Ambiguities",
        type: "exercise",
        duration: "25 min",
        status: "upcoming",
      },
      {
        id: "1-5",
        title: "Design Your Own System",
        type: "assessment",
        duration: "45 min",
        status: "upcoming",
      },
    ],
  },
  {
    number: 2,
    title: "Propositional Logic — Syntax and Semantics",
    status: "locked",
    lessons: [
      {
        id: "2-1",
        title: "Syntax of Propositional Logic",
        type: "reading",
        duration: "25 min",
        status: "locked",
      },
      {
        id: "2-2",
        title: "Truth Tables and Semantics",
        type: "reading",
        duration: "30 min",
        status: "locked",
      },
      {
        id: "2-3",
        title: "Classify Logical Forms",
        type: "exercise",
        duration: "20 min",
        status: "locked",
      },
    ],
  },
  {
    number: 3,
    title: "Propositional Logic — Proof Systems",
    status: "locked",
    lessons: [],
  },
  {
    number: 4,
    title: "Predicate Logic — Quantification",
    status: "locked",
    lessons: [],
  },
  {
    number: 5,
    title: "Predicate Logic — Reasoning with Quantifiers",
    status: "locked",
    lessons: [],
  },
  {
    number: 6,
    title: "Sets, Relations, and Functions",
    status: "locked",
    lessons: [],
  },
  {
    number: 7,
    title: "Knowledge Representation — Ontologies",
    status: "locked",
    lessons: [],
  },
  {
    number: 8,
    title: "Knowledge Representation — Semantic Networks",
    status: "locked",
    lessons: [],
  },
  {
    number: 9,
    title: "Ambiguity and Formal Models",
    status: "locked",
    lessons: [],
  },
  {
    number: 10,
    title: "Applications in AI and Cognitive Science",
    status: "locked",
    lessons: [],
  },
  {
    number: 11,
    title: "Limits of Formalization",
    status: "locked",
    lessons: [],
  },
  {
    number: 12,
    title: "Integration and Final Project",
    status: "locked",
    lessons: [],
  },
];

export const found200 = {
  id: "found-200",
  code: "FOUND 200",
  title: "Formal Systems and Representation",
  description:
    "Learn to construct and analyze formal systems, understand the relationship between syntax and semantics, and apply formal methods to represent knowledge in real domains.",
  weeks: 12,
  units: 3,
  lessons: 36,
  progress: 8,
  currentWeek: 1,
  completedLessons: 3,
};
