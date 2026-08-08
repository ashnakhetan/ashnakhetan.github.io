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
      imageUrl: politicsBench,
      name: "PoliticsBench",
      description:
        "Benchmarked political evals for LLMs with my little brother; presented at the AI4Good Workshop @ ICML 2026",
      tools: "AI evals, benchmarking, politics",
      linkUrl: "https://arxiv.org/abs/2603.23841",
    },
    {
      imageUrl: rehearal,
      name: "Rehearsal",
      description: "Practice conflict resolution with an agent",
      tools: "ConvAI, React Native",
      linkUrl:
        "https://drive.google.com/file/d/1aTxeLhu8Q6nsnVYMeyPWBgJf9rSdZhKM/view?usp=drivesdk",
    },
    {
      imageUrl: saveFace,
      name: "SaveFace",
      description: "ControlNets for facial features",
      tools: "CNNs, Diffusion",
      linkUrl:
        "https://drive.google.com/file/d/1squA7D4CD1aShl2WK5OufAtro_5mlRL9/view?usp=drivesdk",
    },
    {
      imageUrl: trackLab,
      name: "Tracklab",
      description:
        "I made this web app for my dance team to easily set breakpoints in our music!",
      tools: "React, browser storage",
      linkUrl: "https://ashnakhetan.github.io/tracklab/",
    },
    {
      imageUrl: pupper,
      name: "Pupper",
      description: "Our quadruped robot that comes to you when called!",
      tools: "DepthAI, Raspberry Pi",
      // linkUrl: "https://ashnakhetan.github.io/tracklab/"
    },
    {
      imageUrl: wander,
      name: "Wander",
      description:
        "Create audio stories and listen to others' as you roadtrip",
      tools: "React Native, Google Maps API, Supabase",
      // linkUrl: "https://ashnakhetan.github.io/tracklab/"
    },
    {
      imageUrl: trashTalk,
      name: "TrashTalk (CruzHacks 2022)",
      description: "The chatbot that guides your waste disposal",
      tools: "Node.js, React.js, Google Dialogflow",
      linkUrl: "https://ashnakhetan.github.io/trashtalk/",
    },
    {
      imageUrl: plastiClass,
      name: "PlastiClass (Duke Hackathon 2022)",
      description:
        "Classifies any items you hold into 8 different categories of plastic",
      tools: "React.js, ML5, HTML",
      linkUrl: "https://ashnakhetan.github.io/plasticlass/",
    },
    {
      imageUrl: planIt,
      name: "PlanIt Student",
      description:
        "Time management app that provides analytics over your time-usage",
      tools: "React Native, Google Firebase",
      linkUrl: "https://planitapp2020.wordpress.com/",
    },
    {
      imageUrl: aggreVision,
      name: "AggreVision (Affectiva EMPath Intern 2020)",
      description:
        "Uses computer vision to detect aggressive expressions in a driver's face and prevents the driver from destructive actions",
      tools: "PyTorch, CNNs, OpenCV",
      linkUrl: "",
    },
  ],
};

export default projectData;
