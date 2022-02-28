import { render } from "@testing-library/react";
import PostList from "..";

describe("<PostList />", () => {
  const PostListData = {
    title: "PostListDataTitle",
    content: "PostListDataContent",
  };
  it("renders PostList Properly", () => {
    const { getByText } = render(<PostList title={PostListData.title} content={PostListData.content} />);
    getByText(PostListData.title);
    getByText(PostListData.content);
  });
});
