import { Layout } from "@entities/home-entities/layout";
import { MapApp } from "@entities/home-entities/map-app";
import { AddBlog } from "@features/home-features/add-blog";
import { DeckGLFeatures } from "@features/home-features/deck-gl-features";
import { ListBlogs } from "@features/home-features/list-blogs";
import { UserDropdown } from "@features/home-features/user-dropdown";
import { withAuthentication } from "@features/shared-features/handle-authenticated";

const HomeWidgetComponent = () => {
  return (
    <div>
      <Layout userDropdownNode={<UserDropdown />}>
        <AddBlog />
        <ListBlogs />
        <MapApp mapNode={<DeckGLFeatures />} />
      </Layout>
    </div>
  );
};

export const HomeWidget = withAuthentication(HomeWidgetComponent);
