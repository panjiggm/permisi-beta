import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/home/banner";
import WhoUs from "sections/home/who-us";
import Jamstack from "sections/home/jamstack";
import Subscribe from "sections/home/subscribe";
import TexchStack from "sections/home/tech-stack";
import CallToAction from "sections/home/call-to-action";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Home | Permisi" description="Selamat datang di Permisi!" />
        <Banner />
        <WhoUs />
        <Jamstack />
        <TexchStack />
        <CallToAction />
        <Subscribe />
      </Layout>
    </ThemeProvider>
  );
}
