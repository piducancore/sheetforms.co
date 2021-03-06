/** @jsx jsx */
import { jsx, Themed, Container } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

import GitHub from "./github-corner";

export default function Layout({ children }) {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          repo
        }
      }
    }
  `);
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        variant: "layout.root",
      }}
    >
      <main
        sx={{
          width: "100%",
          flex: "1 1 auto",
          variant: "layout.main",
        }}
      >
        <Container>{children}</Container>
      </main>
      <footer
        sx={{
          width: "100%",
          variant: "layout.footer",
        }}
      >
        <Container>
          <Themed.h4>{site.siteMetadata.title}</Themed.h4>Built with <Themed.a href="https://www.gatsbyjs.com">Gatsby</Themed.a> and{" "}
          <Themed.a href="https://www.vercel.com">Vercel</Themed.a>.
        </Container>
      </footer>
      <GitHub repo={site.siteMetadata.repo} />
    </div>
  );
}
