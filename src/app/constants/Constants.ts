import {
  IDynamicScripts,
  INavMenuItems,
  ISocialMediaLinks,
  ISkills,
  IExperience,
  ITag
} from '../interfaces';

import { TagCanvasOptions } from 'ng-tagcanvas';

export const FONT_URLS = [
  'https://fonts.googleapis.com/css?family=Lato:300,400',
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap'
];

export const ScriptStore: IDynamicScripts[] = [
  { name: 'oscillator', src: './assets/js/oscillator.js' },
  { name: 'jquery', src: './assets/js/jquery.js' },
  { name: 'skills', src: './assets/js/skills.js' }
];

export const NavMenuItems: INavMenuItems[] = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Skills', link: '/skills' },
  { title: 'Experience', link: '/experience' },
  // { title: 'Blog', link: '/blog-posts' }
];

export const SKILLS: ISkills = {
  techSkills: [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Nebular Angular Material' },
    { id: 3, name: 'ASP .Net Core' },
    { id: 4, name: 'SQL Server (SSMS)' },
    { id: 5, name: 'ASP .Net MVC' },
  ],
  mgmtSkills: [
    { id: 1, name: 'Developing front-end architecture' },
    { id: 2, name: 'Developing Back-end architecture' },
    { id: 3, name: 'Innovative Approach' },
    { id: 4, name: 'Teamwork and Delegation' },
    { id: 5, name: 'Coordinating' }
  ],
  softSkills: [
    { id: 1, name: 'Work Ethic' },
    { id: 2, name: 'Teamwork' },
    { id: 3, name: 'Problem Solving' },
    { id: 4, name: 'Public Speaking' },
    { id: 5, name: 'Punctuality' },
    { id: 6, name: 'Professional Writing' }
  ]
};

export const SocialMediaProfiles: ISocialMediaLinks[] = [
  {
    title: 'Facebook',
    profileUrl: 'https://www.facebook.com/akshat.patni.58',
    iconPath: 'assets/images/facebook.svg'
  },
  {
    title: 'Instagram',
    profileUrl: 'https://www.instagram.com/akshat_pattani',
    iconPath: 'assets/images/instagram.svg'
  },
  {
    title: 'LinkedIn',
    profileUrl: 'https://in.linkedin.com/in/akshatpattani',
    iconPath: 'assets/images/linkedin.svg'
  }
];

export const TAGS: ITag[] = [
  // { weight: 22, text: 'Git' },
  { weight: 24, text: 'JavaScript' },
  { weight: 24, text: 'NgRx' },
  // { weight: 20, text: 'Bootstrap' },
  { weight: 32, text: 'Angular' },
  { weight: 30, text: 'TypeScript' },
  { weight: 25, text: 'ASP .Net MVC' },
  // { weight: 20, text: 'CSS3' },
  // { weight: 16, text: 'GraphQL' },
  // { weight: 30, text: 'HTML5' },
  // { weight: 28, text: 'Bitbucket' },
  // { weight: 24, text: 'SCSS' },
  // { weight: 20, text: 'React' },
  { weight: 20, text: 'Redux' },
  { weight: 16, text: 'ASP .Net Core' },
  { weight: 20, text: 'SQL Server (SSMS)' }
];

export const TAG_CANVAS_OPTIONS: TagCanvasOptions = {
  clickToFront: 500,
  textColour: '#FFF',
  outlineThickness: 0.5,
  outlineColour: 'transparent',
  maxSpeed: 0.05,
  freezeActive: true,
  shuffleTags: true,
  shape: 'sphere',
  zoom: 1,
  wheelZoom: false,
  noSelect: false,
  freezeDecel: true,
  fadeIn: 3000,
  initial: [0.3, -0.1],
  depth: 1.1,
  weight: true,
  reverse: true,
  radiusX: 2,
  radiusY: 2,
  radiusZ: 2
};

export const EXPERIENCES: IExperience[] = [
  {
    id: 1,
    company: 'Skywinds Solutions',
    designation: 'Jr. Software Engineer',
    yearRange: '2024 - Present',
    role: 'Working as a junior front end Angular developer and back end .Net Developer'
  },
  {
    id: 2,
    company: 'Avidclan Technologies',
    designation: 'Software Engineer Intern',
    yearRange: 'july 2023 - 2024',
    role: 'Worked as a trainee front end Angular developer and back end .Net Developer'
  }
];
