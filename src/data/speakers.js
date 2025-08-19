import chetan_sir from "../assets/speakers/chetan_sir.jpg";
import sridhar_sir from "../assets/speakers/sridhar_chimalakonda.jpeg";
import shouvick_sir from "../assets/speakers/shouvick_sir.jpg";
import meenakshi_maam from "../assets/speakers/meenakshi_d_souza.jpg";
import sangharatna_sir from "../assets/speakers/sangharatna_sir.jpg";
import santosh_sir from "../assets/speakers/santosh_singh.jpg";
import sourish_sir from "../assets/speakers/sourish_sir.jpg";
import ankush_sir from "../assets/speakers/ankush_sir.jpg";
import saurabh_sir from "../assets/speakers/saurabh_tiwari.jpg";
import aditya_sir from "../assets/speakers/aditya_k.jpg";
import vibhu_sir from "../assets/speakers/vibhu.jpeg";
import diptikalyan_sir from "../assets/speakers/diptikalyan.jpeg";
import karthik_sir from "../assets/speakers/karthik.jpg";


const data = {
  speakers: [
    {
      name: "Aditya Kanade",
      email: "",
      institution: "Microsoft Research",
      topic: "Code Researcher: Deep Research Agent for Large Systems Code and Commit History",
      abstract: "Large Language Model (LLM)-based coding agents have shown promising results on coding benchmarks, but their effectiveness on systems code remains underexplored. Due to the size and complexities of systems code, making changes to a systems codebase is a daunting task, even for humans. It requires researching about many pieces of context, derived from the large codebase and its massive commit history, before making changes. Inspired by the recent progress on deep research agents, we design the first deep research agent for code, called Code Researcher, and apply it to the problem of generating patches for mitigating crashes reported in systems code. Code Researcher performs multi-step reasoning about semantics, patterns, and commit history of code to gather sufficient context. The context is stored in a structured memory which is used for synthesizing a patch. We evaluate Code Researcher on kBenchSyz, a benchmark of Linux kernel crashes, and show that it significantly outperforms strong baselines, achieving a crash-resolution rate of 58%, compared to 37.5% by SWE-agent. On an average, Code Researcher explores 10 files in each trajectory whereas SWE-agent explores only 1.33 files, highlighting Code Researcher's ability to deeply explore the codebase. Through another experiment on an open-source multimedia software, we show the generalizability of Code Researcher. Our experiments highlight the importance of global context gathering and multi-faceted reasoning for large codebases.",
      image: aditya_sir,
      bio:"Aditya is a senior principal researcher at Microsoft Research India. He work on coding agents, agentic and code LMs, deep research and AI safety. He broadly interested in all aspects of building intelligent, trustworthy and scalable systems. Before joining Microsoft Research, he was a full professor at the Indian Institute of Science (2009-2022). He also spent two years as a staff visiting researcher at Google Brain (2018-2020).",
      link:"https://www.microsoft.com/en-us/research/people/kanadeaditya/"
    },
    {
      name: "Vibhu S. Sharma",
      email: "",
      institution: " Accenture Labs",
      topic: "To be updated",
      bio: "",
      image: vibhu_sir,
      abstract:"",
      link:"https://www.linkedin.com/in/sharmavibhu/?originalSubdomain=in "
    },
    {
      name: "Diptikalyan Saha",
      email: "",
      institution: "IBM Research",
      topic: "To be updated",
      bio: "",
      image: diptikalyan_sir,
      abstract:"",
      link:"https://in.linkedin.com/in/diptikalyansaha "
    },

    {
      name: "Chetan Arora",
      email: "",
      institution: "Monash University, Australia",
      topic: "To be updated",
      bio: "",
      image: chetan_sir,
      abstract:"",
      link:"https://research.monash.edu/en/persons/chetan-arora"
    },
    
    {
      name: "Karthik Vaidhyanathan",
      email: "",
      institution: "IIIT Hyderabad, India",
      topic: "To be updated",
      bio: "",
      image: karthik_sir,
      abstract:"",
      link:" https://www.iiit.ac.in/faculty/karthik-vaidhyanathan/ "
    },

    {
      name: "Sridhar Chimalakonda",
      email: "",
      institution: "IIT Tirupati, India",
      topic: "To be updated",
      bio: "",
      image: sridhar_sir,
      abstract:"",
      link:"https://old.iittp.ac.in/dr-sridhar-chimalakonda"
    },
    {
      name: "Shouvick Mondal",
      email: "",
      institution: "IIT Gandhinagar, India",
      topic: "To be updated",
      bio: "",
      image: shouvick_sir,
      abstract:"",
      link:"https://iitgn.ac.in/faculty/cse/shouvick"
    },
    {
      name: "Meenakshi D'Souza",
      email: "",
      institution: "IIIT Bangalore, India",
      topic: "To be updated",
      bio: "",
      image: meenakshi_maam,
      abstract:"",
      link:"https://www.iiitb.ac.in/faculty/meenakshi-dsouza"
    },
    {
      name: "Sangharatna Godboley",
      email: "",
      institution: "NIT Warangal, India",
      topic: "To be updated",
      bio: "",
      image: sangharatna_sir,
      abstract:"",
      link:"https://erp.nitw.ac.in/ext/profile/cs-sanghu"
    },
    {
      name: "Santosh Singh Rathore",
      email: "",
      institution: "ABV-IIITM Gwalior, India",
      topic: "To be updated",
      bio: "",
      image: santosh_sir,
      abstract:"",
      link:"https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.SantoshSinghRathore"
    },
    {
      name: "Sourish Dasgupta",
      email: "",
      institution: "DAU Gandhinagar, India",
      topic: "To be updated",
      bio: "",
      image: sourish_sir,
      abstract:"",
      link:"https://www.daiict.ac.in/faculty-details/2321"
    },
    {
      name: "Ankush Chander",
      email: "",
      institution: "DAU Gandhinagar, India",
      topic: "To be updated",
      bio: "",
      image: ankush_sir,
      abstract:"",
      link:"https://www.daiict.ac.in/adjunct-faculty/ankush-chander"
    },
    {
      name: "Saurabh Tiwari",
      email: "",
      institution: "DAU Gandhinagar, India",
      topic: "To be updated",
      bio: "",
      image: saurabh_sir,
      abstract:"",
      link:"https://www.daiict.ac.in/faculty/saurabh-tiwari"
    },
  ],
};

export default data;
