import { ListPostsType } from "@features/home-features/list-blogs/types/list-posts.type";
import { map } from "nanostores";

export type HomeStoreProps = {
  listOfBlogs: ListPostsType[] | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mapSdk: any | null;
};

export const $homeStore = map<HomeStoreProps>({
  listOfBlogs: null,
  mapSdk: null,
});

export const updateListOfBlogs = (listOfBlogs: ListPostsType[] | null) => {
  $homeStore.set({
    ...$homeStore.get(),
    listOfBlogs,
  });
};

export const updateMapSdk = (mapSdk: unknown) => {
  $homeStore.set({
    ...$homeStore.get(),
    mapSdk,
  });
};
