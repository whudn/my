type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
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
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'PT ProjectIndo Teknowindata',
    title: 'IT Operation',
    start: '2024',
    end: 'Present',
    link: '#',
    id: 'work1',
  },
  {
    company: 'PT Pertamina Training & Consulting',
    title: 'IT Helpdesk',
    start: '2023',
    end: '2024',
    link: '#',
    id: 'work2',
  },
  {
    company: 'PT Mitra AdiPerkasa',
    title: 'IT Support',
    start: '2022',
    end: '2022',
    link: '/experience/MAP.mdx',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'How to Fix Missing Drive During Windows Install Using Intel RST',
    description: 'Quick fix for the hidden SSD issue when installing Windows',
    link: '/blog/how-to-fix-missing-drive-during-windows-install-using-intel-rst',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
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
