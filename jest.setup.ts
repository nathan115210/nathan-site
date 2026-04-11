import React from "react";
import "@testing-library/jest-dom";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ fill: _fill, ...props }: Record<string, unknown>) => {
    return React.createElement("img", {
      ...props,
      alt: (props.alt as string) || "",
    });
  },
}));
