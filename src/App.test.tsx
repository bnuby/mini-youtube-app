import { render, screen } from "@testing-library/react";
import App from "./App";

describe("React Bootstrap", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders react 2", () => {
    render(<App />);
    const linkElement = screen.queryByText(/edit .*and save to reload\./i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement);
  });
});
