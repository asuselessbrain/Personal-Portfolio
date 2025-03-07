import ProjectCard from "@/app/components/shared/ProjectCard";
import { Project } from "@/app/components/ui/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arfan Ahmed | Projects",
  description: "Arfan Ahmed Portfolio Projects",
};

const ProjectPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`, {
    cache: "no-store",
  });
  const data = await res.json();
  const projects = data?.data;
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
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
