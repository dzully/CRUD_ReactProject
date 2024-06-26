import {
  $homeStore,
  updateListOfBlogs,
} from "@entities/home-entities/store/home-store";
import { $signInStore } from "@entities/sign-in-entities/store/sign-in-store";
import { useStore } from "@nanostores/react";
import { default as createInstance } from "@shared/api/instance";
import { useEffect } from "react";
import { ListPostsType } from "../../types/list-posts.type";

export const useHandlePosts = () => {
  const { session } = useStore($signInStore);
  const { listOfBlogs } = useStore($homeStore);

  useEffect(() => {
    if (!listOfBlogs && session?.access_token) {
      const axiosInstance = createInstance(session?.access_token as string);
      axiosInstance.get("/api/v1/get-all-post").then((response) => {
        updateListOfBlogs(response.data);
      });
    }
  }, [listOfBlogs, session?.access_token]);

  const handleUpdatePost = async (
    id: number,
    postData: Omit<ListPostsType, "id">
  ) => {
    if (session?.access_token) {
      const axiosInstance = createInstance(session?.access_token as string);
      await axiosInstance
        .put(`/api/v1/update-post/${id}`, {
          ...postData,
        })
        .then((response) => {
          updateListOfBlogs(response.data);
        });
    }
  };

  const handleDeletePost = async (id: number) => {
    if (session?.access_token) {
      const axiosInstance = createInstance(session?.access_token as string);
      await axiosInstance
        .delete(`/api/v1/delete-post/${id}`)
        .then((response) => {
          updateListOfBlogs(response.data);
        });
    }
  };

  const handleCreatePost = async (postData: Omit<ListPostsType, "id">) => {
    if (session?.access_token) {
      const axiosInstance = createInstance(session?.access_token as string);
      await axiosInstance
        .post(`/api/v1/create-post`, {
          ...postData,
        })
        .then((response) => {
          updateListOfBlogs(response.data);
        });
    }
  };

  return {
    data: listOfBlogs,
    handleCreatePost,
    handleDeletePost,
    handleUpdatePost,
  };
};
