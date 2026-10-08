import politicsBenchFigure from "../assets/politicsbench-figure.png";
import groundingFigure from "../assets/grounding-gaps-figure.png";
import cosmosFigure from "../assets/cosmos3-figure.webp";
import mathVisualAidsFigure from "../assets/math-visual-aids-figure.webp";

// Team reports use a compact contributor line; other author lists follow arXiv.
const publications = [
  {
    title: "Cosmos 3: Omnimodal World Models for Physical AI",
    authorGroup: "NVIDIA Cosmos Team",
    authors: ["Ashna Khetan"],
    year: "2026",
    venue: "NVIDIA Technical Report",
    description:
      "A unified omnimodal world model for physical AI, spanning language, images, video, audio, and actions",
    imageUrl: cosmosFigure,
    imageAlt:
      "Cosmos 3 overview showing a shared world model for language, vision, audio, and action",
    paperUrl: "https://arxiv.org/abs/2606.02800",
    projectUrl: "https://research.nvidia.com/labs/cosmos-lab/cosmos3/",
  },
  {
    title:
      "Exploring Agentic Workflows for Generating High Quality Math Visual Aids",
    authors: ["Rizwaan Malik", "Ashna Khetan", "Isabel Sieh", "Samin Khan"],
    year: "2026",
    venue: "arXiv preprint",
    description:
      "An agentic workflow for generating, evaluating, and iteratively improving mathematical diagrams for K-12 education",
    imageUrl: mathVisualAidsFigure,
    imageAlt:
      "Agentic workflow for generating mathematical diagrams and evaluating their visual quality",
    paperUrl: "https://arxiv.org/abs/2607.09839",
  },
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
