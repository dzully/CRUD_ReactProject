import { $signInStore } from "@entities/sign-in-entities/store/sign-in-store";
import { useStore } from "@nanostores/react";
import instance from "@shared/api/instance";
import { useEffect, useState } from "react";
import { ListPostsType } from "../../types/list-posts.type";

export const useGetAllPosts = () => {
  const { session } = useStore($signInStore);
  const [data, setData] = useState<ListPostsType[]>();
  console.log({ session });

  useEffect(() => {
    if (!data) {
      instance.get("/api/v1/get-all-post").then((response) => {
        setData(response.data);
      });
    }
  }, [data]);

  return { data };
};
