import { render, screen, within } from "@testing-library/react";
import App from "./App";

test("renders portfolio content", () => {
  render(<App />);
  const projectsHeading = screen.getByRole("heading", { name: /projects/i });
  expect(projectsHeading).toBeInTheDocument();
});

test("keeps section navigation in the intro without a separate header", () => {
  render(<App />);

  expect(screen.queryByRole("banner")).not.toBeInTheDocument();
  const intro = within(screen.getByRole("region", { name: "Ashna Khetan" }));
  const navigation = within(
    intro.getByRole("navigation", { name: "Main navigation" }),
  );
  expect(navigation.getAllByRole("link")).toHaveLength(4);
  expect(navigation.getByRole("link", { name: "Research" })).toHaveAttribute(
    "href", "#research",
  );
  expect(navigation.getByRole("link", { name: "Experience" })).toHaveAttribute(
    "href", "#experience",
  );
  expect(navigation.getByRole("link", { name: "Projects" })).toHaveAttribute(
    "href", "#projects",
  );
  expect(navigation.getByRole("link", { name: "Contact" })).toHaveAttribute(
    "href", "#contact",
  );
});

test("renders the intro and publications without a research-interests bar", () => {
  render(<App />);

  expect(screen.queryByLabelText("Research interests")).not.toBeInTheDocument();
  expect(screen.getByRole("region", { name: "Ashna Khetan" })).toBeInTheDocument();
  expect(screen.getByRole("region", { name: "Publications" })).toBeInTheDocument();
});

test("shows Astranomy first with project links and preserves existing paper links", () => {
  render(<App />);

  const publications = within(
    screen.getByRole("region", { name: "Publications" }),
  );
  const articles = publications.getAllByRole("article");
  expect(articles).toHaveLength(5);

  const astranomy = within(articles[0]);
  expect(
    astranomy.getAllByRole("link").map((link) => ({
      text: link.textContent.trim(),
      href: link.getAttribute("href"),
    })),
  ).toEqual([
    {
      text: "Astranomy: An empirical study of GPT-6 Astra as a native robot policy",
      href: "https://research.nvidia.com/labs/srl/projects/astranomy/",
    },
    {
      text: "Project",
      href: "https://research.nvidia.com/labs/srl/projects/astranomy/",
    },
  ]);
  expect(astranomy.getByText(/Jenai Xuning Yang/)).toHaveTextContent(
    /^Jenai Xuning Yang, Ashna Khetan, Shun Zhang$/,
  );
  expect(astranomy.getByText("NVIDIA Technical Report")).toBeInTheDocument();
  expect(astranomy.getByText("2026")).toBeInTheDocument();

  const cosmos = within(articles[1]);
  expect(cosmos.getByRole("link", { name: "Paper" })).toHaveAttribute(
    "href", "https://arxiv.org/abs/2606.02800",
  );
  expect(cosmos.getByRole("link", { name: "Project" })).toHaveAttribute(
    "href", "https://research.nvidia.com/labs/cosmos-lab/cosmos3/",
  );
});
