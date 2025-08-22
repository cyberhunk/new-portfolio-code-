import mobile from "../assets/mobile.png";
import web from "../assets/web.png";
import full from "../assets/full.png";
import photograpy from "../assets/camera.png";
import jnv from "../assets/jnv.jpeg";
import nitc from "../assets/nitc.jpeg";
import ehawkers from "../assets/ehawker.png";
import bootstrap from "../assets/bootstrap.png";
import npm from "../assets/npm.png";
import Shopifys from "../assets/shopify.png";
import css from "../assets/css.png";
import scss from "../assets/scss.jpeg";
import tail from "../assets/tail.png";
import git from "../assets/git.png";
import htmlcss from "../assets/html.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import node from "../assets/node.png";
import reactjs from "../assets/reactjs.png";
import rgb from "../assets/rgb.jpg";
import crm from "../assets/crm.jpg";
import book from "../assets/book.jpg";
import repo from "../assets/repo.jpg";
import ehawkerimg from "../assets/asx.jpg";
import render from "../assets/render.webp";
import varcel from "../assets/versel.webp";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
 
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Canva",
    icon: mobile,
  },
  {
    title: "Full-Stack Development",
    icon: full,
  },
  {
    title: "PhotoGraphy",
    icon: photograpy,
  },
];

const educations = [
  {
    name: "Heigher Secondary School",
    place: "Amarpatan Madhya Pradesh",
    courseName: "Matriculation (10th)",
    timeline: "July 2015 - March 2016",
    icon: jnv,
    iconBg: "#8aaee0",
    grade: "",
    description:
      "I completed my Higher Secondary education from Government Model Higher Secondary School. During this time, I focused on building strong academic skills and growing personally. The supportive environment and good mentorship helped shape my overall development.",
    skills: ["Comunication", "Discipline "],
  },
  {
    name: "Heigher Secondary School",
    place: "Amarpatan Madhya Pradesh",
    courseName: "Intermediate (12th)",
    timeline: "July 2017 - March 2018",
    icon: jnv,
    iconBg: "#b1c9ef",
    grade: "73.2%",
    description:
      "I completed my 12th grade from Government Model Higher Secondary School, where I developed a strong academic foundation and grew both personally and intellectually. The encouraging environment and dedicated mentorship from my teachers played a key role in shaping my outlook and confidence.",
    skills: ["Positive Attitude", "Responsibility "],
  },
  {
    name: "AKS University",
    place: "Satna, Madhya Pradesh",
    courseName: " Bachelor of Science in Information Technology (Bsc IT)",
    timeline: "August 2018 - May 2021",
    icon: nitc,
    iconBg: "#8aaee0",
    grade: "7.68",
    description:
      "Completed B.Sc. IT from AKS University College, with hands-on experience in web development tools like HTML, CSS, Shopify, and Visual Studio. The program strengthened my technical foundation and enhanced my problem-solving abilities.",
    skills: ["Shopify", "Visual Studio", "Html", "CSS"],
  },
  {
    name: "AKS University",
    place: "Satna, Madhya Pradesh",
    courseName: "Mater of Computer Application (MCA)",
    timeline: "October 2021 - June 2024",
    icon: nitc,
    iconBg: "#b1c9ef",
    grade: "8.45",
    description:
      "Earned a Master of Computer Applications (MCA) degree from AKS University. The program provided advanced knowledge in computer science and software development, strengthening my ability to build complex applications and explore emerging technologies.",
    skills: ["React js", "JavaScript", "Web Development"],
  },
];

const experiences = [
  {
    title: "Software Devoloper Intern",
    company_name: "eHawkers Marketing",
    icon: ehawkers,
    date: "June 2024 - January 2025",
    points: [
      "Working as a frontend developer specializing in the MERN stack (MongoDB, Express, React.js, Node.js) to build and maintain web and mobile applications using React.js",
      "Collaborating with cross-functional teams to deliver high-quality, responsive products with cross-browser compatibility.",
      "Actively participating in code reviews, offering constructive feedback to enhance code quality across the team, with a focus on both frontend and backend technologies including Node.js, Express.js, and MongoDB.",
    ],
  },
  {
    title: "full Stack developer",
    company_name: "eHawkers Marketing",
    icon: ehawkers,
    date: "January 2025 - Present",
    points: [
      "Working as a full stack developer specializing in the MERN stack (MongoDB, Express, React.js, Node.js, Bootstrap, tailwind , Material UI etc.) to build and maintain web and mobile applications using React.js.",
      "Collaborating with cross-functional teams to deliver high-quality, responsive products with cross-browser compatibility.",
      "Actively participating in code reviews, offering constructive feedback to enhance code quality across the team, with a focus on both frontend and backend technologies including Node.js, Express.js, and MongoDB.",
    ],
  },
];

