import saurabh_sir from "../assets/chairs/saurabh_tiwari.jpg";
import yash_sir from "../assets/chairs/yash_agarwal.jpg";
import Robot from "../assets/icons/robot.svg";
import LineChart from "../assets/icons/LineChart.svg";
import UserGear from "../assets/icons/UserGear.svg";

const data = {
  title: "About the Winter School",
  edition: "1st Edition",
  eventName:
    "International Winter School on AI-Infused Software Engineering - Research and Practice",
  eventCode: "AISE 2026",
  description:
    "The First AISE Winter School focuses on bridging the gap between AI and Software Engineering in the Indian context. It aims to train participants in AI-enhanced SE practices through lectures, tutorials, and hands-on sessions. Topics include requirement classification, software analytics, automated testing, performance optimization, and code generation using LLMs and GenAI. The school brings academic and industrial perspectives to address the skill gap and limited research presence in global SE forums, establishing a strong foundation for AI-driven SE in India.",
  highlight:
    "The school features expert talks, practical sessions, and brainstorming discussions with leading researchers and practitioners in AI and Software Engineering.",
  topics: [
    {
      title: "Introduction to LLMs and GenAI Techniques	",
      description: "",
      icon: Robot,
    },
    {
      title: "Innovating Software Engineering by embracing AI",
      description: "",
      icon: LineChart,
    },
    {
      title: "Mining Software Repositories (MSR)",
      description: "",
      icon: UserGear,
    },
    {
      title: "Software Testing and Verification",
      description: "",
      icon: UserGear,
    },
  ],
  chairs: [
    {
      name: "Saurabh Tiwari ",
      title: "Associate Professor, Dhirubhai Ambani University",
      bio: "",
      image: saurabh_sir,
    },
    {
      name: "Yash Agrawal",
      title: "Associate Professor, Dhirubhai Ambani University",
      bio: "",
      image: yash_sir,
    },
  ],
  footer: "",
};

export default data;
