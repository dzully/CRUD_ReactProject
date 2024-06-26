import { ChangeEvent, useState } from "react";
import { useHandlePosts } from "../lib/hooks/use-handle-posts";
import { ListPostsType } from "../types/list-posts.type";

type ItemProps = {
  item: ListPostsType;
};

export const Item = ({ item }: ItemProps) => {
  const { handleUpdatePost, handleDeletePost } = useHandlePosts();

  const [edit, setEdit] = useState(false);
  const [content, setContent] = useState(item.content);
  const [title, setTitle] = useState(item.title);

  const handleUpdateBlog = () => {
    const blogPost = {
      title,
      content,
    };

    handleUpdatePost(item.id, blogPost);
    setEdit(false);
  };

  const handleReset = () => {
    setTitle(item.title);
    setContent(item.content);
    setEdit(false);
  };

  const handleAction = (action: string) => () => {
    switch (action) {
      case "Edit":
        setEdit(true);
        break;
      case "Save":
        handleUpdateBlog();
        break;
      case "Cancel":
        handleReset();
        break;
      case "Delete":
        handleDeletePost(item.id);
        break;
      default:
        break;
    }
  };

  const handleUpdateTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleUpdateDetail = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <li className="flex justify-between gap-x-6 py-5 border border-gray-200 rounded-md px-4">
      <div className="flex min-w-0 gap-x-4">
        <div className="gap-2 flex flex-col min-w-0 flex-auto">
          {edit ? (
            <input
              type="text"
              className="text-sm font-semibold leading-6 text-gray-900 border border-gray-300 rounded-md px-2"
              value={title}
              onChange={handleUpdateTitle}
            />
          ) : (
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {title}
            </p>
          )}
          {edit ? (
            <input
              type="text"
              className="text-sm font-semibold leading-6 text-gray-900 border border-gray-300 rounded-md px-2"
              value={content}
              onChange={handleUpdateDetail}
            />
          ) : (
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {content}
            </p>
          )}
        </div>
      </div>
      <div className="flex-row hidden shrink-0 sm:flex sm:flex-row sm:items-center gap-2">
        <div>
          <button
            type="button"
            onClick={handleAction(edit ? "Save" : "Edit")}
            className={`text-sm font-semibold leading-6 min-w-20 text-white rounded-md ${
              edit ? "bg-green-800" : "bg-blue-800"
            }`}
          >
            {edit ? "Save" : "Edit"}
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={handleAction(edit ? "Cancel" : "Delete")}
            className="text-sm font-semibold leading-6 min-w-20 text-white rounded-md bg-red-800"
          >
            {edit ? "Cancel" : "Delete"}
          </button>
        </div>
      </div>
    </li>
  );
};
