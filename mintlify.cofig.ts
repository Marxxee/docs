import { defineConfig } from '@mintlify/doc';

export default defineConfig({
  site: {
    title: "Monarch Model College",
    description: "Official site and documentation for Monarch Model College",
  },
  nav: [
    { title: "Home", href: "/MMC%20WEB/index.html.mdx" },
    { title: "API Reference", href: "/api-reference/introduction" },
    { title: "Essentials", href: "/essentials/code" }
  ],
  sidebar: [
    {
      label: "MMC WEB",
      items: [
        { title: "Home Page", href: "/MMC%20WEB/index.html.mdx" }
      ]
    },
    {
      label: "API Reference",
      items: [
        { title: "Introduction", href: "/api-reference/introduction" },
        { title: "Endpoint", href: "/api-reference/endpoint" },
        { title: "OpenAPI JSON", href: "/api-reference/openapijson" }
      ]
    },
    {
      label: "Essentials",
      items: [
        { title: "Code", href: "/essentials/code" },
        { title: "Images", href: "/essentials/images" },
        { title: "Markdown", href: "/essentials/markdown" },
        { title: "Navigation", href: "/essentials/navigation" },
        { title: "Snippets", href: "/essentials/reusable-snippets" },
        { title: "Settings", href: "/essentials/settings" }
      ]
    },
    {
      label: "Snippets",
      items: [
        { title: "Intro to Snippets", href: "/snippets/snippet-intro" }
      ]
    },
    {
      label: "Other Pages",
      items: [
        { title: "README", href: "/README" },
        { title: "Development Notes", href: "/development" },
        { title: "Introduction", href: "/introduction" },
        { title: "Quickstart", href: "/quickstart" }
      ]
    }
  ]
});
