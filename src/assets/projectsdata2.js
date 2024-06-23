const PROJECTS_DATA = [
  {
    name: "Milestones",
    summary:
      "A social platform dedicated to illustrating users' life accomplishments via milestones. The platform aims to display users' 'full life' to help understand their journey and development better.",
    vision:
      "Milestones provides a platform where users can record and display their life milestones, creating a comprehensive timeline of their journey where others can learn about them in a more profound way.",
    scope:
      "Milestones offers a social platform where users can add and track their life milestones and accomplishments, enjoy an interactive user experience built with React, receive instant user updates through Websocket.io integration, ensure secure user authentication and authorization using Bcrypt, and manage global state efficiently with React's UseContext.",
    architecture: {
      overview:
        "The architecture of Milestones comprises a React front-end for user interaction, a Python backend with Flask API for handling data, and Websocket.io for instant updates. Bcrypt is used for user authentication and authorization, while UseContext manages global state.",
      backend:
        "The backend of Milestones is built using Python and Flask, providing robust API capabilities and efficient data handling.",
      modelViewController:
        "The application follows the MVC pattern, maintaining a clear separation of concerns to enhance maintainability and scalability.",
      userAuthentication:
        "User authentication is handled by a React post request that verifies user credentials against the database, creating a session (cookie) that persists until the user logs out.",
      databaseSchema:
        "A relational database schema compatible with SQLAlchemy is used, running on a deployed server. This schema allows for adding new users, starting new sessions, and persisting users' milestones and accomplishments.",
    },
    builtWith: {
      frontend: ["React", "JavaScript"],
      backend: ["Python", "Flask", "WebSocket.io", "Bcrypt"],
      database: ["SQLAlchemy"],
    },
    links: {
      github: "https://github.com/sofiakatzman/Milestones",
      walkthrough: "https://www.youtube.com/watch?v=23grUYcH2Qw",
    },
    image:
      "https://media.istockphoto.com/id/1276686973/vector/continuous-line-drawing-champagne-bottle.jpg?s=612x612&w=0&k=20&c=Osd_Q4WO5IYQXDnWt64ym--WiEh_9mwgNO90ppAf-9s=",
  },
  {
    name: "RecycleQuest",
    summary:
      "A gamified social platform that increases recycling knowledge and awareness, creating a competitive and engaging environment to promote contributions.",
    vision:
      "RecycleQuest gamifies recycling education, fostering engagement and competition among users to promote recycling practices.",
    scope:
      "RecycleQuest makes recycling fun and engaging through gamification, provides timesaving and convenient access to recycling centers, and motivates users with social engagement and competition.",
    architecture: {
      overview:
        "RecycleQuest comprises a React front-end for user interaction, a Ruby on Rails backend for managing data, and a deployed Postgres database for storage.",
      backend:
        "The backend is built using Ruby on Rails, providing robust data management and user authentication.",
      modelViewController:
        "The application follows the MVC pattern, maintaining a clear separation of concerns to enhance maintainability and scalability.",
      userAuthentication:
        "User authentication is handled by a React post request that verifies user credentials against the database, creating a session (cookie) that persists until the user logs out.",
      databaseSchema:
        "A relational database schema compatible with Active Record ORM is used, running on a deployed Postgres server. This schema allows for adding new users, starting new sessions, and persisting users' recycling data.",
    },
    builtWith: {
      frontend: ["React", "JavaScript"],
      backend: ["Ruby", "Rails"],
      database: ["PostgreSQL"],
    },
    links: {
      github: "https://github.com/elainedoud/RecycleQuest",
      walkthrough: "https://www.youtube.com/watch?v=X9x1nlTRcv0",
      livedemo: "https://ruby-rails-blazer-part-ii.onrender.com/",
    },
    image:
      "https://img.freepik.com/premium-vector/continuous-line-drawing-recycle-symbol-vector-illustration_500861-160.jpg",
  },
  {
    name: "BunnyWalks",
    summary:
      "BunnyWalks is a full-stack application designed to keep a record of bunnies encountered on walks, the paths taken, and the identities of bunnies seen.",
    vision:
      "BunnyWalks provides a platform where users can log their walks, paths, and bunny encounters, providing a convenient way to organize and review their experiences.",
    scope:
      "BunnyWalks offers walk recording, an intuitive interface for recording and managing walk information, and mobile and web versions for user convenience.",
    architecture: {
      overview:
        "BunnyWalks comprises a React front-end for user interaction and a Python backend with Flask API for handling data.",
      backend:
        "The backend is built using Python and Flask, providing robust API capabilities and efficient data handling.",
      modelViewController:
        "The application follows the MVC pattern, maintaining a clear separation of concerns to enhance maintainability and scalability.",
      databaseSchema:
        "A relational database schema compatible with SQLAlchemy is used, running on a deployed server. This schema allows for adding new users, starting new sessions, and persisting users' walk and bunny encounter data.",
    },
    builtWith: {
      frontend: ["React", "JavaScript"],
      backend: ["Python", "Flask"],
      database: ["SQLAlchemy"],
    },
    links: {
      github: "https://github.com/sofiakatzman/Bunny-Walks.git",
      walkthrough: "https://www.youtube.com/watch?v=A9YwlcA_n5E",
    },
    image:
      "https://media.istockphoto.com/photos/cute-rabbit-on-path-picture-id472729814?k=20&m=472729814&s=612x612&w=0&h=ycq0hSul7t4BMg0nN6yZkT3aXplF8SSoF2Mf71yq3Sw=",
  },
  {
    name: "EventManager",
    summary:
      "EventManager is a Command Line Interface (CLI) application designed to streamline the process of hiring and booking event staff.",
    vision:
      "EventManager simplifies the process of hiring and booking event staff through a CLI application, enabling organizers to manage staff-related tasks more effectively.",
    scope:
      "EventManager offers a CLI application for efficient text-based interactions, streamlines the process of hiring and booking event staff, and utilizes SQLAlchemy for efficient database management.",
    architecture: {
      overview:
        "EventManager comprises a Python backend and utilizes SQLAlchemy for database management.",
      backend:
        "The backend is built using Python, with SQLAlchemy for efficient data handling and Alembic for database migrations.",
      modelViewController:
        "The application follows the MVC pattern, maintaining a clear separation of concerns to enhance maintainability and scalability.",
      databaseSchema:
        "A relational database schema compatible with SQLAlchemy is used, running on a deployed server. This schema allows for adding new users, starting new sessions, and persisting event staff booking data.",
    },
    builtWith: {
      backend: ["Python", "SQLAlchemy"],
      database: ["SQLAlchemy"],
    },
    links: {
      github: "https://github.com/sofiakatzman/Event-Manager",
      walkthrough: "https://www.youtube.com/watch?v=AS7z6d3M1Qc",
    },
    image:
      "https://media.istockphoto.com/photos/working-woman-in-event-management-company-picture-id1287013808?k=20&m=1287013808&s=612x612&w=0&h=9emDD91BNPQhh7bJ6LMP7Q81t0YxhE2bJ4EwhugrU2M=",
  },
];

export default PROJECTS_DATA;