const skills = [
  {
    name: "HTML",
    icon: htmlcss,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "SCSS",
    icon: scss,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Node.js",
    icon: node,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "Git & Github",
    icon: git,
  },
  {
    name: "tailwind css",
    icon: tail,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Shopify",
    icon: Shopifys,
  },
  {
    name: "NPM",
    icon: npm,
  },
  {
    name: "Render",
    icon: render,
  },
  {
    name: "Vercel",
    icon: varcel,
  },
];


import fen from "../assets/fen.jpeg";
import job from "../assets/job.jpeg";
import kanha from "../assets/i.jpeg";
import jet from "../assets/jet.jpeg";
import oldehaw from "../assets/oldehaw.jpeg";
import revoral from "../assets/revoral.jpeg";
const projects = [
  {
    name: "Ehawkers Marketing",
    description:
      "The official website for E-Hawkers Marketing, featuring animations created with GSAP, Three.js, and other advanced tools. It is a visually appealing platform that highlights the company’s services and achievements.",
    // "VotifyU is a MERN stack-based college election platform with a React Native interface and Node.js backend. It allows candidates to register and share campaigns while students cast votes easily. Features include prompt results and a helpline, promoting transparency, engagement, and a democratic student community.",
    tags: [
      {
        name: "React js",
        color: "reactnative",
      },
      {
        name: "BootStrap",
        color: "mongodb",
      },
      {
        name: "mongodb",
        color: "mongodb",
      },
      {
        name: "Free icons",
        color: "nodejs",
      },
      {
        name: "nodejs",
        color: "nodejs",
      },
      {
        name: "expressjs",
        color: "expressjs",
      },
    ],
    image: ehawkerimg,
    source_code_link: " ",
    view: "https://www.ehawkers.co.in/",
  },
  {
    name: "Ehawkers Marketing",
    description:
      "Designed and developed a responsive React web application based on Figma prototypes, implementing smooth UI animations and transitions to enhance user experience. Focused on pixel-perfect layout matching, interactive components, and modern design aesthetics.",
    // "VotifyU is a MERN stack-based college election platform with a React Native interface and Node.js backend. It allows candidates to register and share campaigns while students cast votes easily. Features include prompt results and a helpline, promoting transparency, engagement, and a democratic student community.",
    tags: [
      {
        name: "React js",
        color: "reactnative",
      },
      {
        name: "BootStrap",
        color: "mongodb",
      },
      {
        name: "mongodb",
        color: "mongodb",
      },
      {
        name: "Free icons",
        color: "nodejs",
      },
      {
        name: "nodejs",
        color: "nodejs",
      },
      {
        name: "expressjs",
        color: "expressjs",
      },
    ],
    image: oldehaw,
    source_code_link: " ",
    view: "https://www.ehawkers.co.in/",
  },
  {
    name: "jet trade logistics",
    description:
      "Designed and developed a responsive React web application based on Figma prototypes, implementing smooth UI animations and transitions to enhance user experience. Focused on pixel-perfect layout matching, interactive components, and modern design aesthetics.",
    // "VotifyU is a MERN stack-based college election platform with a React Native interface and Node.js backend. It allows candidates to register and share campaigns while students cast votes easily. Features include prompt results and a helpline, promoting transparency, engagement, and a democratic student community.",
    tags: [
      {
        name: "React js",
        color: "reactnative",
      },
      {
        name: "BootStrap",
        color: "mongodb",
      },
      {
        name: "mongodb",
        color: "mongodb",
      },
      {
        name: "Free icons",
        color: "nodejs",
      },
      {
        name: "nodejs",
        color: "nodejs",
      },
      {
        name: "expressjs",
        color: "expressjs",
      },
    ],
    image: jet,
    source_code_link: " ",
    view: "https://www.jettradelogistics.in//",
  },
  {
    name: "Fenton chemicals",
    description:
      "Developed a comprehensive web application for Fenton Chemicals to manage their product inventory and sales. The application features a user-friendly interface for tracking chemical products, managing orders, and generating sales reports.",
    tags: [
      {
        name: "React js",
        color: "reactnative",
      },
      {
        name: "BootStrap",
        color: "mongodb",
      },
      {
        name: "mongodb",
        color: "mongodb",
      },
      {
        name: "Free icons",
        color: "nodejs",
      },
      {
        name: "nodejs",
        color: "nodejs",
      },
      {
        name: "expressjs",
        color: "expressjs",
      },
    ],
    image: fen,
    source_code_link: "https://github.com/cyberhunk",
    view: "https://www.fentonchemical.com/",
  },
  {
    fil: "shopify",
    name: "Revoral",
    description:
      "I built an eCommerce website using Shopify to sell job packages. I integrated complete functionality including product listing, Buy Now button, and payment gateway. The website allows users to browse, purchase packages, and make secure online payments easily.",
    tags: [
      {
        name: "Shopify",
        color: "reactnative",
      },

    ],
    image: revoral,
    source_code_link: "",
    view: "https://revoral.in/",
  },
  {
    fil: "shopify",
    name: "The hr scoop ",
    description:
      "I built an eCommerce website using Shopify to sell job packages. I integrated complete functionality including product listing, Buy Now button, and payment gateway. The website allows users to browse, purchase packages, and make secure online payments easily.",
    tags: [
      {
        name: "Shopify",
        color: "reactnative",
      },

    ],
    image: job,
    source_code_link: "",
    view: "https://thehrscoop.com/",
  },
  {
    fil: "shopify",
    name: "Kanha art jewellery",
    description:
      "Built a professional eCommerce website for Kanha Jewellery using Shopify. Customized theme, product pages, and integrated secure payment and shipping options. Implemented 'Buy Now' and cart functionalities for a smooth customer experience.",
    tags: [
      {
        name: "Shopify",
        color: "reactnative",
      },

    ],
    image: kanha,
    source_code_link: "",
    view: "https://kanhaartjewellery.com/",
  },
  {
    name: "RGB Color Generator",
    description:
      "Created an RGB Color Generator using JavaScript that generates random RGB colors and displays the corresponding RGB code. Focused on simple UI and real-time color output.",
    tags: [
      {
        name: "HTML",
        color: "android",
      },
      {
        name: "CSS",
        color: "kotlin",
      },

      {
        name: "JAVA SCRIPT",
        color: "kotlin",
      },
    ],
    image: rgb,
    source_code_link: "https://github.com/cyberhunk/RGB-Color",
    view: "https://rgbcolorgenrate.netlify.app/",
  },
  {
    name: "Employee Management CRM",
    description:
      "A React-based frontend CRM system to manage employees and tasks. Admin can assign tasks, track their status, and employees can view and update their task progress — all with login-based access.",
    tags: [
      {
        name: "React js ",
        color: "kotlin",
      },
      {
        name: "Tailwind css",
        color: "android",
      },
      {
        name: "Bootstrap",
        color: "nodejs",
      },
    ],
    image: crm,
    source_code_link: "https://github.com/cyberhunk/employee-menagement-crm",
  },
  {
    name: "Book Store",
    description:
      "A fully functional Online Book Store application built with the MERN stack. Users can browse books, view details, add them to cart, and place orders. Admin can manage inventory including adding, editing, and deleting books.",
    tags: [
      {
        name: "React js ",
        color: "kotlin",
      },
      {
        name: "Bootstrap",
        color: "android",
      },
      {
        name: "Node js",
        color: "nodejs",
      },
      {
        name: "Express js",
        color: "nodejs",
      },
    ],
    image: book,
    source_code_link: "https://github.com/cyberhunk/book-store",
  },
  {
    name: "Click Here Explore My GitHub Repositories...",

    description: "",
    // "A fully functional Online Book Store application built with the MERN stack. Users can browse books, view details, add them to cart, and place orders. Admin can manage inventory including adding, editing, and deleting books.",
    tags: [
      // {
      //   name: "React js ",
      //   color: "kotlin",
      // },
      // {
      //   name: "Bootstrap",
      //   color: "android",
      // },
      // {
      //   name: "Node js",
      //   color: "nodejs",
      // },
      // {
      //   name: "Express js",
      //   color: "nodejs",
      // },
    ],
    view: "https://github.com/cyberhunk?tab=repositories",
    image: repo,
    source_code_link: "https://github.com/cyberhunk?tab=repositories",
  },
];

export { navLinks, services, educations, experiences, skills, projects };
