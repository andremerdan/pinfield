import React from "react";

import { render } from "@testing-library/react";

import { NumberLock } from "../NumberLock";

describe("NumberLock", () => {
  it("should render a number lock component", () => {
    const { getByText } = render(<NumberLock />);

    expect(getByText("1")).toBeDefined();
  });
});
