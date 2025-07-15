import React from 'react';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { Project } from '@/app/constants/projects'; // importuj interfejs

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={3}
      tiltMaxAngleY={3}
      tiltReverse={true}
      className="flex w-screen items-center justify-center"
    >
      <div className="flex max-w-[80vw] flex-1 flex-col gap-6 rounded-lg border-2 border-gray-500 bg-transparent px-4 py-8 backdrop-blur-lg md:flex-row">
        <div className="flex flex-1 flex-col justify-center">
          <h2 className="text-5xl font-bold">{project.title}</h2>
          <p className="mt-2 text-sm text-gray-500">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map(({ name, icon: Icon, color }) => (
              <Badge
                key={name}
                variant="outline"
                className={`flex items-center gap-2 border px-3 py-1 text-xs ${color}`}
              >
                <Icon className="h-4 w-4" />
                {name}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center">
          <div className="relative aspect-video w-full flex-1">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="rounded-lg object-cover"
            />
          </div>

          <div className="mt-6 flex gap-3 place-self-end">
            <Button asChild className="gap-2 px-5 py-2 text-base">
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                <FiExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
            <Button variant="secondary" asChild className="gap-2 px-5 py-2 text-base">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default ProjectCard;
