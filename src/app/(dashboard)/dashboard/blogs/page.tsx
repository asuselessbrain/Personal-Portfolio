import DashboardBlogsHeader from "@/app/components/ui/blogs/DashboardBlogsHeader";
import DeleteAndUpdateBlogBtn from "@/app/components/ui/blogs/DeleteAndUpdateBlogBtn";
import { Metadata } from "next";
import Image from "next/image";

export interface Blog {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  content: string;
  image: string;
  tags: string[];
}

export const metadata: Metadata = {
  title: "Dashboard | Blogs",
  description: "Arfan Ahmed Blogs",
};

const BlogPage = async () => {
  const data = await fetch("http://localhost:3004/blogs", {
    cache: "no-store",
  });

  const blogs = await data.json();
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="2000"
      className="my-20 px-4 py-4 w-full mx-auto rounded md:px-10 lg:px-20 dark:text-white min-h-screen"
    >
      <DashboardBlogsHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs?.map((blog: Blog) => (
          <>
            <div className="rounded-lg relative shadow-lg bg-white dark:bg-neutral-800 dark:border dark:border-gray-700 p-4 group h-full">
              <Image
                width={200}
                height={200}
                src={blog?.image}
                alt={blog?.title}
                className="w-full h-48 object-cover rounded-lg group-hover:scale-105 duration-1000"
              />
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-3">
                <span>{blog?.date}</span>
                <span className="mx-2">|</span>
                <span>{blog?.author}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white hover:underline mt-2">
                {blog?.title}
              </h3>
              <DeleteAndUpdateBlogBtn blog={blog} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
