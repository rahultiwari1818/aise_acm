import student from "../assets/Student.png";
import professor from "../assets/Professor.png";
import professional from "../assets/Professional.png";
import certificate from "../assets/Certificate.png";

const data = {
  "title": "Target Audience",
  "description": "This Winter school is designed for professionals and students passionate about the intersection of AI and software engineering",
  "audiences": [
    {
      "title": "Master's & PhD Students",
      "icon": student,
      "description": "Primarily those in early stages, but also others interested in applying these techniques to their research.",
      "points": ["Research guidance", "Hands-on experience", "Networking opportunities"]
    },
    {
      "title": "Faculties &  Professors",
      "icon": professor,
      "description": "Educators seeking to integrate the school's topics into their courses or curricula.",
      "points": ["Curriculum enhancement", "Teaching resources", "Academic collaboration"]
    },
    {
      "title": "Industry Professionals",
      "icon": professional,
      "description": "Software development practitioners aiming to enhance productivity through new AI techniques.",
      "points": ["Practical implementation", "Industry insights", "Professional growth"]
    }
  ],
  "footnotes": [
    {
      "title": "Prerequisites",
      "icon": student,
      "description": "Basic understanding of software engineering concepts and familiarity with programming languages. No prior AI experience required."
    },
    {
      "title": "Certificate",
      "icon": certificate,
      "description": "All participants will receive a certificate of completion."
    }
  ]
}

export default data;