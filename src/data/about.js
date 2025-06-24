
import llm from "../assets/llm.webp";
import msr from "../assets/msr.png";
import testing from "../assets/testing.png";
import ai from "../assets/ai_in_se.jpg";



const data = {
  title: "About the Winter School",
  edition: "1st Edition",
  eventName:
    "Winter School on AI-Infused Software Engineering (AISE)",
  subTitle:"Research and Practice",
  eventCode: "AISE 2026",
  description: [
    "As Software Engineering (SE) evolves, integrating Artificial Intelligence (AI) presents a significant opportunity to transform development processes. Although India is emerging as a top economy with a robust SE sector, the integration of SE for AI and AI for SE lags behind more tech-forward nations. Many Indian IT companies, particularly service-based firms, continue to rely on traditional practices and face challenges in incorporating AI due to a persistent skill gap and limited research contributions. Despite producing a large number of software engineers, few are trained in AI-enhanced SE workflows, and India’s presence in leading AI-driven SE research forums like ICSE, FSE, or ASE remains minimal.",
    "To bridge the gap between theory and practice within the Indian ecosystem, the proposed winter school will equip participants with essential AI skills for Software Engineering. Motivated by the demand for engineers who can apply AI to requirement classification, software analytics, automated testing, performance optimization, and code generation, the program combines lectures, hands-on sessions, and tutorials. Participants will explore practical AI applications and cutting-edge research shaping future software development. Additionally, the school aims to discuss integrating AI and SE to provide a holistic learning experience to participants. We also intend to establish this AISE school as an annual event within the Indian context.",
    "The school will explore academic and industrial perspectives on AI in SE. Initially, participants receive background and hands-on training with LLMs and GenAI frameworks. Next, we focus on how AI contributes to improving the software development process. The next agenda covers software analytics via repository mining and discusses AI adoption in testing, verification, and code generation. The final agenda focuses on teaching software engineering to students and practitioners. We aim to encourage discussions through brainstorming sessions to explore and refine approaches for teaching software engineering using GenAI models.",
  ],
  highlight:
    "The school features expert talks, practical sessions, and brainstorming discussions with leading researchers and practitioners in AI and Software Engineering.",
  topics: [
    {
      title: "Introduction to LLMs and GenAI Techniques	",
      description: "",
      icon: llm,
    },
    {
      title: "Innovating Software Engineering by embracing AI",
      description: "",
      icon: ai,
    },
    {
      title: "Mining Software Repositories (MSR)",
      description: "",
      icon: msr,
    },
    {
      title: "Software Testing and Verification",
      description: "",
      icon: testing,
    },
  ],
  // chairs: [
  //   {
  //     name: "Saurabh Tiwari ",
  //     title: "Associate Professor, Dhirubhai Ambani University",
  //     bio: "",
  //     image: saurabh_sir,
  //   },
  //   {
  //     name: "Yash Agrawal",
  //     title: "Associate Professor, Dhirubhai Ambani University",
  //     bio: "",
  //     image: yash_sir,
  //   },
  // ],
  footer: "",
};

export default data;
