// assets imports
import ajmat from "./ajmat.png"; 
import headLog from "./headLog.png";
import namaskar from "./namaskar.png";
import logoRem from "./logoRem.png";
import mrinal from "./mrinal.png"; 
import sachin from "./sachin.png";
import thinkin from "./thinkin.png";
import thinking2 from "./thinking2.png";
import mongodb from "./mongodb.png";
import firebaser from "./firebase.png";
import webicon from "./web-icon.png";
import arrowIcon from "./arrow-icon-white.png";
import aiml from "./aiml.png";
import moon from "./moon.svg";
import menuWhite from "./menu-white.png";
import menuBlack from "./menu-black.png";
import close from "./close.svg";
import rightArrowWhite1 from "./right-arrow-white1.png";
import rightArrowDark1 from "./right-arrow-dark1.png";
import rightArrowDark from "./right-arrow-bold-dark.png";
import rightArrowWhite from "./right-arrow-bold-white.png";
import contact from "./contact.svg";
import downloadIcon from "./download-icon.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import projects_icon from "./project-icon.png";
import projects_icon_dark from "./project-icon-dark.png";
import python from "./python.svg";
import git from "./github.svg";
import vscode from "./vscode.png";
import datascience from "./dataScience.png";
import ds from "./ds.png";
import mailWhite from "./mail_icon_dark.png";
import mailDark from "./mail_icon.png";
import closeWhite from "./close-white.png";
import helog from "./favlog.ico";
import work2 from "./mobile.jpg";
import work3 from "./work-3.png";
import work4 from "./work-4.png";
import hotel from "./hotel.jpg";
import restaurant from "./resturant.jpg";
import school from "./schools.jpg";
import sweet from "./sweet.jpg";
import bakery from "./bakery.jpg"
import education from "./education.png";
import sun from "./sun.svg";
import arrowDark from "./arrow-icon-dar.png";

export const assets = {
    school,
    restaurant,
    hotel,
    bakery,
  helog,
  mailDark,
  mailWhite,
  closeWhite,
  arrowDark,
  sun,
  datascience,
  rightArrowWhite,
  aiml,
  education,
  namaskar,
  rightArrowDark,
  ds,
  menuWhite,
  menuBlack,
  vscode,
  python,
  edu_icon,
  edu_icon_dark,
  projects_icon,
  projects_icon_dark,
  code_icon,
  code_icon_dark,
  arrowIcon,
  downloadIcon,
  contact,
  close,
  rightArrowWhite1,
  rightArrowDark1,
  ajmat,
  headLog,
  moon,
  logoRem,
  mrinal,
  sachin,
  thinkin,
  thinking2,
  webicon,
  firebaser,
  mongodb,
  git,
};

// -----------------------------
// Work Data
// -----------------------------



export const workData = [
  {
    title: "Hotel Booking Website",
    description:
      "A full-featured hotel booking platform with room listings, availability checking, and online reservation functionality built with Next.js and Firebase.",
    img: hotel,
    link: "https://mrmhotelbooking.com",
    tech: ["Next.js", "Tailwind", "Firebase"],
    category: "Hospitality",
  },
  {
    title: "Restaurant Website",
    description:
      "An elegant and responsive restaurant website featuring digital menus, table booking, and Google Maps integration for enhanced customer experience.",
    img: restaurant,
    link: "https://mrmrestaurant.com",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Food & Beverages",
  },
  {
    title: "School Management Website",
    description:
      "A complete school portal with student management, online admissions, results, and admin dashboard features tailored for educational institutions.",
    img: school,
    link: "https://mrmschoolportal.com",
    tech: ["React", "Express", "MongoDB"],
    category: "Education",
  },
  {
    title: "Sweet Store Website",
    description:
      "A beautifully designed online sweet store featuring product galleries, order placement, and integrated WhatsApp ordering for local businesses.",
    img: sweet,
    link: "https://mrmsweets.com",
    tech: ["Next.js", "Tailwind CSS"],
    category: "Retail",
  },
  {
    title: "Bakery Website",
    description:
      "A modern bakery website with dynamic product sections, order forms, and delightful UI showcasing freshly baked items and customer testimonials.",
    img: bakery,
    link: "https://mrmbakery.com",
    tech: ["React", "CSS3", "Firebase"],
    category: "Food & Beverages",
  },
];

// -----------------------------
// Service Data (Updated for MRM)
// -----------------------------

export const serviceData = [
  {
    icon: assets.webicon,
    title: "Website Development",
    description:
      "We build responsive, high-performance, and SEO-optimized websites to help businesses create a powerful online presence. From static company profiles and landing pages to advanced eCommerce platforms and web apps, MRM delivers modern designs with seamless functionality and scalability.",
    serviceInclude: [
      "Business & Portfolio Websites",
      "eCommerce Development",
      "CMS Solutions (WordPress, Shopify, etc.)",
      "Custom Web Applications",
      "Website Maintenance & Redesign",
    ],
    link: "#",
  },
  {
    icon: assets.aiml,
    title: "Mobile App Development",
    description:
      "We develop high-quality Android and iOS apps that combine intuitive design with robust performance. Our team uses the latest frameworks to ensure your app is scalable, secure, and user-friendly — perfect for startups and enterprises alike.",
    serviceInclude: [
      "Android & iOS App Development",
      "Cross-platform Apps (Flutter, React Native)",
      "UI/UX Design for Mobile",
      "API Integration & Backend Development",
      "App Testing & Maintenance",
    ],
    link: "#",
  },
  {
    icon: assets.ds,
    title: "Software & Data Solutions",
    description:
      "From custom business software to powerful data analytics dashboards, MRM delivers smart solutions that streamline operations and empower data-driven decisions. We also specialize in AI & ML integrations for automation and predictive analysis.",
    serviceInclude: [
      "Custom ERP & CRM Systems",
      "Inventory & Billing Software",
      "Data Visualization & Business Analytics",
      "Machine Learning & AI Integration",
      "Cloud-based Applications",
    ],
    link: "#",
  },
  {
    icon: assets.education,
    title: "Tech Education & Training",
    description:
      "We share our industry experience through technical training programs designed for students and professionals. Our goal is to help individuals become industry-ready developers and data experts with real-world skills.",
    serviceInclude: [
      "Web Development Training",
      "Python & Data Science Courses",
      "AI/ML Workshops",
      "Project-Based Learning",
      "Mentorship & Career Guidance",
    ],
    link: "#",
  },
];

// -----------------------------
// Tools Data
// -----------------------------

export const toolsData = [
  assets.vscode,
  assets.firebaser,
  assets.mongodb,
  assets.git,
  assets.python,
];

// -----------------------------
// Info List
// -----------------------------

export const infoList = [
  {
    icon: assets.webicon,
    title: "Full-Stack Development",
    description:
      "End-to-end website and app development — from concept and design to deployment and optimization.",
  },
  {
    icon: assets.projects_icon,
    title: "Result-Driven Delivery",
    description:
      "Focused on building high-performing, fast, and secure solutions that enhance customer experience and ROI.",
  },
  {
    icon: assets.aiml,
    title: "Innovation in AI",
    description:
      "Leveraging Artificial Intelligence and Machine Learning to create smart, automated, and adaptive systems.",
  },
  {
    icon: assets.edu_icon,
    title: "Trusted by Businesses",
    description:
      "Partnered with local and global clients — from startups to enterprises — providing scalable and reliable tech services.",
  },
];
