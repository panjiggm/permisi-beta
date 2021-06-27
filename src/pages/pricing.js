import { ThemeProvider } from "theme-ui";
import theme from "theme";
import Layout from "components/layout";
import SEO from "components/seo";
import Package from "sections/pricing/package";
import FaqPrice from "sections/pricing/faq-price";

const Pricing = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Harga | Beliyuk" description="Helo kami adalah Beliyuk" />
        <Package />
        <FaqPrice />
      </Layout>
    </ThemeProvider>
  );
};

export default Pricing;
