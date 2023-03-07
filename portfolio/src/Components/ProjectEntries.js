import AmazonBig from "../Images/amazonsite.webp";
import AmazonSmall from "../Images/amazonSmall.webp";
import PFetchBig from "../Images/picturefetch.webp";
import PFetchSmall from "../Images/pictureFetchSmall.webp";
import ReactPicBig from "../Images/reactexperiments.webp";
import ReactPicSmall from "../Images/reactExperimentsSmall.webp";
import TAMBig from "../Images/theaverageman.webp";
import TAMSmall from "../Images/theAverageManSmall.webp";
import PortfolioBig from "../Images/portfolio.webp";
import PortfolioSmall from "../Images/portfolioSmall.webp";
import PageSpeed from "../Images/pagespeed.webp";
import MayhemBig from "../Images/mayhemBig.webp";
import MayhemSmall from "../Images/mayhemSmall.webp";
import MayhemTest from "../Images/mayhemTest.webp";
import jsPlaygroundSmall from "../Images/jsplaygroundSmall.webp";
import jsPlaygroundBig from "../Images/jsplaygroundBig.webp";
import jsPlaygroundTest from "../Images/jsplaygroundTest.webp";
import AuthorBig from '../Images/authorBig.webp';
import AuthorSmall from '../Images/authorSmall.webp';

export const ProjectEntries = [
  {
    backgroundImage: MayhemBig,
    backgroundImageSmall: MayhemSmall,
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
      "Visual Studio Code",
      "Corel PaintShop Pro for editing pictures used",
      "GitHub",
    ],
    Challenges: [
      "keeping the client informed of progress",
      "helping to educate the client in what impacts website performance",
      "helping to educate the client in what impacts user experience on websites",
      "achieving a near perfect score on PageSpeed Insights",
    ],
    Test: MayhemTest,
    Improvement: null,
    Source:
      "https://github.com/DickyKitchenJr/sites-for-others/tree/main/mayhems-site",
    Live: "https://mayhemmills.com/",
  },
  {
    backgroundImage: AuthorBig,
    backgroundImageSmall: AuthorSmall,
    Title: "Multi-page Author Site",
    Purpose: [
      "to create a multi-page site to advertise books I've published and give readers a place to see samples of those books, reviews of those books, and blogs which feature various topics, interviews, and snippets of writings and upcoming works",
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
    Challenges: [
      "creating a cohesive style that worked with books in both the thriller and children's book genres",
    ],
    Improvements: ["continue to add new content as it becomes available"],
    Source: "https://github.com/DickyKitchenJr/author-site-version-2",
    Live: "https://dickykitchenjr.com/",
  },
  {
    backgroundImage: AmazonBig,
    backgroundImageSmall: AmazonSmall,
    Title: "Clone Amazon Thriller Books Best Sellers",
    Purpose: [
      "to create a site using visual references, similar to if a client were to give you a mockup of something they want you to build",
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
    Challenges: [
      "icons used were changed to free versions largely found on FontAwesome as the original icons were either Amazon property or required payment to get access to them",
      "colors were set by visual comparison vs looking at the exact colors used on the Amazon site as I did not want to copy code from their source code, as a result colors may not match the Amazon site completely",
    ],
    Improvements: [
      "adding ability for user to click other genres to recieve different best seller list",
      "add ability for user to input book information and picture link to place book of their choosing in first place spot",
    ],
    Source:
      "https://github.com/DickyKitchenJr/React-sample-project/tree/main/amazon-best-seller",
    Live: "https://mock-amazon-best-seller.netlify.app/",
  },
  {
    backgroundImage: PFetchBig,
    backgroundImageSmall: PFetchSmall,
    Title: "Picture Fetch",
    Purpose: [
      "to accept user input to update the user name and pictures",
      "to demonstrate successful use of the Unsplash API",
    ],
    Resources: [
      "React",
      "CSS",
      "Visual Studio Code",
      "Unsplash API",
      "GitHub",
      "HTML",
      "JavaScript",
    ],
    Challenges: [
      "intial attempt to request data using different parameters from the Unsplash API resulted in slightly different presentation of the json data returned, requiring different treatment of the data when using different parameters for request",
    ],
    Improvements: [
      "allowing user to specify search query vs using pre-assigned radio buttons",
    ],
    Source: "https://github.com/DickyKitchenJr/picture-fetch",
    Live: "https://api-picture-results.netlify.app/",
  },
  {
    backgroundImage: jsPlaygroundBig,
    backgroundImageSmall: jsPlaygroundSmall,
    Title: "JavaScript Playground",
    Purpose: ["to provide a place to showcase small projects using JavaScript"],
    Resources: ["JavaScript", "CSS", "HTML", "Visual Studio Code", "GitHub"],
    Challenges: [
      "deciding what projects to build",
      "achieving a perfect score on PageSpeed Insights",
    ],
    Test: jsPlaygroundTest,
    Improvements: ["continue to add more projects"],
    Source: "https://github.com/DickyKitchenJr/JavaScript-Playground",
    Live: "https://jsplayground.dickykitchen.com/",
  },
  {
    backgroundImage: ReactPicBig,
    backgroundImageSmall: ReactPicSmall,
    Title: "React Sample Projects with Test",
    Purpose: [
      "to provide a place to showcase small projects using differet React skills including the use of hooks",
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
    ],
    Challenges: ["deciding what projects to build"],
    Improvements: ["add new projects as inspiration occurs"],
    Source:
      "https://github.com/DickyKitchenJr/React-sample-project/tree/main/sample-project1",
    Live: "https://react-sample-projects.netlify.app/",
  },
  {
    backgroundImage: TAMBig,
    backgroundImageSmall: TAMSmall,
    Title: "WordPress Website",
    Purpose: [
      "to create a character inspired site to entice readers to look into the source book",
      "to demonstrate understanding of using WordPress to create a website",
    ],
    Resources: ["WordPress Version 6.0.2 "],
    Challenges: ["choosing the layout", "creating information for the site"],
    Improvements: [
      "continue to build out the blog section",
      "add more details throughout the site to further entice readers",
    ],
    Source: null,
    Live: "https://theaverageman.dickykitchen.com/",
  },
  {
    backgroundImage: PortfolioBig,
    backgroundImageSmall: PortfolioSmall,
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
    Challenges: [
      "choosing a color scheme",
      "deciding on background pictures to use",
      "making adjustments for a 'mobile first' build",
      "achieving a near perfect score on PageSpeed Insights",
    ],
    Test: PageSpeed,
    Improvements: [
      "continue to add more projects as skills continue to advance",
    ],
    Source: "https://github.com/DickyKitchenJr/portfolio-version-2",
    Live: null,
  },
];
