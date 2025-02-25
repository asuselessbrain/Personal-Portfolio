import { RxCross2 } from "react-icons/rx";
import CreatePostForm from "./CreatePostForm";

export type Props = {
    closeModal: () => void; // A function with no parameters and no return value
  };

const CreatePostModal: React.FC<Props> = ({ closeModal }) => {
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
          <CreatePostForm closeModal={closeModal} />

        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
