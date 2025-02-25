import { createBLog } from "@/actions/createBlog";
import Form from "next/form";
import { Props } from "./CreatePostModal";



const CreatePostForm: React.FC<Props> = ({ closeModal }) => {
  return (
    // <!-- component -->
    <div>
      <div className="heading text-center font-bold text-2xl m-2 text-gray-800">
        New Post
      </div>

      <Form
        action={createBLog}
        className="editor mx-auto w-10/12 flex flex-col text-black border mb-4 border-gray-300 p-4 shadow-lg max-w-2xl"
      >
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          placeholder="Title"
          name="title"
          type="text"
        />
        <input
          className="bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          placeholder="Category"
          name="category"
          type="text"
        />
        <input
          className="bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          placeholder="Image"
          name="image"
          type="text"
        />
        <textarea
          className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          placeholder="Describe everything about this post here"
          name="content"
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
  );
};

export default CreatePostForm;
