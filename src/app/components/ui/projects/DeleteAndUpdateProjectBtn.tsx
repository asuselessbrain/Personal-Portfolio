"use client";
import { useState } from "react";
import { MdDeleteForever, MdTipsAndUpdates } from "react-icons/md";
import UpdateProjectModal from "./UpdateProjectModal";
import { Project } from "../Projects";

const DeleteAndUpdateProjectBtn = ({ project }: { project: Project }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleDelete = async () => {
    try {
        console.log(project?.id);
      const response = await fetch(`http://localhost:3004/services/${project?.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete the project.");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };
  return (
    <div className="absolute top-2 right-2 flex items-center gap-2 bg-gray-100 p-1 rounded">
      <MdTipsAndUpdates
        onClick={openModal}
        className="text-green-500 hover:scale-105 hover:text-green-600"
        size={28}
      />
      <MdDeleteForever
        onClick={handleDelete}
        className="text-red-500 hover:scale-105 hover:text-red-600"
        size={28}
      />
      {isOpen && <UpdateProjectModal project={project} closeModal={closeModal} />}
    </div>
  );
};

export default DeleteAndUpdateProjectBtn;
