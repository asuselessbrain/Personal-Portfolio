"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CreatePostModal from "./CreatePostModal";

const DashboardBlogsHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div className="flex items-center justify-between mb-10">
      <h2 className="text-3xl md:text-4xl font-bold">My Blogs</h2>
      <Button type="button" onClick={openModal}>
        Create Post
      </Button>
      {isOpen && <CreatePostModal closeModal={closeModal} />}
    </div>
  );
};

export default DashboardBlogsHeader;
