import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/home/banner";
import WhoUs from "sections/home/who-us";
import Support from "sections/home/support";
import PremiumFeature from "sections/home/premium-feature";
import AppFeature from "sections/home/app-feature";
import Dashboard from "sections/home/dashboard";
import Pricing from "sections/home/pricing";
import Testimonials from "sections/home/testimonials";
import Subscribe from "sections/home/subscribe";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Home | Permisi" description="Excusme guys!" />
        <Banner />
        <WhoUs />
        <PremiumFeature />
        {/* <Support /> */}
        <AppFeature />
        {/* <Dashboard />
        <Pricing />
        <Testimonials /> */}
        <Subscribe />
      </Layout>
    </ThemeProvider>
  );
}
