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
import Testimonials from "sections/home/testimonials";
import Subscribe from "sections/home/subscribe";
import TexchStack from "sections/home/tech-stack";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Home | Permisi" description="Selamat datang di Permisi!" />
        <Banner />
        {/* <Support /> */}
        <WhoUs />
        <TexchStack />
        <PremiumFeature />
        <AppFeature />
        {/* <Dashboard />
        <Testimonials /> */}
        <Subscribe />
      </Layout>
    </ThemeProvider>
  );
}
