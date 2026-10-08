import politicsBenchFigure from "../assets/politicsbench-figure.png";
import groundingFigure from "../assets/grounding-gaps-figure.png";

// Titles, author order, and venues follow the linked arXiv records.
const publications = [
  {
    title:
      "PoliticsBench: Benchmarking Political Values in Large Language Models with Multi-Turn Roleplay",
    authors: ["Rohan Khetan", "Ashna Khetan"],
    year: "2026",
    venue: "Trustworthy AI for Good Workshop, ICML 2026",
    description:
      "Evaluating political values in language models through multi-turn roleplay and contextual decision-making",
    imageUrl: politicsBenchFigure,
    imageAlt:
      "PoliticsBench results showing trait activation across interaction stages",
    paperUrl: "https://arxiv.org/abs/2603.23841",
  },
  {
    title: "Grounding Gaps in Language Model Generations",
    authors: [
      "Omar Shaikh",
      "Kristina Gligori\u0107",
      "Ashna Khetan",
      "Matthias Gerstgrasser",
      "Diyi Yang",
      "Dan Jurafsky",
    ],
    year: "2024",
    venue: "NAACL 2024",
    description:
      "Studying how language models establish common ground, ask clarifying questions, and respond in conversation",
    imageUrl: groundingFigure,
    imageAlt:
      "Dialogue examples comparing conversational grounding by humans and language models",
    paperUrl: "https://arxiv.org/abs/2311.09144",
  },
];

export default publications;
