import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogId: string }>;
}): Promise<Metadata> {
  // read route params
  const { blogId } = await params;

  // fetch data
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/${blogId}`);
  const data = await res.json();
  const blog = data?.data

  return {
    title: blog?.title,
    description: blog?.content,
  };
}

const page = async ({ params }: { params: Promise<{ blogId: string }> }) => {
  const { blogId } = await params;

  console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/${blogId}`);

  const data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/${blogId}`, {
    cache: "no-store",
  });

  const res = await data.json();
  console.log(res);
  const blog = res?.data;
  console.log(blog);
  return (
    //   <!-- Blog post with featured image and dark mode support -->
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12 pb-16 py-4 rounded dark:text-gray-100">
      <div className="max-w-3xl mx-auto">
        {/* <!-- Blog post header --> */}
        <div className="py-8">
          <h1 className="text-3xl font-bold mb-2 dark:text-white">
            {blog?.title}
          </h1>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            Published on {new Date(blog?.createdAt).toDateString()}
          </p>
        </div>

        {/* <!-- Featured image --> */}
        <Image
          width={200}
          height={200}
          src={blog?.image}
          alt="Featured image"
          className="w-full h-auto mb-8 rounded-lg shadow-md"
        />
        <p className="text-gray-700 dark:text-gray-200 text-xl my-2 mb-8">
          Written By:
          <span className="text-blue-500"> {blog?.author}</span>
        </p>

        {/* <!-- Blog post content --> */}
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto dark:prose-invert text-justify">
          <p>{blog?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
