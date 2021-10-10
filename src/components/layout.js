/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

import { BaseStyles } from "theme-ui";

const Container = (props) => (
  <div
    {...props}
    sx={{
      maxWidth: "container",
      mx: "auto",
      px: 3,
    }}
  />
);

export default function Layout({ children }) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <BaseStyles>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          variant: "layout.root",
        }}
      >
        <header
          sx={{
            width: "100%",
            variant: "layout.header",
          }}
        >
          <Container>
            <h4>{siteMetadata.title}</h4>
          </Container>
        </header>
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
          <Container>{siteMetadata.title}</Container>
        </footer>
      </div>
    </BaseStyles>
  );
}
