import Image from 'next/image';
import React from 'react';
import Gap from './Gap';
// import { Carousel } from 'react-responsive-carousel';

type ProjectProps = {
  description: string;
  image: any;
  images: any[];
  techs?: string[];
  name: string;
  url?: string;
};

const ProjectItem: React.FC<ProjectProps> = ({
  description,
  image,
  // images,
  name,
  techs,
  url,
}) => {
  return (
    <div className="flex flex-row mb-2.5">
      <div className="my-auto w-1/5 flex flex-row  justify-center">
        <Image
          src={image}
          alt="cyber purr"
          className="image rounded-full mx-auto"
          width="50%"
          height="50%"
        />
      </div>
      <div className=" w-4/5">
        <a href={url} target="_blank" rel="noreferrer">
          {name}
        </a>
        <h4 className="w-full font-mono mb-0.5">{description}</h4>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {techs.map(tech => (
            <span
              className="mr-0.5 border border-solid border-white px-1 rounded-md text-xs"
              key={tech}
            >
              #{tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC<{ projects: ProjectProps[] }> = ({ projects }) => {
  return (
    <>
      <Gap.XS />
      <p>
        Sometimes, I build personal projects, enhance my skill, and ... for fun!
      </p>
      <div className="grid grid-cols-2">
        {projects.map(project => (
          <ProjectItem
            key={project.name}
            description={project.description}
            image={project.image}
            images={project.images}
            techs={project.techs}
            url={project.url}
            name={project.name}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
