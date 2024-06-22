import design_icon from "./icons/design_icon.png";
import dev_icon from "./icons/development_icon.png";
import ops_icon from "./icons/ops_icon.png";

const skills = [
  {
    title: "Design",
    icon: design_icon,
    alt: "design icon - pencil",
    data: {
      title: "Design",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed finibus lorem.",
      header1: "Professional Experience",
      experience: [
        "Graphic Design",
        "Web Design",
        "Mobile Design",
        "Illustration",
        "Fabrication",
        "Unifying Branding",
        "Asset Auditing",
        "Templatization",
        "Adobe Scripting",
        "Design Systems",
        "Asset Management",
      ],
      header2: "Technologies",
      technologies: [
        {
          name: "Adobe Creative Suite / Cloud",
          icon: "../assets/technologies/design/Adobe.svg",
        },
        {
          name: "Blender",
          icon: "../assets/technologies/design/Blender.svg",
        },
        {
          name: "Procreate",
          icon: "../assets/technologies/design/Procreate.svg",
        },
        {
          name: "Procreate Dreams",
          icon: "../assets/technologies/design/ProcreateDreams.svg",
        },
        { name: "Figma", icon: "../assets/technologies/design/Figma.svg" },
        {
          name: "Invision",
          icon: "../assets/technologies/design/Invision.svg",
        },
      ],
    },
  },
  {
    title: "Dev",
    icon: dev_icon,
    alt: "development icon - mouse cursor",
    data: {
      title: "Development",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed finibus lorem.",
      header1: "Professional Experience",
      experience: [
        "Frontend Development",
        "Backend Development",
        "Full-stack Development",
        "Web Development",
        "Mobile App Development",
        "Database Management",
        "Version Control (Git)",
        "API Integration",
        "Testing & Debugging",
        "Deployment & Maintenance",
      ],
      header2: "Technologies",
      technologies: [
        {
          name: "JavaScript",
          icon: "",
        },
        {
          name: "React.js",
          icon: "",
        },
        {
          name: "Node.js",
          icon: "",
        },
        {
          name: "Python",
          icon: "",
        },
        {
          name: "Typescript",
          icon: "",
        },
        {
          name: "SQL",
          icon: "",
        },
        {
          name: "Flask",
          icon: "",
        },
      ],
    },
  },
  {
    title: "Ops",
    icon: ops_icon,
    alt: "operations icon - magic wand",
    data: {
      title: "Operations",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed finibus lorem.",
      header1: "Professional Experience",
      experience: [
        "Process Automation",
        "Operational Flow Creation",

        "Compliance & Auditing",
        "Office Operations",
        "Sales Operations",
        "Freight Forwarding",
        "Logistics",
        "Event Management",
        "Capacity Planning",
      ],
      header2: "Technologies",
      technologies: [
        {
          name: "Zapier",
          icon: "",
        },
        {
          name: "Salesforce",
          icon: "",
        },
        {
          name: "Airtable",
          icon: "",
        },
        {
          name: "Basecamp",
          icon: "",
        },

        {
          name: "Inventory Management",
          icon: "",
        },
        {
          name: "Excel",
          icon: "",
        },
      ],
    },
  },
];

export default skills;
