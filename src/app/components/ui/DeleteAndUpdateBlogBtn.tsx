"use client";
import { MdDeleteForever, MdTipsAndUpdates } from "react-icons/md";

const DeleteAndUpdateBlogBtn = () => {
  return (
    <div className="absolute top-2 right-2 flex items-center gap-2 bg-gray-100 p-1 rounded">
      <MdTipsAndUpdates
        className="text-green-500 hover:scale-105 hover:text-green-600"
        size={28}
      />
      <MdDeleteForever
        className="text-red-500 hover:scale-105 hover:text-red-600"
        size={28}
      />
    </div>
  );
};

export default DeleteAndUpdateBlogBtn;
