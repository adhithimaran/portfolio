export type Experience = {
  company: string;
  role: string;
  dateRange: string;
  location: string;
  bullets: string[];
  skills: string[];
};

export const experiences: Experience[] = [
  {
    company: 'Western National Insurance',
    role: 'IT Site Reliability Intern',
    dateRange: 'May 2026 - Present',
    location: 'Edina, Minnesota · On-site',
    bullets: [
      'Evaluating Kuberhealthy for EKS health monitoring and building a working proof of concept to inform adoption',
      'Contributing to site reliability initiatives on the Platform team, automating AWS infrastructure with Terraform',
    ],
    skills: ['AWS', 'Terraform', 'Kubernetes', 'GitLab CI/CD'],
  },
  {
    company: 'University of Minnesota, Dept. of Computer Science & Engineering',
    role: 'Undergraduate Teaching Assistant',
    dateRange: 'Sep 2025 - May 2026',
    location: 'Minneapolis-St. Paul Area · On-site',
    bullets: [
      'Led lab sections and supported 200+ students across CSCI 1113 (Intro to C/C++) and CSCI 1933 (Algorithms and Data Structures)',
      'Held office hours and gave hands-on debugging guidance and grading feedback',
    ],
    skills: ['C++', 'Java', 'Teaching', 'Debugging'],
  },
  {
    company: 'Medtronic',
    role: 'Software Engineer Intern',
    dateRange: 'Aug 2025 - May 2026',
    location: 'Minneapolis-St. Paul Area · Hybrid',
    bullets: [
      'Developed a log analysis tool for a cardiac rhythm and diagnostics application to help engineers trace long-term bugs faster',
      "Worked cross-functionally with Medtronic's engineering team to align the tool with real production needs",
    ],
    skills: ['Python', 'Elastic Stack (ELK)'],
  },
  {
    company: 'Waves CPAs',
    role: 'Software Engineer Intern',
    dateRange: 'Jun 2025 - Aug 2025',
    location: 'Minneapolis-St. Paul Area · Remote',
    bullets: [
      'Developed and tested features for a WordPress platform connecting CPAs with small businesses',
      'Contributed across the full development cycle in a fast-paced agile environment',
    ],
    skills: ['PHP', 'WordPress'],
  },
];
