import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Rishabh Maheshwari',
  subtitle: 'Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '',
    title: 'Library Fine Project',
    info: `Created a website in which students after log-in, they can get to know all details of the books they have issued from library i.e. how much fine they have to
pay for that particular book or when is the due date. They also get a warning e-mail one day before the due-date such that they can return the book on-
time.`,
    info2: 'Tech-Stack - Python, Django, HTML, CSS, SQLite',
    url: '',
    repo: 'https://github.com/rishi1303/libarary-fine-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Beer Finder App',
    info: 'This project helps in providing every detail regarding the beer which we have searched for and also tells where it will be available near us.',
    info2: 'Tech-Stack: React Native, Redux, native-base',
    url: '',
    repo: 'https://github.com/rishi1303/Beer-Finder-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Newsletter',
    info: `This project keens on providing every detail regarding COVID-19 via mail after every 24 hours i.e. how many total cases are there, how many have
recovered state wise whosoever subscribes to our Newsletter Web-App.`,
    info2: 'Tech-Stack: Python, Django, Web-Scraping, HTML, CSS',
    url: '',
    repo: 'https://github.com/rishi1303/newsletter_1', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'rishabhmaheshwar80@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rishabh-maheshwari-005086153/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://www.github.com/rishi1303',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
