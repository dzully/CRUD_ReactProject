import { useHandlePosts } from "@features/home-features/list-blogs/lib/hooks/use-handle-posts";
import { useState } from "react";
import { ModalDialog } from "./modal-dialog";

export const AddBlog = () => {
  const { handleCreatePost } = useHandlePosts();

  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const [loading, setLoading] = useState(false);

  const handleModal = (value: boolean) => () => {
    setOpen(value);
  };

  const handleChange =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (key === "title") {
        setTitle(e.target.value);
      } else {
        setContent(e.target.value);
      }
    };

  const handleCreate = () => {
    setLoading(true);
    const blogPost = {
      title,
      content,
    };

    handleCreatePost(blogPost).then(() => {
      setOpen(false);
      setTitle("");
      setContent("");
      setLoading(false);
    });
  };

  return (
    <div className="mb-2">
      <button
        onClick={handleModal(true)}
        className="flex items-center justify-center w-30 h-12 px-6 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add Blog
      </button>
      <ModalDialog
        content={content}
        handleChange={handleChange}
        handleClose={handleModal}
        handleCreate={handleCreate}
        loading={loading}
        open={open}
        title={title}
      />
    </div>
  );
};
