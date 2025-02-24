import React from "react";

import Work from "./Work";
import OtherPage from "../../../hoc/OtherPage";
import MicrosoftIcon from "../../../asset/Microsoft.png";
import TableauIcon from "../../../asset/tableau.png";
import OsuIcon from "../../../asset/osu.jpg";
import BuaaIcon from "../../../asset/buaa.jpg";
import RemitlyIcon from "../../../asset/Remitly.jpeg";

const workData = [
  {
    timeline: "11/2024 - present",
    jobTitle: "Senior Software Development Engineer",
    company: "Remitly",
    bullet: [
      {
        content: "Post Submit Experience",
        secondLevel: [],
      },
    ],
    icon: RemitlyIcon,
  },
  {
    timeline: "11/2018 - 11/2024",
    jobTitle: `Senior Software Development Engineer`,
    company: "Microsoft",
    bullet: [
      {
        content: "Teams for SMB (Small and Medium Business), Teams",
        secondLevel: [
          "Tech lead in external collaboration feature area. Collaborated with product managers, UX designers and other engineers, built multiple features that provide better user experience in external collaboration, which drove user engagement in SMB (Small Medium Business) customer segment.",
          "Oversaw the org’s feature performance and telemetry effort, made sure all the features and services are ready for production and can be monitored, by establishing SOP (standard of process) for the org, offering guidance and training, and continually helping enhance live-site monitors and dashboards.",
        ],
      },
      {
        content: "Teams for Education, Teams",
        secondLevel: [
          "Led the design and implementation of navigation framework for Teams for Education’s new web client. Collaborated with multiple partner teams across the org to ensure the architecture meets all teams’ requirements.",
          "Improved teacher’s class setup experience by full stack designing, developing, testing and maintaining multiple demanding features, including empty state suggestions, class teams’ early access, educator led team creation, and re-implemented clone team to make the feature stable and reliable.",
          "Improved key performance metrics for education users by 5%, providing a smoother user experience for Edu users",
          "Designed, implemented and analyzed multiple A/B testing experimentation to help understand customer needs and to improve the education user retention.",
        ],
      },
    ],
    icon: MicrosoftIcon,
  },
  {
    timeline: "11/2015–11/2018",
    jobTitle: "Software Engineer",
    company: "Tableau Software",
    bullet: [
      {
        content: "Tableau Catalog",
        secondLevel: [
          "Designed and Developed a document content parse service to serve upper layer services.",
          "Designed and set up a staging environment for the team to do end-to-end test and QA test. The staging environment continuously integrates microservices to monolith and builds (using TeamCity) integrated installers every night. These installers are also used for monthly release, which reduces the release preparation time from 2 weeks to 3 days.",
          "Helped team set up an easy-use, standalone mock environment for testing, using GraphQL API and microservices. The testing environment gives the whole 20 people team a quick and easy way to deploy and test new features before deploying to the monolith product. ",
          "Helped team on front-end using React/Redux in typescript.",
        ],
      },
      {
        content: "Filters, Visualization",
        secondLevel: [
          "Full stack designed, developed, maintained and tested multiple high demand filtering features on both desktop and web, including cross datasource filtering, date filters preset and cascading filters.",
          "Improved automation and unit test coverages in a continuous delivery environment.",
          "Drove a developer practice program inside the team, targeting on learning skills to effectively redesign and refactor large legacy system. When the program ended, all 11 team members have gained more confidence and skills to safely refactor.",
        ],
      },
    ],
    icon: TableauIcon,
  },
  {
    timeline: "01/2014–08/2015",
    jobTitle: "Software Developer",
    company: "OSU Medical Center",
    bullet: [
      {
        content: "Visual Analysis on Large Network Data",
        secondLevel: [
          "Full stack designed and implemented the platform which allows users traverse a large graph in an iterative manner.",
          "Invented and implemented multiple algorithms to reduce the time complexity of graph clustering and drawing (a clustering tree generating algorithm, and a community-detection based graph generation algorithm, which detects communities of a large graph with 3 million nodes and 117 million edges in only 25mins) ",
        ],
      },
    ],
    icon: OsuIcon,
  },
  {
    timeline: "09/2011-06/2013",
    jobTitle: "Undergraduate Assistant",
    company: "MIS R&D Center, BUAA",
    bullet: [
      {
        content: "Information Diffusion Predict",
        secondLevel: [
          "Implemented an efficient data crawler for data gathering from social network (about 500 user items per hour).",
          "Designed and implemented the prediction model used by the system. Applied the model on different network data for experiment, which showed that the precision was almost 30%.",
        ],
      },
    ],
    icon: BuaaIcon,
  },
];

const work = () => (
  <OtherPage
    title="Work History"
    qoute="All happiness depends on courage and work."
    backgroundStyle="resume-dark"
  >
    {workData.map((work, idx) => (
      <Work
        key={idx}
        timeline={work.timeline}
        jobTitle={work.jobTitle}
        company={work.company}
        firstLevelBullets={work.bullet}
        icon={work.icon}
      ></Work>
    ))}
  </OtherPage>
);

export default work;
