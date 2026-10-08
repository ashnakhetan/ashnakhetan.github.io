// data for the projects section of the portfolio (will be used to populate the project cards)
import trackLab from "../assets/tracklab.png";
import wander from "../assets/Route.png";
import pupper from "../assets/Pupper.png";
import trashTalk from "../assets/TrashTalk.png";
import plastiClass from "../assets/PlastiClass.png";
import planIt from "../assets/PlanIt.png";
import rehearal from "../assets/Rehearsal.png";
import saveFace from "../assets/saveFace.jpg";
import politicsBench from "../assets/politicsbench.svg";
import aggreVision from "../assets/aggrevision.svg";

const projectData = {
  projects: [
    {
      imageUrl: pupper,
      name: "Pupper",
      description:
        "A quadruped robot that locates and approaches a person when called",
      tools: "Robotics, DepthAI, Raspberry Pi",
    },
    {
      imageUrl: politicsBench,
      name: "PoliticsBench",
      description:
        "Evaluating political values in language models through multi-turn roleplay; presented at the Trustworthy AI for Good Workshop at ICML 2026",
      tools: "AI evals, benchmarking, politics",
      linkUrl: "https://arxiv.org/abs/2603.23841",
    },
    {
      imageUrl: rehearal,
      name: "Rehearsal",
      description: "A conversational agent for practicing conflict resolution",
      tools: "ConvAI, React Native",
      linkUrl:
        "https://drive.google.com/file/d/1aTxeLhu8Q6nsnVYMeyPWBgJf9rSdZhKM/view?usp=drivesdk",
    },
    {
      imageUrl: saveFace,
      name: "SaveFace",
      description:
        "Exploring ControlNet-based conditioning for facial features in diffusion models",
      tools: "CNNs, Diffusion",
      linkUrl:
        "https://drive.google.com/file/d/1squA7D4CD1aShl2WK5OufAtro_5mlRL9/view?usp=drivesdk",
    },
    {
      imageUrl: trackLab,
      name: "Tracklab",
      description:
        "A web application for organizing music breakpoints and supporting dance rehearsals",
      tools: "React, browser storage",
      linkUrl: "https://ashnakhetan.github.io/tracklab/",
    },
    {
      imageUrl: wander,
      name: "Wander",
      description:
        "A location-based application for sharing and discovering audio stories",
      tools: "React Native, Google Maps API, Supabase",
      // linkUrl: "https://ashnakhetan.github.io/tracklab/"
    },
    {
      imageUrl: trashTalk,
      name: "TrashTalk (CruzHacks 2022)",
      description:
        "A conversational assistant for waste classification and disposal guidance",
      tools: "Node.js, React.js, Google Dialogflow",
      linkUrl: "https://ashnakhetan.github.io/trashtalk/",
    },
    {
      imageUrl: plastiClass,
      name: "PlastiClass (Duke Hackathon 2022)",
      description:
        "A computer-vision application that classifies objects into eight categories of plastic",
      tools: "React.js, ML5, HTML",
      linkUrl: "https://ashnakhetan.github.io/plasticlass/",
    },
    {
      imageUrl: planIt,
      name: "PlanIt Student",
      description:
        "A time-management application with scheduling and time-use analytics",
      tools: "React Native, Google Firebase",
      linkUrl: "https://planitapp2020.wordpress.com/",
    },
    {
      imageUrl: aggreVision,
      name: "AggreVision (Affectiva EMPath Intern 2020)",
      description:
        "Detecting aggressive facial expressions using computer vision to support driver-safety interventions",
      tools: "PyTorch, CNNs, OpenCV",
      linkUrl: "",
    },
  ],
};

export default projectData;
