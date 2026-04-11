import EngPic from "../assets/projects/EngPic.png";
import friendlyWeb from "../assets/projects/friendlyWeb.png";
import StudentManageImg from "../assets/projects/StudentManageImg.png";

export const HERO_CONTENT = `"I created this portfolio website using JavaScript, React, Tailwind CSS framework and the Framer Motion library. It’s designed to introduce myself, showcase my skills, and highlight the projects I’ve worked on."`;

export const ABOUT_TEXT = `My name is Suwanchai Chaisuwansri, but you can call me Phlu. I'm 20 years old, born on April 20, 2006, and I'm Thai. I currently live in Chiang Mai and study at Chiang Mai University in the College of Arts, Media and Technology, majoring in Digital Industry Integration. I have a deep interest in programming because of its complexity and the rewarding sense of accomplishment it brings when solving challenges. My main passion is web development, and I aspire to become a web developer in the future.`;

export const PROJECTS = [
  {
    title: "Booking Web App",
    image: friendlyWeb,
    description:
      "This project is my first full-stack website, inspired by my family's resort on Koh Phangan. It manages room bookings, prices, and availability, with users booking through the frontend and data sent to the backend.",
    technologies: ["MongoDB", "React.js", "Express.js", "Node.js"],
    linktag: ''
  },
  {
    title: "Student Management Web",
    image: StudentManageImg,
    description:
      "The system helps teachers manage student information more easily by combining attendance, grading, and performance tracking in one place. It reduces paperwork, eliminates the need for printed documents, and allows teachers to edit data anytime, anywhere through a simple web interface. The platform is easy to use, requires no installation, and makes it faster and more accurate to monitor each student’s progress.",
    technologies: ["SQL", "JavaScript", "Tailwind", "Node.js"],
    linktag: 'english-dictionary'
  },
];

export const CONTACT = {
  address: "110/40 M.6 Bantai Koh-Phagan Surat-Thani 84280",
  phoneNo: "+66 064-628-8437",
  email: "phlugiezstudentz@gmail.com"
};
