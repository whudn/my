type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

export type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  mdxPath?: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Template 1',
    description:
      'template project ini cuma masih kosong',
    link: '#',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Template 2',
    description: 'beloman di isi entah mau di isi apa',
    link: '#',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'PT ProjectIndo Teknowindata',
    title: 'IT Operation',
    start: 'Aug 2024',
    end: 'Present',
    link: 'https://www.projectindotekno.com/',
    id: 'work1',
    mdxPath: '@/app/experience/projectindo.mdx',
  },
  {
    company: 'PT Pertamina Training & Consulting',
    title: 'IT Helpdesk - Internship',
    start: 'Jun 2023',
    end: 'Jul 2024',
    link: 'https://www.pertamina-ptc.com/',
    id: 'work2',
    mdxPath: '@/app/experience/pertamina.mdx',
  },
  {
    company: 'PT Mitra AdiPerkasa Tbk',
    title: 'IT Support - Internship',
    start: 'Oct 2022',
    end: 'Nov 2022',
    link: 'https://www.map.co.id',
    id: 'work3',
    mdxPath: '@/app/experience/MAP.mdx',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Introducing Work Experience Popup System',
    description: 'Learn how I upgraded the work experience section with an interactive popup system that displays detailed MDX content right on the homepage',
    link: '/blog/work-experience-popup-system',
    uid: 'blog-5',
  },
  {
    title: 'How to Fix Missing Drive During Windows Install Using Intel RST',
    description: 'Quick fix for the hidden SSD issue when installing Windows',
    link: '/blog/how-to-fix-missing-drive-during-windows-install-using-intel-rst',
    uid: 'blog-1',
  },
  {
    title: 'Template 1',
    description:
      'Cuma Template',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'Template 2',
    description:
      'Cuma Template',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'Template 3',
    description: 'Cuma Template Metadata',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/whudn',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/whudn',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/whudn',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/whudn_',
  },
]

export const EMAIL = 'w.ahyu@outlook.com'
