import { BiTransfer } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiJson, SiTypescript } from 'react-icons/si';
import { IconType } from 'react-icons';

export interface Project {
  title: string;
  description: string;
  image: string;
  liveDemo: string;
  github: string;
  technologies: {
    name: string;
    icon: IconType;
    color: string;
  }[];
}

export const projects: Project[] = [
  {
    title: 'Where in the world?',
    description:
      'A web application that retrieves information about all the countries of the world from a data.json file. In addition, the customer can check more detailed information for a specific country. Additional features include filtering by region, searching for a country by name, and a dark theme.',
    image: '/project-avatars/where_world.png',
    liveDemo: 'countryapiadek.netlify.app',
    github: 'tinyurl.com/CountryApi',
    technologies: [
      {
        name: 'React',
        icon: FaReact,
        color: 'text-blue-500 border-blue-500 bg-blue-500/10',
      },

      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        color: 'text-teal-500 border-teal-500 bg-teal-500/10',
      },
      {
        name: 'REST API',
        icon: BiTransfer,
        color: 'text-purple-500 border-purple-500 bg-purple-500/10',
      },

      {
        name: 'TypeScript',
        icon: SiTypescript,
        color: 'text-blue-600 border-blue-600 bg-blue-600/10',
      },
    ],
  },
  {
    title: 'Pomodoro Timer',
    description:
      ' An application used to monitor the timing of the “Pomodoro” method. The user can customize the style of the page and the timing of the timers.',
    image: '/project-avatars/pomodoro.png',
    liveDemo: 'pomodorotimeradek.netlify.app ',
    github: 'tinyurl.com/pomtim',
    technologies: [
      {
        name: 'React',
        icon: FaReact,
        color: 'text-blue-500 border-blue-500 bg-blue-500/10',
      },

      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        color: 'text-teal-500 border-teal-500 bg-teal-500/10',
      },

      {
        name: 'JSON',
        icon: SiJson,
        color: 'text-orange-500 border-orange-500 bg-orange-500/10',
      },
      {
        name: 'TypeScript',
        icon: SiTypescript,
        color: 'text-blue-600 border-blue-600 bg-blue-600/10',
      },
    ],
  },
  {
    title: 'Dev Finder',
    description:
      'A web application that enables real-time text analysis. It allows you to count characters,words and sentences, set a character limit and display a warning when it is exceeded. Additional features include the ability to exclude spaces from counting, reading time estimation and letter density analysis.',
    image: '/project-avatars/devfinder.png',
    liveDemo: 'tinyurl.com/nextchar ',
    github: 'https://github.com/AdrianPodraza/CharacterCounter',
    technologies: [
      {
        name: 'React',
        icon: FaReact,
        color: 'text-blue-500 border-blue-500 bg-blue-500/10',
      },

      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        color: 'text-teal-500 border-teal-500 bg-teal-500/10',
      },
      {
        name: 'REST API',
        icon: BiTransfer,
        color: 'text-purple-500 border-purple-500 bg-purple-500/10',
      },

      {
        name: 'TypeScript',
        icon: SiTypescript,
        color: 'text-blue-600 border-blue-600 bg-blue-600/10',
      },
    ],
  },
  {
    title: 'Finance',
    description:
      'A comprehensive personal finance management application with five pages: Overview, Transactions, Budgets, Pots, and Recurring Bills. Users can track transactions with pagination, manage budgets and saving pots with full CRUD functionality, view recurring bills, and perform advanced searching, sorting, and filtering. Built with responsive design, accessibility, and prepared for full-stack integration with authentication and database support.',
    image: '/project-avatars/finance.png',
    liveDemo: 'https://financeadek.netlify.app/',
    github: 'https://github.com/AdrianPodraza/new-app',
    technologies: [
      {
        name: 'Next.js',
        icon: SiNextdotjs,
        color: 'text-gray-500 border-gray-500 bg-gray-500/10',
      },
      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        color: 'text-teal-500 border-teal-500 bg-teal-500/10',
      },

      {
        name: 'TypeScript',
        icon: SiTypescript,
        color: 'text-blue-600 border-blue-600 bg-blue-600/10',
      },
    ],
  },
];
