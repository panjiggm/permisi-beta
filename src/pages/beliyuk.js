import { ThemeProvider } from "theme-ui";
import theme from "theme";
import Layout from "components/layout";
import SEO from "components/seo";

const Beliyuk = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Beliyuk | Permisi"
          description="Minimum superset e-commerce"
        />
        <h1>Beliyuk</h1>
      </Layout>
    </ThemeProvider>
  );
};

export default Beliyuk;
