import { ThemeProvider } from "theme-ui";
import theme from "theme";
import Layout from "components/layout";
import SEO from "components/seo";
import Products from "sections/getting-started/Products";

const Register = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Daftar | Beliyuk"
          description="Daftar dan berlangganan Beliyuk"
        />
        <Products />
      </Layout>
    </ThemeProvider>
  );
};

export default Register;
