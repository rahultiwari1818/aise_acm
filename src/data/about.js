import image from "../assets/chairs/putin.jpeg";
import Robot from "../assets/icons/robot.svg";
import LineChart from "../assets/icons/LineChart.svg";
import UserGear from "../assets/icons/UserGear.svg";

const data = {
  "title": "About the Winter School",
  "edition": "1st Edition",
  "eventName": "International Winter School on AI-Infused Software Engineering - Research and Practice",
  "eventCode": "AISE 2026",
  "description": "The First International Summer School on LLM-based Agents for Software Engineering aims to cover several aspects related to the use of LLM-based agents for software development. It serves as a meeting point for learning and discussing the latest trends related to the application of Artificial Intelligence techniques in software development.",
  "highlight": "The school features a panel of high-level speakers with extensive experience in the research lines pursued within the program.",
  "topics": [
    {
      "title": "Agents for SE Tasks",
      "description": "Requirements, coding, testing, deployment, and other software engineering activities augmented by LLM-based agents.",
      "icon":Robot
    },
    {
      "title": "Evaluation & Benchmarking",
      "description": "Monitoring and evaluation frameworks for agentic systems in software engineering contexts.",
      "icon":LineChart
    },
    {
      "title": "Hybrid Teams",
      "description": "Human-agent collaboration methodologies and frameworks for effective software development.",
      "icon":UserGear
    }
  ],
  "chairs": [
    {
      "name": "Roberto Rodríguez Echeverría",
      "title": "Associate Professor, University of Extremadura",
      "bio": "Roberto Rodríguez-Echeverría, PhD, is an Associate Professor of Computer Languages and Systems Department at the University of Extremadura.",
      "image": image
    },
    {
      "name": "José María Conejero",
      "title": "Associate Professor, University of Extremadura",
      "bio": "José María Conejero is an Associate Professor in the Department of Computer Languages and Systems Department at the University of Extremadura (Spain).",
      "image": image
    }
  ],
  "footer": "i3Lab by Quercus Software Engineering Group and INTIA (Instituto Universitario de Tecnologías Informáticas Aplicadas), Universidad de Extremadura."
}

export default data;