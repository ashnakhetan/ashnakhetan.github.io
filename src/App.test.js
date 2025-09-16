import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio content", () => {
  render(<App />);
  const projectsHeading = screen.getByRole("heading", { name: /projects/i });
  expect(projectsHeading).toBeInTheDocument();
});
