import { useGetAllPosts } from "../lib/hooks/use-get-all-posts";
import { Item } from "./item";

export const ListBlogs = () => {
  const { data } = useGetAllPosts();
  console.log({ data });

  return (
    <ul role="list" className="flex flex-col gap-2">
      {data?.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};
