import { BiTransfer } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiJson } from 'react-icons/si';

export const techStackIcons = [
  {
    name: 'React',
    modelPath: '/3d-models/reactModel.glb',
    img: '/tech-png/React.png',
    scale: [0.05, 0.05, 0.05] as [number, number, number],
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    name: 'MySQL',
    modelPath: '/3d-models/mySqlModel.glb',
    scale: [0.05, 0.05, 0.05] as [number, number, number],
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    name: 'Mongo DB',
    modelPath: '/3d-models/mongodbModel.glb',
    scale: [0.05, 0.05, 0.05] as [number, number, number],
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    name: 'Git',
    modelPath: '/3d-models/gitModel.glb',
    scale: [0.05, 0.05, 0.05] as [number, number, number],
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    name: 'Tailwind CSS',
    modelPath: '/3d-models/tailwindModel.glb',
    img: '/tech-png/Tailwind.png',
    scale: [0.05, 0.05, 0.05] as [number, number, number],
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    name: 'Next.js',
    modelPath: '/3d-models/nextjsModel.glb',
    scale: [0.05, 0.05, 0.05] as [number, number, number],
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    name: 'Figma',
    modelPath: '/3d-models/figmaModel.glb',
    scale: [0.05, 0.05, 0.05] as [number, number, number],
    rotation: [0, 0, 0] as [number, number, number],
  },
] as const;

export const technologies = [
  { name: 'React', icon: FaReact, color: 'text-blue-500 border-blue-500 bg-blue-500/10' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-500 border-gray-500 bg-gray-500/10' },
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
  { name: 'JSON', icon: SiJson, color: 'text-orange-500 border-orange-500 bg-orange-500/10' },
] as const;
