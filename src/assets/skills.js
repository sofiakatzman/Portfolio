import design_icon from "./icons/design_icon.png";
import dev_icon from "./icons/development_icon.png";
import ops_icon from "./icons/ops_icon.png";

// design icons
import technology_adobe_icon from "../assets/technologies/design/Adobe.svg";
import technology_blender_icon from "../assets/technologies/design/Blender.svg";
import technology_Procreate_icon from "../assets/technologies/design/Procreate.svg";
import technology_ProcreateDreams_icon from "../assets/technologies/design/ProcreateDreams.svg";
import technology_figma_icon from "../assets/technologies/design/Figma.svg";
import technology_invision_icon from "../assets/technologies/design/Invision.svg";

// // dev icons
// import technology_js_icon from "../assets/technologies/dev/JavaScript.svg";
// import technology_react_icon from "../assets/technologies/dev/React.svg";
// import technology_node_icon from "../assets/technologies/design/NodeJS.svg";
// import technology_python_icon from "../assets/technologies/design/Python.svg";
// import technology_ts_icon from "../assets/technologies/design/Typescript.svg";
// import technology_sql_icon from "../assets/technologies/design/SQL.svg";
// import technology_flask_icon from "../assets/technologies/design/Flask.svg";

// // ops icons
// import technology_zapier_icon from "../assets/technologies/ops/zapier.svg";
// import technology_sf_icon from "../assets/technologies/ops/salesforce.svg";
// import technology_at_icon from "../assets/technologies/ops/airtable.svg";
// import technology_bc_icon from "../assets/technologies/ops/basecamp.svg";
// import technology_im_icon from "../assets/technologies/ops/inventorymanagement.svg";
// import technology_excel_icon from "../assets/technologies/ops/excel.svg";

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
          name: "Adobe Suite",
          icon: technology_adobe_icon,
        },
        {
          name: "Blender",
          icon: technology_blender_icon,
        },
        {
          name: "Procreate",
          icon: technology_Procreate_icon,
        },
        {
          name: "Procreate Dreams",
          icon: technology_ProcreateDreams_icon,
        },
        {
          name: "Figma",
          icon: technology_figma_icon,
        },
        {
          name: "Invision",
          icon: technology_invision_icon,
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
          icon: technology_adobe_icon,
        },
        {
          name: "React.js",
          icon: technology_adobe_icon,
        },
        {
          name: "Node.js",
          icon: technology_adobe_icon,
        },
        {
          name: "Python",
          icon: technology_adobe_icon,
        },
        {
          name: "Typescript",
          icon: technology_adobe_icon,
        },
        {
          name: "SQL",
          icon: technology_adobe_icon,
        },
        {
          name: "Flask",
          icon: technology_adobe_icon,
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
          icon: technology_adobe_icon,
        },
        {
          name: "Salesforce",
          icon: technology_adobe_icon,
        },
        {
          name: "Airtable",
          icon: technology_adobe_icon,
        },
        {
          name: "Basecamp",
          icon: technology_adobe_icon,
        },

        {
          name: "Inventory Management",
          icon: technology_adobe_icon,
        },
        {
          name: "Excel",
          icon: technology_adobe_icon,
        },
      ],
    },
  },
];

export default skills;

// saving for when the svgs for each icon are uploaded - to bypass react error
// const skills = [
//   {
//     title: "Design",
//     icon: design_icon,
//     alt: "design icon - pencil",
//     data: {
//       title: "Design",
//       body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed finibus lorem.",
//       header1: "Professional Experience",
//       experience: [
//         "Graphic Design",
//         "Web Design",
//         "Mobile Design",
//         "Illustration",
//         "Fabrication",
//         "Unifying Branding",
//         "Asset Auditing",
//         "Templatization",
//         "Adobe Scripting",
//         "Design Systems",
//         "Asset Management",
//       ],
//       header2: "Technologies",
//       technologies: [
//         {
//           name: "Adobe Suite",
//           icon: technology_adobe_icon,
//         },
//         {
//           name: "Blender",
//           icon: technology_blender_icon,
//         },
//         {
//           name: "Procreate",
//           icon: technology_Procreate_icon,
//         },
//         {
//           name: "Procreate Dreams",
//           icon: technology_ProcreateDreams_icon,
//         },
//         {
//           name: "Figma",
//           icon: technology_figma_icon,
//         },
//         {
//           name: "Invision",
//           icon: technology_invision_icon,
//         },
//       ],
//     },
//   },
//   {
//     title: "Dev",
//     icon: dev_icon,
//     alt: "development icon - mouse cursor",
//     data: {
//       title: "Development",
//       body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed finibus lorem.",
//       header1: "Professional Experience",
//       experience: [
//         "Frontend Development",
//         "Backend Development",
//         "Full-stack Development",
//         "Web Development",
//         "Mobile App Development",
//         "Database Management",
//         "Version Control (Git)",
//         "API Integration",
//         "Testing & Debugging",
//         "Deployment & Maintenance",
//       ],
//       header2: "Technologies",
//       technologies: [
//         {
//           name: "JavaScript",
//           icon: technology_js_icon,
//         },
//         {
//           name: "React.js",
//           icon: technology_react_icon,
//         },
//         {
//           name: "Node.js",
//           icon: technology_node_icon,
//         },
//         {
//           name: "Python",
//           icon: technology_python_icon,
//         },
//         {
//           name: "Typescript",
//           icon: technology_ts_icon,
//         },
//         {
//           name: "SQL",
//           icon: technology_sql_icon,
//         },
//         {
//           name: "Flask",
//           icon: technology_flask_icon,
//         },
//       ],
//     },
//   },
//   {
//     title: "Ops",
//     icon: ops_icon,
//     alt: "operations icon - magic wand",
//     data: {
//       title: "Operations",
//       body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed finibus lorem.",
//       header1: "Professional Experience",
//       experience: [
//         "Process Automation",
//         "Operational Flow Creation",

//         "Compliance & Auditing",
//         "Office Operations",
//         "Sales Operations",
//         "Freight Forwarding",
//         "Logistics",
//         "Event Management",
//         "Capacity Planning",
//       ],
//       header2: "Technologies",
//       technologies: [
//         {
//           name: "Zapier",
//           icon: technology_zapier_icon,
//         },
//         {
//           name: "Salesforce",
//           icon: technology_sf_icon,
//         },
//         {
//           name: "Airtable",
//           icon: technology_at_icon,
//         },
//         {
//           name: "Basecamp",
//           icon: technology_bc_icon,
//         },

//         {
//           name: "Inventory Management",
//           icon: technology_im_icon,
//         },
//         {
//           name: "Excel",
//           icon: technology_excel_icon,
//         },
//       ],
//     },
//   },
// ];

// export default skills;
