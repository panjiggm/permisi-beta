import { ThemeProvider } from "theme-ui";
import theme from "theme";
import Layout from "components/layout";
import SEO from "components/seo";
import BeliyukHero from "sections/beliyuk/beliyuk-hero";
import PremiumFeature from "sections/beliyuk/premium-feature";
import AppFeature from "sections/beliyuk/app-feature";
import Package from "sections/beliyuk/package";
import RegisterBeliyuk from "sections/beliyuk/register-beliyuk";
import FaqPrice from "sections/beliyuk/faq-price";

const Beliyuk = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Beliyuk | Permisi"
          description="Minimum superset e-commerce"
        />
        <BeliyukHero />
        <PremiumFeature />
        <AppFeature />
        <Package />
        <FaqPrice />
        <RegisterBeliyuk />
      </Layout>
    </ThemeProvider>
  );
};

export default Beliyuk;
