import { Metadata } from "next";
import { Project } from "../components/Projects";
import ProjectCard from "../components/shared/ProjectCard";

export const metadata: Metadata = {
  title: "Arfan Ahmed | Projects",
  description: "Arfan Ahmed Portfolio Projects",
};

const ProjectPage = async () => {
  const data = await fetch("http://localhost:3004/services", {
    cache: "no-store",
  });
  const projects = await data.json();
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="2000"
      className="min-h-[calc(100vh-234px)] mb-20"
    >
      <div className="mx-auto flex justify-center object-center px-4 sm:py-24 lg:max-w-7xl">
        <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
          <h2 className="text-6xl font-bold text-center dark:text-white">
            Projects
          </h2>

          <div className="mx-auto grid gap-16 space-y-10 md:space-y-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects?.map((project: Project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
