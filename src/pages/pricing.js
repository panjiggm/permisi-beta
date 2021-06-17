import {
  ThemeProvider,
  jsx,
  Box,
  Flex,
  Container,
  Heading,
  Text,
} from "theme-ui";
import theme from "theme";
import Layout from "components/layout";
import SEO from "components/seo";

const Pricing = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Pricing | Permisi" description="Helo We are Permisi" />
        <h4>Pricing</h4>
      </Layout>
    </ThemeProvider>
  );
};

export default Pricing;
