import ProjectCard from "../shared/ProjectCard";

export interface Project {
  _id: string;
  name: string;
  imageUrl: string;
  description: string;
  features: string[];
  techStacks: string[];
  liveLink: string;
}

const FeaturedProject = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`, {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  const projects = data?.data;
  return (
    <div className="mx-auto grid gap-16 space-y-10 md:space-y-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects?.slice(0, 3)?.map((project: Project) => (
        <ProjectCard key={project?._id} project={project} />
      ))}
    </div>
  );
};

export default FeaturedProject;
