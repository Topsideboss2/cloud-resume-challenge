import {
  terra,
  aws,
  docker,
  oracle,
  ffast,
  kpower,
  oaknet,
  oaknetProject,
  cruddApp,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "TERA",
    icon: terra,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "DOCKER",
    icon: docker,
  },

  {
    name: "ORACLE",
    icon: oracle,
  },
];

const experiences = [
  {
    title: "Cloud/DevOps Engineer",
    company_name: "FutureFast Global Tech Solutions",
    icon: ffast,
    iconBg: "#E6DEDD",
    date: "April 2023 - Present",
    points: [
      "Implementing cost monitoring and alerts that helped identify cost spikes and take action to address them quickly.",
      " This helped reduce monthly costs by almost 25% and prevent unexpected costs and ensure that the company stays within budget.",
    ],
  },
  {
    title: "DevOps Engineering Intern",
    company_name: "Oaknet Business",
    icon: kpower,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - March 2023",
    points: [
      "Responsible for deploying and maintaining an Intern Management System fully hosted on AWS.",
      "Gained experience of good DevOps such as containerization, CI/CD pipelines, IaC,configuration management, monitoring, logging and observability",
    ],
  },
  {
    title: "Telecommunication Engineering Intern",
    company_name: "Kenya Power & Lighting Co.",
    icon: oaknet,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - April 2022",
    points: [
      "Configuring routers and IP phones.",
      "ODTR tests on fiber optic cables and LAN test on Ethernet cables.",
      "Fusion splicing of fiber optic cables and end-to-end termination on the Optical Distribution Frame.",
    ],
  },
];

const projects = [
  {
    company: "AWS Ontario Virtual User Group ",
    name: "Cruddur",
    description:
      "Built a cloud-native web application(Cruddur) that combines multiple cloud services to emulate a real-world production workload. I was able to work with multiple serverless containers, abstract API call with GraphQL, data modeling for DynamoDB, basic data modeling for Amazon RDS, offload background jobs to serverless functions, setup hosted zones using Route53 ",
    image: cruddApp,
    tags: [
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "ecs",
        color: "green-text-gradient",
      },
      {
        name: "fargate",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "",
    website_link: "",
  },
  {
    company: "Oaknet IMS",
    name: "Intern Management System",
    description:
      "Developed an intern-management-system for Oaknet Business. I was responsible for deploying the application on a cloud-native web server hosted on AWS. Taking advantage of several cloud-based services such as Route53, ALB, AmazonRDS, EFS",
    image: oaknetProject,
    tags: [
      {
        name: "hybrid",
        color: "blue-text-gradient",
      },
      {
        name: "route53",
        color: "green-text-gradient",
      },
      {
        name: "zabbix",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "",
    website_link: "",
  },
];

const achievements = [
  {
    name: "Cisco CCNA 200-301",

    organization: "Institute of Advanced Technology",
  },
  {
    name: "AWS Cloud Practitioner",

    organization: "AWS",
  },
  {
    name: "Oracle Cloud Infrastracture Architect Associate",

    organization: "Oracle",
  },
  {
    name: "Oracle Cloud Infrastructure Associate Foundations",

    organization: "Oracle",
  },
];

export { technologies, experiences, projects, achievements };
