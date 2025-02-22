import { Button } from "@/components/ui/button";
import FeaturedProject from "./FeaturedProject";
import Link from "next/link";

const Featured = () => {
  return (
    <section
      data-aos="zoom-in-up"
      data-aos-duration="2000"
      className="pb-16 mx-auto sm:pb-20"
    >
      <div className="mx-auto flex justify-center object-center px-4 py-16 sm:py-24 lg:max-w-7xl">
        <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
          <h2 className="text-4xl md:text-6xl font-bold text-center dark:text-white my-10">
            Featured Projects
          </h2>

          <FeaturedProject />
        </div>
      </div>
      <div className="text-center">
        <Link href="/projects">
          <Button>View More</Button>
        </Link>
      </div>
    </section>
  );
};
export default Featured;
