"use client";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import UpdateBlogModal from "./UpdateBlogModal";
import { Blog } from "@/app/(dashboard)/dashboard/blogs/page";

const DeleteAndUpdateBlogBtn = ({ blog }: { blog: Blog }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleDelete = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/${blog?._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };
  return (
    <div className="absolute top-2 right-2 flex items-center gap-2 bg-gray-100 p-1 rounded">
      <TiEdit 
        onClick={openModal}
        className="text-green-500 hover:scale-105 hover:text-green-600"
        size={28}
      />
      <MdDeleteForever
        onClick={handleDelete}
        className="text-red-500 hover:scale-105 hover:text-red-600"
        size={28}
      />
      {isOpen && <UpdateBlogModal blog={blog} closeModal={closeModal} />}
    </div>
  );
};

export default DeleteAndUpdateBlogBtn;
