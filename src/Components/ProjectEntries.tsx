type Projects = {
  Title: string;
  Purpose: string[];
  Resources: string[];
  Achievements: string[];
  Source: string;
  Live?: string;
  ClientReview?: string;
};

export const ProjectEntries: Projects[] = [
  {
    Title: "Indie Book Vault",
    Purpose: [
      "to create a full-stack website for indie authors that will help improve marketing ability by providing a central location for readers to locate indie and self-published authors and find links to the authors individual pages",
      "to have authors listed at random to provide a fair and equal chance of each author being show as the first author in their specific genre page",
      "to create a form within the Contact section of the site to act as an application for authors to join while directing them to provide specific information and not allowing them to submit without filling out required sections",
    ],
    Resources: [
      "Node.js",
      "Express.js",
      "MySQL",
      "React",
      "Vite",
      "react-router-dom",
      "JavaScript",
      "CSS",
      "HTML",
      "Visual Studio Code",
      "Github",
      "Corel PaintShop Pro for editing pictures used",
    ],
    Achievements: [
      "implemented a dynamic author listing feature using the Fisher-Yates shuffle algorithm, ensuring a randomized display for users on every site visit",
      "implemented server side and form side validation to ensure the user submits the information appropriately and without duplication in the database",
      "demonstrated proficiency in MySQL database management, optimizing queries and operations for efficient data storage and retrieval",
    ],
    Source: "https://github.com/DickyKitchenJr/Indie-Book-Vault-Full-Project",
    Live: "https://indiebookvault.com/",
  },
  {
    Title: "MayhemMills.com",
    Purpose: [
      "to create a client website to meet the client's needs and aesthetic preferences",
    ],
    ClientReview:
      "'If you are looking for someone to build an awesome custom website for a competitive price, this is the dude to talk to. He communicated great throughout the process, had some really great ideas, and wasn’t happy until I was happy.'",
    Resources: [
      "React",
      "CSS",
      "HTML",
      "JavaScript",
      "Ecwid store plugin",
      "react-router-dom",
      "Visual Studio Code",
      "Corel PaintShop Pro for editing pictures used",
      "GitHub",
    ],
    Achievements: [
      "proactively communicated with the client throughout the project, ensuring alignment with their vision and goals",
      "provided insights to the client on factors influencing website performance, fostering an informed decision-making process for design and functionality choices",
      "provided insights to the client in what impacts user experience, including contrast choices between text and background",
      "achieved high score on PageSpeed Insights",
    ],
    Source: "https://github.com/DickyKitchenJr/Mayhem-Mills-Site",
    Live: "https://mayhemmills.com/",
  },
  {
    Title: "Multi-page Author Site",
    Purpose: [
      "to create a multi-page site to advertise books I've published and give readers a place to see samples and reviews of those books, as well as blogs which feature various topics, interviews, and snippets of writings and upcoming works",
    ],
    Resources: [
      "React",
      "CSS",
      "HTML",
      "JavaScript",
      "Visual Studio Code",
      "Corel PaintShop Pro for editing pictures used",
      "GitHub",
    ],
    Achievements: [
      "created a cohesive style that worked with books in both the thriller and children's book genres",
      "utilized responsive design to ensure good user experience across multiple devices by adapting the layouts to various devices",
      "developed a dynamic author website using React, incorporating multiple pages to provide an engaging and informative user experience",
      "integrated book reviews, blurbs, and PDF samples to enhance user experience when researching what I've written",
    ],
    Source: "https://github.com/DickyKitchenJr/author-site-version-2",
    Live: "https://dickykitchenjr.com/",
  },
  {
    Title: "React Sample Projects with Test",
    Purpose: [
      "to provide a place to showcase small projects using different React skills including the use of hooks and state",
    ],
    Resources: [
      "React",
      "Font Awesome",
      "CSS",
      "HTML",
      "JavaScript",
      "Visual Studio Code",
      "Corel PaintShop Pro for editing picture used",
      "GitHub",
      "Jest",
    ],
    Achievements: [
      "implemented test using Jest to ensure projects operate within expected ways",
      "utilized various hooks and custom functions to provide an engaging experience for the user while demonstrating understanding of implementing React for page manipulation through user input",
      "utilized a modular approach to present multiple smaller projects in a centralized way",
    ],
    Source:
      "https://github.com/DickyKitchenJr/React-sample-project/tree/main/sample-project1",
    Live: "https://react-sample-projects.netlify.app/",
  },
  {
    Title: "Clone Amazon Thriller Books Best Sellers",
    Purpose: [
      "to create a site using visual references, similar to if a client were to give you a mock-up of something they want you to build",
    ],
    Resources: [
      "React",
      "CSS",
      "HTML",
      "JavaScript",
      "Visual Studio Code",
      "original Amazon books best seller thriller and suspense site for reference",
      "Font Awesome",
      "Corel PaintShop Pro (to fine tune Amazon logo and user icon)",
      "image links of various books shown",
      "GitHub",
    ],
    Achievements: [
      "demonstrated the ability to create a front-end site from a mock-up; in this case using the 2022 Amazon site as the mock-up",
    ],
    Source:
      "https://github.com/DickyKitchenJr/React-sample-project/tree/main/amazon-best-seller",
    Live: "https://mock-amazon-best-seller.netlify.app/",
  },
  {
    Title: "JavaScript Playground",
    Purpose: ["to provide a place to showcase small projects using JavaScript"],
    Resources: ["JavaScript", "CSS", "HTML", "Visual Studio Code", "GitHub"],
    Achievements: [
      "utilized  HTML, CSS, and vanilla JavaScript to craft a collection of interactive and entertaining web applications",
      "demonstrated proficiency in handling arrays, randomization, and DOM manipulation",
      "demonstrated algorithmic thinking by systematically breaking down what is required to create a name and randomly assembling letters that mimic those requirements ",
      "achieved a high score on PageSpeed Insights",
    ],
    Source: "https://github.com/DickyKitchenJr/JavaScript-Playground",
    Live: "https://jsplayground.dickykitchen.com/",
  },
  {
    Title: "Next.js Marvel Character Search",
    Purpose: [
      "to create a site using Next.js and the Marvel API",
      "show ability return requested information based on user input",
    ],
    Resources: [
      "Nextjs",
      "official Marvel API",
      "Visual Studio Code",
      "Vercel to simplify deployment",
      "GitHub",
    ],
    Achievements: [
      "included a message to the users to account for when data is missing from the Marvel API, improving user experience",
    ],
    Source: "https://github.com/DickyKitchenJr/nextjs-marvel-character-search",
    Live: "https://nextjs-marvel-character-search.vercel.app/",
  },
  {
    Title: "This Portfolio Site",
    Purpose: [
      "to create a place for potential clients and employers to view my portfolio",
    ],
    Resources: [
      "React",
      "CSS",
      "HTML",
      "JavaScript",
      "Visual Studio Code",
      "Corel PaintShop Pro for editing picture used",
      "GitHub",
    ],
    Achievements: [
      "successfully migrated project from create-react-app to Vite, optimizing performance and build processes for a more efficient development workflow",
      "implemented a 'mobile first' approach, prioritizing user experience across various devices while ensuring responsive design and functionality",
      "achieved high scores on PageSpeed Insights",
    ],
    Source: "https://github.com/DickyKitchenJr/portfolio-version-2",
  },
];
