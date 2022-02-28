import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3065/posts", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          title: "mockingTest1",
          content: "mockingTestContent1",
          createdAt: "2022-01-02T07:36:58.000Z",
          updatedAt: "2022-01-02T07:36:58.000Z",
        },
        {
          id: 2,
          title: "mockingTest2",
          content: "mockingTestContent2",
          createdAt: "2022-01-02T07:36:58.000Z",
          updatedAt: "2022-01-02T07:36:58.000Z",
        },
      ])
    );
  }),
];
