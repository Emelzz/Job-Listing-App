export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "Remote",
    salary: "₦400,000",
    description: "Build and maintain responsive user interfaces.",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Dev Solutions",
    location: "Enugu",
    salary: "₦300,000",
    description: "Develop scalable backend APIs and services.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Minds",
    location: "Lagos",
    salary: "₦350,000",
    description: "Design user-friendly web and mobile interfaces.",
  },
  {
    id: 4,
    title: "Mobile App Developer",
    company: "Appify",
    location: "Abuja",
    salary: "₦500,000",
    description: "Create Android and iOS applications.",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudNet",
    location: "Remote",
    salary: "₦600,000",
    description: "Manage CI/CD pipelines and cloud infrastructure.",
  },
  {
    id: 6,
    title: "Data Analyst",
    company: "Insight Ltd",
    location: "Port Harcourt",
    salary: "₦320,000",
    description: "Analyze business data and generate reports.",
  },
  {
    id: 7,
    title: "Cybersecurity Specialist",
    company: "SecureTech",
    location: "Lagos",
    salary: "₦700,000",
    description: "Protect systems from cyber threats.",
  },
  {
    id: 8,
    title: "Software Tester",
    company: "QualitySoft",
    location: "Ibadan",
    salary: "₦280,000",
    description: "Test software applications for bugs and performance.",
  },
  {
    id: 9,
    title: "Product Manager",
    company: "Innovate Inc",
    location: "Remote",
    salary: "₦650,000",
    description: "Manage product development lifecycle.",
  },
  {
    id: 10,
    title: "AI Engineer",
    company: "NextGen AI",
    location: "Abuja",
    salary: "₦800,000",
    description: "Build AI-powered solutions and models.",
  },
];
