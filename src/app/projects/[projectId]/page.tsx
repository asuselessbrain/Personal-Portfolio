import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IoGlobeSharp } from "react-icons/io5";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectId: string }>;
}): Promise<Metadata> {
  // read route params
  const { projectId } = await params;

  // fetch data
  const data = await fetch(`http://localhost:3004/services/${projectId}`);
  const project = await data.json();

  return {
    title: project.name,
    description: project.description,
  };
}

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;

  const data = await fetch(`http://localhost:3004/services/${projectId}`, {
    cache: "no-cache",
  });

  const project = await data.json();
  return (
    <div className="mt-16">
      <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16">
        <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto">
          <h2 className="text-2xl sm:text-4xl font-semibold hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
            {project?.name}
          </h2>

          <div
            data-aos="fade-down"
            data-aos-duration="3000"
            className="relative"
          >
            <Image
              width={200}
              height={200}
              className="w-full"
              src={project?.imageUrl}
              alt="project Image"
            />
          </div>
          <p
            data-aos="fade-left"
            data-aos-duration="3000"
            className="text-gray-800 dark:text-white py-5 text-lg leading-8 mt-8"
          >
            {project?.description}
          </p>
          <hr />

          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="text-left mt-8"
          >
            <h2 className="text-xl font-semibold mb-2 text-red-600">
              🔑 Key Features:
            </h2>
            <ul className="list-disc ml-12 space-y-2">
              {project?.features?.map((feature: string, index: number) => (
                <li key={index} className="text-pretty">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className="text-left mt-8"
          >
            <h2 className="text-xl font-semibold mb-2 text-red-600">
              💻 Tech Stack:
            </h2>
            <ul className="list-disc ml-12 space-y-2">
              {project?.techStacks?.map((techStack: string, index: number) => (
                <li key={index} className="text-pretty">
                  {techStack}
                </li>
              ))}
            </ul>
          </div>

          {project?.liveLink && (
            <div
              data-aos="zoom-in"
              data-aos-duration="2500"
              className="mt-10 text-center"
            >
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="transition duration-300">
                  <IoGlobeSharp size={30} /> View Live Site
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
