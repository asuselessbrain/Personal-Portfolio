import { Project } from "@/app/components/ui/Projects";
import ProjectHeader from "@/app/components/ui/projects/ProjectHeader";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Arfan Ahmed | Projects",
  description: "Arfan Ahmed Portfolio Projects",
};

const DashboardProjectPage = async () => {
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
          <ProjectHeader />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project: Project) => (
              <>
                <div className="rounded-lg relative shadow-lg bg-white dark:bg-neutral-800 dark:border dark:border-gray-700 p-4 group h-full">
                  <Image
                    width={200}
                    height={200}
                    src={project?.imageUrl}
                    alt={project?.name}
                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 duration-1000"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white hover:underline mt-2">
                    {project?.name}
                  </h3>
                  {/* <DeleteAndUpdateBlogBtn blog={blog} /> */}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProjectPage;
