"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CreateProject from "./CreateProjectModal";

const ProjectHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
      <Button type="button" onClick={openModal}>
        Add Project
      </Button>
      {isOpen && <CreateProject closeModal={closeModal} />}
    </div>
  );
};

export default ProjectHeader;
