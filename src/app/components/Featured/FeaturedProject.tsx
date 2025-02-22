import ProjectCard from "../shared/ProjectCard";

export interface Project {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  features: string[];
  techStacks: string[];
  liveLink: string;
}

const FeaturedProject = async () => {
  const data = await fetch("http://localhost:3004/services", {
    next: {
      revalidate: 30,
    },
  });
  const projects = await data.json();
  return (
    <div className="mx-auto grid gap-16 space-y-10 md:space-y-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects?.slice(0, 3)?.map((project: Project) => (
        <ProjectCard key={project?.id} project={project} />
      ))}
    </div>
  );
};

export default FeaturedProject;
