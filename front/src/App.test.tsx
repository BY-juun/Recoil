import React, { Suspense } from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { RecoilRoot } from "recoil";
import WritePostForm from "./components/WritePostForm";

const returnAppComponent = () => {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </RecoilRoot>
  );
};

const returnWritePostForm = (writePostModal: any) => {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <WritePostForm setWritePostModal={writePostModal} />
      </Suspense>
    </RecoilRoot>
  );
};

describe("Is WritePost Button Exists and Is WritePostModal Open?", () => {
  it("Is WritePost Button Exists?", async () => {
    const { findByRole } = render(returnAppComponent());
    const BtnElement = await findByRole("button", { name: "글 작성" });
    expect(BtnElement).toBeInTheDocument();
  });

  it("Is WritePostModal Open?", async () => {
    const { findByRole } = render(returnAppComponent());
    const BtnElement = await findByRole("button", { name: "글 작성" });
    fireEvent.click(BtnElement);
    expect(BtnElement).toBeInTheDocument();
    const writePostModal = jest.fn();
    const { queryAllByText } = render(returnWritePostForm(writePostModal));
    await waitFor(() => expect(queryAllByText("Content")).toHaveLength(2));
  });
});
