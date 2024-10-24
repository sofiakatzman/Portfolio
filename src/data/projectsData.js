import pjPlaceholder from "../../src/assets/project-placeholder.png";
import stackerlogo from "../../src/assets/stacker_logo.png";
import airtablelogo from "../../src/assets/airtable_logo.png";
import zapierlogo from "../../src/assets/zapier_logo.png";
import featurePlaceholder from "../../src/assets/feature-placeholder.jpg"




export const projectsData = [
    {
        name: "Tymoo - Tidal Wave Content",
        image: pjPlaceholder, 
        description: "An AI-powered tool that transforms form inputs into brand documentation—automating target audience personas, content waves, and blog writing. Built using Airtable, Zapier, ChatGPT, and API integrations.",
        tags: ["Testing 1","Testing 2","Testing 3","Testing 4"],
        cta1_copy:"Read More >",
        cta1_url:"/work/tymoo",
        cta2_copy:"View Live >",
        cta2_url:"https://www.tidalwavecontent.com/",
        project_page_link: "https://www.tidalwavecontent.com/",
        project_page_copy: "view live",
        summary: "A content marketing platform that helps brand marketers, agencies, and creators grow brand awareness and build customer loyalty. I automated the creation of key documents, contributed to the interface design, and wrote scripts to track blog performance and suggest keywords.",
        role: "Full-Stack Developer, Project Manager",
        toolslist: "Airtable, Zapier, Stacker, SEMrush, OpenAI, Claude, Basecamp",
        technologies: "Javascript, Python, OpenAI, Webhooks, Airtable Scripting",
        apis: "Airtable, Zapier, OpenAI, SEMrush, Google Drive, Basecamp, Anthropic",
        phasesdescription: "The initial tool delivery relied on piecemeal automation using Typeform and Zapier, which was implemented with scalability in mind. However, we quickly realized that focusing on scalability too early complicated the workflow and made it harder for users to access documents. We needed a stronger foundation first.  I transitioned the process to Airtable forms, streamlining data collection and improving efficiency. Later, I integrated this input method into the TyMoo platform, allowing users to access all their documents and tools in one place. This evolution transformed a complex system into a streamlined, scalable solution.",
        phases: [
            {
                strong: "Typeform",
                text: "Have users fill out Typeforms to provide necessary data to generate foundational documents. Automate this flow and open beta access."
            },
            {
                strong: "Airtable Forms",
                text: "Integrate Airtable forms to process in order to centralize data collection. Use forms for directly-with-consumer (on the phone) foundational document creation."
            },
            {
                strong: "Stacker",
                text: "Scrap Typeform and bring forms into TyMoo application. Users sign up and now have access to all of their generated documents directly on the Tymoo Platform. Once documents are completed, they can generate content waves and write blogs with our AI assistant."
            }
        ],
        toolstack: "While I worked within the tools preferred by my client and navigated certain limitations, many custom solutions still had to be developed with code to meet the platform's unique needs. As the sole developer, I prioritized low-code solutions where possible to ensure maintainability in my absence, but also implemented custom coding solutions to deliver a scalable and efficient system.",
        tools: [
            {
                logo: airtablelogo,
                name: "Airtable",
                description: "Airtable serves as the backbone of the platform, functioning as the central database. I leveraged its full range of capabilities, including automations, scripts, forms, and interfaces, to streamline data collection and workflow management. These tools played a critical role in ensuring the platform's efficiency and scalability, allowing users to interact seamlessly with their data and automating key processes behind the scenes.",
            },
            {
                logo: stackerlogo,
                name: "Stacker",
                description: "Stacker serves as the front-end interface for TyMoo, where users interact with the platform by filling out forms and accessing their generated content. I integrated all forms into Stacker, building out the entire user interface to provide seamless access to personas, content waves, and blog analytics. Prior to my involvement, the TyMoo interface was primarily used for blog post creation and tracking, but I expanded its functionality to serve as a central hub for the entire platform.",
            },
            {
                logo: zapierlogo,
                name: "Zapier",
                description: "Zapier is the automation platform that ties everything together. I optimized workflows by creating subzaps—reusable components that function like coding functions. These subzaps are embedded into multiple zaps, streamlining the process and making the platform more efficient by reducing redundant tasks.",
            }
        ],
        features: [
            {
                name: "Generate Persona",
                descriptions: "Automatically generate a detailed target audience persona based on user input, helping marketers align their brand messaging with their ideal customer profile. This feature uses AI to produce custom personas that can be tailored for different marketing strategies.",
                input: "User answers 22 questions",
                output:"Generated Persona \n Generated Brand Promise",
                image: featurePlaceholder,
            },
            {
                name: "Generate Content Wave",
                descriptions: "Automatically generate a detailed target audience persona based on user input, helping marketers align their brand messaging with their ideal customer profile. This feature uses AI to produce custom personas that can be tailored for different marketing strategies.Create a series of content suggestions based on the user's marketing goals and previously generated target audience. The Content Wave feature provides an overview of potential blog topics, social media posts, and other marketing content, helping users maintain a consistent content flow.",
                input: "User answers 22 questions",
                output:"Content Brief \n Content Structure \n 7 Blog Ideas",
                image: featurePlaceholder,
            },
            {
                name: "Write Blog",
                descriptions: "This feature leverages AI to write original blog content based on an overview and seed keywords. Users can generate a full blog post that aligns with their SEO strategy and brand voice, saving significant time in content creation. This uses the previously generated foundational documents (persona and content structure) as a knowledge base.",
                input: "Blog Overview \n Seed Keyword",
                output:"Blog Post",
                image: featurePlaceholder,
            },
            {
                name: "ReWrite Blog",
                descriptions: "The ReWrite Blog feature uses AI to refine and improve existing blog content, enhancing readability and optimizing for SEO. Users can update older posts or adjust their messaging to improve engagement and ranking.",
                input: "Published Blog Post",
                output:"Rewritten Blog Post \n Suggested Keywords & Title",
                image: featurePlaceholder,
            },
            {
                name: "Blog Analytics",
                descriptions: "Track the performance of published blogs by monitoring key metrics such as SEO ranking, traffic, and engagement. This feature provides weekly insights, helping users optimize their content strategy for better performance over time.",
                input: "Published Blog Posts",
                output:"Organic Keywords \n Organic Traffic \n Organic Cost \n Metric Differences",
                image: featurePlaceholder,
            },
            {
                name: "Suggested Keywords",
                descriptions: "This tool analyzes the content and suggests keywords based on a seed keyword or existing content, helping marketers improve their SEO. Users can approve or deny these suggestions and track their effectiveness through the platform’s analytics tools.",
                input: "Published Blog Posts",
                output:"Keyword Volume \n Keyword Difficulty \n Keyword CPC",
                image: featurePlaceholder,
            },
        ]


    },
    {
        name: "Clubs Asset Generator",
        image: pjPlaceholder, 
        description: "Figma plugin developed for Scholastic Book Clubs. Generate series of brand-specific banners directly or batch import from Air Table entries! ",
        tags: ["Figma Plugin","Airtable","TS"],
        cta1_copy:"Read More >",
        cta1_url:"/work/asset-generator",
        // cta2_copy:"View Live >",
        // cta2_url:"",
        // project_page_link: "https://www.tidalwavecontent.com/",
        // project_page_copy: "view live",
        summary: "Figma plugin developed for Scholastic Book Clubs. Generate series of brand-specific banners directly or batch import from Air Table entries! ",
        role: "Product Designer and Full Stack Developer",
        toolslist: "Figma, AirTable, Basecamp, Zapier",
        technologies: "Javascript, React,  HTML, CSS",
        apis: "Figma, AirTable, Basecamp, Google Docs",
        phasesdescription: "The entire idea behind Clubs Banner Generator was making it easy for our designers to create banners. Having had to create banners myself, I knew first hand what all of the difficulties were when trying to turn around deliverables quickly. Using these frustrations, I found solutions through making a custom built Figma plugin for my team! The idea quickly took a life of it’s own and became a full operations automation project.",
        phases: [
            {
                strong: "Templatization",
                text: "Figma Component Library Buildout"
            },
            {
                strong: "Initial Programming",
                text: "Develop proof of concept of banner generation via UI"
            },
            {
                strong: "UX/UI Redesign",
                text: "isual refresh along with UX improvements for more intuitive use."
            },
            {
                strong: "Automation via Integration",
                text: "Integrate Air Table to Figma"
            },
            {
                strong: "Automation via Zapier",
                text: "Use Air Table views to trigger Zapier automations that integrate Basecamp (our project management platform)"
            }
        ],
        // toolstack: "While I worked within the tools preferred by my client and navigated certain limitations, many custom solutions still had to be developed with code to meet the platform's unique needs. As the sole developer, I prioritized low-code solutions where possible to ensure maintainability in my absence, but also implemented custom coding solutions to deliver a scalable and efficient system.",
        // tools: [
        //     {
        //         logo: airtablelogo,
        //         name: "Airtable",
        //         description: "Airtable serves as the backbone of the platform, functioning as the central database. I leveraged its full range of capabilities, including automations, scripts, forms, and interfaces, to streamline data collection and workflow management. These tools played a critical role in ensuring the platform's efficiency and scalability, allowing users to interact seamlessly with their data and automating key processes behind the scenes.",
        //     },
        //     {
        //         logo: stackerlogo,
        //         name: "Stacker",
        //         description: "Stacker serves as the front-end interface for TyMoo, where users interact with the platform by filling out forms and accessing their generated content. I integrated all forms into Stacker, building out the entire user interface to provide seamless access to personas, content waves, and blog analytics. Prior to my involvement, the TyMoo interface was primarily used for blog post creation and tracking, but I expanded its functionality to serve as a central hub for the entire platform.",
        //     },
        //     {
        //         logo: zapierlogo,
        //         name: "Zapier",
        //         description: "Zapier is the automation platform that ties everything together. I optimized workflows by creating subzaps—reusable components that function like coding functions. These subzaps are embedded into multiple zaps, streamlining the process and making the platform more efficient by reducing redundant tasks.",
        //     }
        // ],
        features: [
            {
                name: "Series Generator",
                descriptions: "The first series of the plugin allowed users to just generate a basic set of assets with selected copy. The styling was minimal and unsightly, but it got the work done. It allowed me to prove that the designers were hungry for a tool to simplify their workflow.",
                input: "Digital Designers",
                // output:"Generated Persona \n Generated Brand Promise",
                image: featurePlaceholder,
            },
            {
                name: "Bulk Generator",
                descriptions: "The second iteration of the plugin made calls to the Air Table API from the Figma API, allowing me to be able to extract a large list of assets that needed to be generated and programmatically setting it up so that they'd be generated after clicking “sync”. ",
                input: "Art Director",
                // output:"Content Brief \n Content Structure \n 7 Blog Ideas",
                image: featurePlaceholder,
            },
            {
                name: "Zapier Automations",
                descriptions: "The third iteration of the plugin leveraged Air Table views and Zapier alongside Basecamp to incorporate a workflow management component and notification system. ",
                input: "Board / VP Executives, Adjacent Business Units",
                // output:"Blog Post",
                image: featurePlaceholder,
            },
            
        ]


    },
    {
        name: "Scripts",
        image: pjPlaceholder, 
        description: "Lorem ipsum and blah blah blah. This is placeholder 3.Lorem ipsum and blah blah blah.Lorem ipsum and blah blah blah.Lorem ipsum and blah blah blah.Lorem ipsum and blah blah blah.Lorem ipsum and blah blah blah.Lorem ipsum and blah blah blah.Lorem ipsum and blah blah blah.Lorem ipsum and blah blah blah. Lorem ipsum and blah blah blah.Lorem ipsum and blah blah blah.Lorem ipsum and blah blah blah.Lorem ipsum and blah blah blah.",
        tags: ["Python","Javascript","Automation"],
        cta1_copy:"View All Scripts >",
        cta1_url:"/work/scripts/",

    },
    {
        name: "Name Placeholder 4",
        image: pjPlaceholder, 
        description: "Lorem ipsum and blah blah blah. Lorem ipsum and blah blah blah.Lorem ipsum and blah blah blah.Lorem ipsum and blah blah blah.Lorem ipsum and blah blah blah.Lorem ipsum and blah blah blah.Lorem ipsum and blah blah blah. This is placeholder 4. Lorem ipsum and blah blah blah.Lorem ipsum and blah blah blah.Lorem ipsum and blah blah blah.Lorem ipsum and blah blah blah.",
        tags: ["Testing 1","Testing 2","Testing 3"],
        cta1_copy:"Read More >",
        cta1_url:"",
        cta2_copy:"View Live >",
        cta2_url:"",
    },
];