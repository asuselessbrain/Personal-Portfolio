import Image from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa";

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
    <div className="mx-auto grid gap-12 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-3">
      {projects?.slice(0, 3)?.map((project: Project) => (
        <div
          key={project.name}
          className="group h-96 w-96 [perspective:1000px]"
        >
          <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 delay-200 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/*  Front Face  */}

            <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
              {project.imageUrl && (
                <Image
                  className="object-cover cursor-pointer object-left h-full w-full rounded-xl"
                  src={project.imageUrl}
                  alt={project.name}
                  width={320}
                  height={320}
                />
              )}

              <p className="md:my-6 text-2xl">{project.name}</p>
            </div>

            {/* Back Face */}

            <div className="absolute inset-0 h-full w-full rounded-xl py-4 bg-black/80 px-12 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-start justify-center">
                <h2 className="text-2xl font-bold mb-4 -ml-6">
                  {project.name}
                </h2>

                <p className="text-pretty mb-4 text-justify">
                  {project.description}
                </p>

                <Link
                  href={`/projects/${project?.id}`}
                  className="flex items-center justify-center w-full"
                >
                  <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                    <span>View Details</span>

                    <FaEye className="h-6 w-6 ml-2" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProject;
