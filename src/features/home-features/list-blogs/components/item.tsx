import { ChangeEvent, useState } from "react";
import { ListPostsType } from "../types/list-posts.type";

type ItemProps = {
  item: ListPostsType;
};

export const Item = ({ item }: ItemProps) => {
  const [edit, setEdit] = useState(false);
  const [blogPost, setBlogPost] = useState(item);

  const handleAction = (action: string) => () => {
    switch (action) {
      case "Edit":
        setEdit(true);
        break;
      case "Save":
        setEdit(false);
        break;
      case "Cancel":
        setEdit(false);
        setBlogPost(item);
        break;
      case "Delete":
        console.log("Delete");
        break;
      default:
        break;
    }
  };

  const handleUpdateDetail =
    (label: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setBlogPost({
        ...blogPost,
        [label]: e.target.value,
      });
    };

  return (
    <li className="flex justify-between gap-x-6 py-5 border border-gray-200 rounded-md px-4">
      <div className="flex min-w-0 gap-x-4">
        <div className="gap-2 flex flex-col min-w-0 flex-auto">
          {edit ? (
            <input
              type="text"
              className="text-sm font-semibold leading-6 text-gray-900 border border-gray-300 rounded-md px-2"
              value={blogPost.title}
              onChange={handleUpdateDetail("name")}
            />
          ) : (
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {blogPost.title}
            </p>
          )}
          {edit ? (
            <input
              type="text"
              className="text-sm font-semibold leading-6 text-gray-900 border border-gray-300 rounded-md px-2"
              value={blogPost.content}
              onChange={handleUpdateDetail("email")}
            />
          ) : (
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {blogPost.content}
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
