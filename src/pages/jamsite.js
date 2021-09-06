import { ThemeProvider } from "theme-ui";
import theme from "theme";
import Layout from "components/layout";
import SEO from "components/seo";
import JamsiteHero from "sections/jamsite/jamsite-hero";
import PackageJamsite from "sections/jamsite/package-jamsite";
import ForEveryone from "sections/jamsite/for-everyone";
import JamsitePricing from "sections/jamsite/jamsite-pricing";

const JamSite = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="JamSite | Permisi"
          description="Custom Jamstack website by request"
        />
        <JamsiteHero />
        <ForEveryone />
        <JamsitePricing />
      </Layout>
    </ThemeProvider>
  );
};

export default JamSite;
