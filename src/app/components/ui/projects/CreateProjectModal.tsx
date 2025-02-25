import { RxCross2 } from "react-icons/rx";
import Form from "next/form";
import { createProject } from "@/actions/createProject";
// import { Blog } from "@/app/(withCommonLayout)/blog/page";

export type Props = {
  closeModal: () => void;
//   blog: Blog;
};

const CreateProject: React.FC<Props> = ({ closeModal }) => {
  return (
    <div
      className="fixed left-0 top-0 z-[1055] flex h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50"
      role="dialog"
      aria-labelledby="modal-title"
      aria-modal="true"
    >
      <div className="relative w-full max-w-md translate-y-0 opacity-100 transition-all duration-300 ease-in-out">
        <div className="relative flex flex-col rounded-md border-none bg-white text-current shadow-4 outline-none dark:bg-surface-dark">
          {/* Modal header */}
          <div className="flex items-center justify-end rounded-t-md border-b-2 border-neutral-100 p-4 dark:border-white/10">
            <button
              type="button"
              onClick={closeModal}
              className="text-neutral-500 hover:text-neutral-800 dark:text-gray-800 dark:hover:text-gray-700"
              aria-label="Close"
            >
              <RxCross2 size={24} />
            </button>
          </div>

          {/* Modal body */}
          <div>
            <div className="heading text-center font-bold text-2xl m-2 text-gray-800">
              Add Project
            </div>

            <Form
              action={createProject}
              className="editor mx-auto w-10/12 flex flex-col text-black border mb-4 border-gray-300 p-4 shadow-lg max-w-2xl"
            >
                <input
                className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                placeholder="Project Name"
                name="name"
                type="text"
              />
              <input
                className="bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                placeholder="Features"
                name="features"
                type="text"
              />
              <input
                className="bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                placeholder="Tech Stacks"
                name="techStacks"
                type="text"
              />
              <input
                className="bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                placeholder="Image Url"
                name="imageUrl"
                type="text"
              />
              <input
                className="bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                placeholder="Live Link"
                name="liveLink"
                type="text"
              />
              <textarea
                className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
                placeholder="Describe everything about this project here"
                name="description"
              ></textarea>

              {/* <!-- buttons --> */}
              <div className="flex justify-end rounded-b-md border-t-2 border-neutral-100 mt-4 dark:border-white/10">
                <button
                  type="button"
                  onClick={closeModal}
                  className="inline-block rounded bg-gray-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase text-gray-700 transition duration-150 ease-in-out hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="ms-2 inline-block rounded bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  Save changes
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
