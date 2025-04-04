import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export interface Blog {
  _id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  content: string;
  image: string;
  tags: string[];
}

export const metadata: Metadata = {
  title: "Arfan Ahmed | Blogs",
  description: "Arfan Ahmed Blogs",
};

const BlogPage = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs`, {
    cache: "no-store",
  });

  const blogs = await data.json();
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="2000"
      className="my-20 px-4 py-4 rounded md:px-10 lg:px-20 dark:text-white min-h-screen"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        My Blogs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs?.data?.map((blog: Blog) => (
          <Link href={`/blog/${blog?._id}`} key={blog._id}>
            <div className="rounded-lg shadow-lg bg-white dark:bg-neutral-800 dark:border dark:border-gray-700 p-4 group">
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
