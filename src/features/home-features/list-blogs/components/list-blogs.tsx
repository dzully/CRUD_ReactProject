import { useHandlePosts } from "../lib/hooks/use-handle-posts";
import { Item } from "./item";

export const ListBlogs = () => {
  const { data } = useHandlePosts();

  return (
    <ul role="list" className="flex flex-col gap-2">
      {data?.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};
