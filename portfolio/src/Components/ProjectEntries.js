import AmazonBig from "../Images/amazonsite.webp";
import PFetchBig from "../Images/picturefetch.webp";
import ReactPicBig from "../Images/reactexperiments.webp";
import TAMBig from "../Images/theaverageman.webp";
import PortfolioBig from "../Images/portfolio.webp";

export const ProjectEntries = [
  {
    backgroundImage: { AmazonBig },
    Title: "Clone Amazon Thriller Books Best Sellers",
    Pupose: [
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
    backgroundImage: { PFetchBig },
    Title: "Picture Fetch",
    Pupose: [
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
    backgroundImage: { ReactPicBig },
    Title: "React Sample Projects",
    Pupose: [
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
    backgroundImage: { TAMBig },
    Title: "WordPress Website",
    Pupose: [
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
    backgroundImage: { PortfolioBig },
    Title: "Portfolio Site",
    Pupose: [
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
    ],
    Improvements: [
      "continue to add more projects as skills continue to advance",
    ],
    Source: null,
    Live: null,
  },
];