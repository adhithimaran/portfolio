export type Project = { title: string; description: string; tags: string[]; link: string; image: string }

export const projects: Project[] = [
  { title: 'Project One', description: 'A short placeholder description for an upcoming case study.', tags: ['React', 'Product'], link: '#', image: '01' },
  { title: 'Project Two', description: 'A concise overview of another future collaboration or experiment.', tags: ['Design', 'WebGL'], link: '#', image: '02' },
  { title: 'Project Three', description: 'A placeholder for something useful, thoughtful, and well made.', tags: ['Systems', 'Code'], link: '#', image: '03' },
  { title: 'Project Four', description: 'A final example that leaves room for the work to speak for itself.', tags: ['Strategy', 'Build'], link: '#', image: '04' },
]
