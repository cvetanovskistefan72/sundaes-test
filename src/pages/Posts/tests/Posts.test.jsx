import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { server } from "../../../mocks/server";
import Posts from "../Posts";

describe("Posts", () => {
  test("posts are rendered to the page", async () => {
    render(<Posts />);
    const posts = await screen.findAllByTestId("post");
    const postTitles = posts.map((post) => post.innerHTML);
    expect(postTitles).toEqual(["Title 1", "Title 2"]);
  });
  test("posts are rendered to the page", async () => {
    server.resetHandlers(
      rest.get("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) =>
        res(ctx.status(500))
      )
    );
    render(<Posts />);
    const alert = await screen.findByRole("alert");
    expect(alert.innerHTML).toEqual("Error has occured");
  });
});
