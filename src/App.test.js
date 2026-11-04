import { render, screen, within } from "@testing-library/react";
import App from "./App";

test("renders portfolio content", () => {
  render(<App />);
  const projectsHeading = screen.getByRole("heading", { name: /projects/i });
  expect(projectsHeading).toBeInTheDocument();
});

test("keeps the original header navigation", () => {
  render(<App />);

  const navigation = within(
    within(screen.getByRole("banner")).getByRole("navigation", {
      name: "Main navigation",
    }),
  );
  expect(
    navigation.getAllByRole("link").map((link) => ({
      text: link.textContent,
      href: link.getAttribute("href"),
    })),
  ).toEqual([
    { text: "Research", href: "#research" },
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Writing", href: "https://ashnak03.substack.com/" },
    { text: "Contact", href: "#contact" },
  ]);
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
  expect(
    astranomy.getByText("CoRL 2026 Late Breaking Results"),
  ).toBeInTheDocument();
  expect(astranomy.getByText("2026")).toBeInTheDocument();

  const cosmos = within(articles[1]);
  expect(cosmos.getByRole("link", { name: "Paper" })).toHaveAttribute(
    "href", "https://arxiv.org/abs/2606.02800",
  );
  expect(cosmos.getByRole("link", { name: "Project" })).toHaveAttribute(
    "href", "https://research.nvidia.com/labs/cosmos-lab/cosmos3/",
  );
});
