import { Layout } from "@entities/home-entities/layout";
import { AddBlog } from "@features/home-features/add-blog";
import { ListBlogs } from "@features/home-features/list-blogs";
import { UserDropdown } from "@features/home-features/user-dropdown";
import { withAuthentication } from "@features/shared-features/handle-authenticated";

const HomeWidgetComponent = () => {
  return (
    <div>
      <Layout userDropdownNode={<UserDropdown />}>
        <AddBlog />
        <ListBlogs />
      </Layout>
    </div>
  );
};

export const HomeWidget = withAuthentication(HomeWidgetComponent);
