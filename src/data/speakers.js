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
      bio: "Dr. Vibhu S. Sharma is a Technology Research Principal Director at Accenture Labs India, and has led research in different areas of software engineering, with 20+ years of experience in industrial and academic research combined. His research has spanned primarily across software metrics and process insights, cloud computing, and software performance engineering. Prior to joining Accenture, he completed his Ph.D. in Computer Science and Engg., from the Indian Institute of Technology (IIT) Kanpur in the area of software architecture-based performance and reliability analysis. An academic topper, Vibhu has published more than 50+ peer-reviewed research papers in key journals and conferences, and is an inventor in 75+ granted/issued Patents with many patents applications pending. He been invited to serve in the program committees and review boards of several conferences and journals including ACM/IEEE International Conference on Software Engineering and IEEE Transactions on Software Engineering. His current R&D in various aspects of Sustainability in the context of Software Engineering is helping create impactful IP and R&D innovations resulting in client successes.",
      image: vibhu_sir,
      abstract:"",
      link:"https://www.linkedin.com/in/sharmavibhu/?originalSubdomain=in "
    },
    {
      name: "Diptikalyan Saha",
      email: "",
      institution: "IBM Research",
      topic1:["AI-based Testing","Hands-on AI Agents"],
      topic: "AI-based Testing",
      bio: "Dr Diptikalyan Saha is a Senior Technical Staff Member and Master Inventor at IBM Research, India. He obtained his Ph.D. in Computer Science from the State University of New York at Stony Brook in 2006. His current research focus is to create trusted and scalable AI platforms and services. Earlier he has worked on various areas of Computer Science including logic programming, software engineering, natural language processing, security, and databases, and published in top conferences like ICLP, CCS, FSE, ICSE, VLDB, SIGMOD in these areas. He is an ACM senior member.",
      image: diptikalyan_sir,
      abstracts1:["Generative AI is changing how we think about software engineering. It reduces manual effort and makes automation easier. With natural language as the interface, developers can describe their intent directly, and AI can help turn that into working solutions. In the first part of this talk, I will share a perspective on how GenAI is reshaping software engineering research. In the second part, I will focus on AI-based testing. I will show how we have used AI for unit testing, functional testing, and API testing, and extended it to some more program analysis problems. These examples highlight how AI can improve testing speed, coverage, and quality, and move us closer to more autonomous software development.","AI agents are quickly becoming one of the most exciting ways to bring intelligence into software engineering tasks. In this talk, we will build a ReAct (Reason + Act) agent from scratch, step by step, based on the Langchain framework. We will see how ReACT agents think and interact with the tools and remember context. After the basics, we will look at one use case related to API testing: creating an agent that can automatically generate realistic test cases for testing APIs with OpenAPI specifications. By the end, you will not only know how a ReAct agent works under the hood but also see how it can be applied right away to improve productivity and software quality in real projects."],
      abstract:"",
      link:"https://in.linkedin.com/in/diptikalyansaha "
    },

    {
      name: "Chetan Arora",
      email: "",
      institution: "Monash University, Australia",
      topic: "To be updated",
      bio: "Dr Chetan Arora is a Senior Lecturer in Software Engineering (SE), focusing on applied Artificial Intelligence in SE and other fields. He received his PhD degree from the University of Luxembourg (Luxembourg) with Prof. Lionel Briand, Masters degree in SE from the Technische Universität Kaiserslautern (Germany), and Bachelors in Engineering (CS) degree from Thapar University (India). He is the recipient of the best PhD thesis award in the ICT domain at Uni Luxembourg. Chetan also currently serves as the Director of Education (SSC) at the Faculty of IT at Monash.Prior to joining Monash University, he worked at SES Satellites (Luxembourg) in the department of Innovation Programs on applied AI for IoT and satellite communications (critical infrastructure protection & resilience). He has worked in industry and industry-collaboration research for several years. In his career, he has received above $1.1m in grants as the lead CI.\n His main areas of research interest are applied AI (ML and NLP), SatCom, and software engineering with an emphasis on requirements management and software trustworthiness.",
      image: chetan_sir,
      abstract:"",
      link:"https://research.monash.edu/en/persons/chetan-arora"
    },
    
    {
      name: "Karthik Vaidhyanathan",
      email: "",
      institution: "IIIT Hyderabad, India",
      topic: "Software Architecture in the era of Generative and Agentic AI",
      bio: "Karthik Vaidhyanathan is an Assistant Professor at the Software Engineering Research Center, IIIT-Hyderabad, India where he is also associated with the leadership team of smart city living lab. He obtained his Ph.D. from the Gran Sasso Science Institute, Italy and did his postdoc at the University of L'Aquila, Italy. His main research interests lie in the intersection of software architecture and Artificial Intelligence (AI), with a specific focus on building sustainable software systems. His research focuses on how AI techniques can be leveraged to better architect self-adaptive systems and further how to better define architecting practices for developing AI-enabled systems. As a part of his research activities, he serves as a reviewer/organizing committee member in various workshops, conferences, and journals. He is an editorial board member of IEEE Software. Karthik also poses more than 5 years of industrial experience as an employee and as a consultant in building and deploying ML products/services.",
      image: karthik_sir,
      abstract:"Ever since its inception, the field of software architecture has continuously evolved to cope with different computing trends. The role of the architect as well as the way in which architecting has been performed has also evolved over the years based on various advancements in domains, practices and applications. On the other hand, the field of AI has progressed rapidly, especially over the last few years, with the emergence of generative AI and now with the possibility that is being opened up by Agentic AI. As a result, Software systems, by leveraging ML, are moving from the notion of being another software to more intelligent software systems. At the same time, these advances create new opportunities to reimagine the practice of software architecture itself. This talk will explore two overlapping directions: (i) leveraging Generative and Agentic AI to enhance software architecting practices, and (ii) architecting AI-enabled software systems. Drawing on our research, I will share insights ranging from the use of Generative AI for architecture knowledge management to employing Agentic AI for run-time architectural adaptation, and finally, discuss challenges in architecting Agentic AI systems. The session will conclude with a demo of an open-source Agentic framework built in collaboration with MontyCloud for autonomous CloudOps. ",
      link:" https://www.iiit.ac.in/faculty/karthik-vaidhyanathan/ "
    },

    {
      name: "Sridhar Chimalakonda",
      email: "",
      institution: "IIT Tirupati, India",
      topic: "To be updated",
      bio: "Sridhar Chimalakonda is an Associate Professor in the Department of Computer Science & Engineering at Indian Institute of Technology Tirupati. He did his PhD and MS by Research in Computer Science & Engineering from IIIT Hyderabad. He is also an ACM India Eminent Speaker. He leads the Research in Intelligent Software and Human Analytics (RISHA) Lab which primarily works in the area of Software Engineering, and specifically AI for SE and SE for AI. We research effective and scalable ways to help developers improve quality of software by qualitatively and quantitatively analyzing a diversified range of software artifacts [such as code, commits, bugs, logs, patterns, designs and so on] in millions of software repositories.He is passionate about addressing societal challenges through computing research. Recently, he steered the development of an innovative game SurviveCovid-19 for Covid19 awareness and Mood of India portal to gauge the mood of people during Covid19 through Twitter analysis. \n\nHe volunteers for ACM SIGSOFT [Special Interest Group in Software Engineering] as Social Media Chair and as Core Committee member of ACM iSIGCSE [Special Interest Group in Computer Science Education]",
      image: sridhar_sir,
      abstract:"",
      link:"https://old.iittp.ac.in/dr-sridhar-chimalakonda"
    },
    {
      name: "Shouvick Mondal",
      email: "",
      institution: "IIT Gandhinagar, India",
      topic: "To be updated",
      bio: "Shouvick lead the Software Engineering and Testing Group at CSE, IIT Gandhinagar. Research activities focus on the improvement of existing and the development of new scalable and performant software analysis methodologies to ensure construction of high-quality and trustworthy software systems. Our work has been published and presented in conferences and journals such as ASE, FSE, ICSME, ICST, JSS, EMSE, TSE, and TOSEM. I regularly serve as a Program Committee member in the Artifact Evaluation track of conferences such as ISSTA, and PPoPP. I am also a journal reviewer for TSE, JSS, IST, and SCP.",
      image: shouvick_sir,
      abstract:"",
      link:"https://iitgn.ac.in/faculty/cse/shouvick"
    },
    {
      name: "Meenakshi D'Souza",
      email: "",
      institution: "IIIT Bangalore, India",
      topic: "To be updated",
      bio: "Meenakshi is a Professor at IIIT Bangalore. Her research interests are in Formal Methods, Software Testing, Model Based Development for Embedded Software and Design and Architectures of Embedded Software. She is also interested in gender diversity and accessibility issues in IT. Meenakshi teaches courses on Software Testing, Automata theory and Computability, Discrete Mathematics, Graph Theory and Design and Analysis of Algorithms in IIIT-Bangalore. Meenakshi's course on Software Testing has been offered on the NPTEL, Swayam platform since 2017 and more than 73,000 learners have enrolled for this course over the years. Meenakshi also teaches in the B. Sc., B. S. online degree program of IIT Madras.Meenakshi did her Master’s in Mathematics from University of Madras, Chennai and her Ph. D. in Theoretical Computer Science from The Institute of Mathematical Sciences, Chennai. She joined the research department of Honeywell Technology Solutions, Bangalore soon after completing her Ph. D. and worked there in the areas of Formal Verification of Software Design, Model Based Development and Physical Access Control prior to joining IIIT Bangalore.",
      image: meenakshi_maam,
      abstract:"",
      link:"https://www.iiitb.ac.in/faculty/meenakshi-dsouza"
    },
    {
      name: "Sangharatna Godboley",
      email: "",
      institution: "NIT Warangal, India",
      topic: "To be updated",
      bio: "Sangharatna did his M.Tech (2011-2013) and Ph.D. (2014-2017) from National Institute of Technology Rourkela, India. He worked as Researcher (Aug 2017 - Jan 2018) in School of Computing, National University Singapore. He worked as Postdoctoral Research Fellow (Feb 2018 to June 2020) in School of Computing, National University Singapore. Currently, he is working as an Assistant Professor in Department of Computer Science and Engineering, National Institute of Technology Warangal, India. He is interested to use program analysis techniques to solve the problems of software testing. Basically he is focusing on MC/DC using Dynamic Symbolic execution. He is a team member of Tracer-X Research group (https://github.com/tracer-x).",
      image: sangharatna_sir,
      abstract:"",
      link:"https://erp.nitw.ac.in/ext/profile/cs-sanghu"
    },
    {
      name: "Santosh Singh Rathore",
      email: "",
      institution: "ABV-IIITM Gwalior, India",
      topic: "To be updated",
      bio: "Santosh Singh Rathore is an Assistant Professor at ABV-IIITM Gwalior, India. He earned his Ph.D. from IIT Roorkee in 2017 and M.Tech from IIITDM Jabalpur in 2013. His research spans software fault prediction, quality assurance, and empirical software engineering. He has published 50+ papers and co-authored two Springer books.",
      image: santosh_sir,
      abstract:"",
      link:"https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.SantoshSinghRathore"
    },
    {
      name: "Sourish Dasgupta",
      email: "",
      institution: "DAU Gandhinagar, India",
      topic: "To be updated",
      bio: "Prof. Sourish Dasgupta is an ever-curious researcher and educator. His deep interest in the role of AI in research methodologies led him to take a break from academia and set on an entrepreneurial journey for five years, which resulted in the founding of RAx Labs Inc., Delaware, USA. With some bright ex-students of DA-IICT, Prof. Dasgupta built RAx (https://raxter.io) - an AI-powered online assistant for making literature-review faster and more enriching for young researchers.Coming back from his entrepreneurial stint, Prof. Dasgupta is currently actively engaged in the analysis of less explored but important aspects of 'intelligence' in LLMs, such as their personalization capabilities, and also designing personalized models that are a lot smaller and more eco-friendly than contemporary LLMs. In his pastime, Prof. Dasgupta loves to cook and debate with students. Prof. Dasgupta did his Ph.D. in Computer Science from the University of Missouri – Kansas City, USA.",
      image: sourish_sir,
      abstract:"",
      link:"https://www.daiict.ac.in/faculty-details/2321"
    },
    {
      name: "Ankush Chander",
      bio: "Ankush Chander is an computer science student for life with practical field experience in Information Retrieval, Natural language processing, Information Extraction and DevOps.",
      institution: "DAU Gandhinagar, India",
      topic: "To be updated",
      email: "",
      image: ankush_sir,
      abstract:"",
      link:"https://www.daiict.ac.in/adjunct-faculty/ankush-chander"
    },
    {
      name: "Saurabh Tiwari",
      email: "",
      institution: "DAU Gandhinagar, India",
      topic: "To be updated",
      bio: "Saurabh Tiwari is an Associate Professor at DA-IICT, Gandhinagar (India). Previously, he worked as a Postdoc Researcher at Mälardalen University (Sweden) and worked with Volvo Construction Equipments AB in the Model-Based System Engineering (MBT, MBD) area. His research interests are Requirements Engineering, Empirical Software Engineering, Mining Software Repositories, Green Computing, AI for SE, and HCI. He is also doing research in Software Engineering Education and Training to identify/devise innovative teaching methodologies to teach Software Engineering concepts. He received a research grant from the Science and Engineering Research Board (SERB, Government of India) under the Early Career Research Award scheme. He received two best paper awards at the 20th APSEC 2013 and 25th APSEC 2018 conferences, respectively. His PhD thesis was indexed in the ACM (Association for Computing Machinery) SIGSOFT (Special Interest Group on Software Engineering) list of PhD Dissertations in the area of Software Engineering (2016). He is a professional Senior Member of the ACM and IEEE.",
      image: saurabh_sir,
      abstract:"",
      link:"https://www.daiict.ac.in/faculty/saurabh-tiwari"
    },
  ],
};

export default data;
