import { authOptions } from "@/authOptions/authOptions";
import { Card, CardContent } from "@/components/ui/card";
import { getServerSession } from "next-auth";
import Image from "next/image";
import LogOutButton from "../../components/ui/Logout";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  const projectsData = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const projectsRes = await projectsData.json();
  const projects = projectsRes?.data;

  const blogsData = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs`, {
    next: {
      revalidate: 30,
    },
  });
  const blogRes = await blogsData.json();
  const blogs = blogRes?.data;

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <Card className="max-w-lg mx-auto mt-10 rounded-2xl shadow-lg dark:bg-gray-900 dark:text-white bg-white text-gray-800">
        <CardContent className="p-6 flex flex-col items-center">
          <Image
            width={120}
            height={120}
            className="rounded-full border-4 border-gray-300 dark:border-gray-700"
            src={session?.user?.image as string}
            alt="profile-image"
          />
          <h2 className="text-2xl font-semibold mt-4">
            Welcome, {session?.user?.name}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Email: {session?.user?.email}
          </p>

          {/* Info Stats */}
          <div className="grid grid-cols-3 gap-4 w-full mt-6 text-center">
            <div>
              <p className="text-xl font-bold">{projects?.length}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Projects
              </p>
            </div>
            <div>
              <p className="text-xl font-bold">{blogs?.length}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Blogs</p>
            </div>
            <div>
              <p className="text-xl font-bold">0</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Reviews
              </p>
            </div>
          </div>

          {/* Logout Button */}
          <LogOutButton />
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
