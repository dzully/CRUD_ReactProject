import { ListPostsType } from "@features/home-features/list-blogs/types/list-posts.type";
import { map } from "nanostores";

export type HomeStoreProps = {
  listOfBlogs: ListPostsType[] | null;
};

export const $homeStore = map<HomeStoreProps>({
  listOfBlogs: null,
});

export const updateListOfBlogs = (listOfBlogs: ListPostsType[] | null) => {
  $homeStore.set({
    ...$homeStore.get(),
    listOfBlogs,
  });
};
