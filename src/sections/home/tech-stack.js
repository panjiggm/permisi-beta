/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import SectionHeading from "components/section-heading";
import Tech from "components/cards/tech";
import ReactLogo from "assets/images/react.png";
import NextLogo from "assets/images/next-js.svg";
import VercelLogo from "assets/images/vercel.png";
import GithubLogo from "assets/images/github.png";
import AirtableLogo from "assets/images/airtable.png";
import CloudinaryLogo from "assets/images/cloudinary.png";
import ChakraLogo from "assets/images/chakra.png";
import NodeLogo from "assets/images/nodejs.png";

const services = [
  {
    title: "React",
    img: ReactLogo,
  },
  {
    title: "NextJS",
    img: NextLogo,
  },
  {
    title: "Vercel",
    img: VercelLogo,
  },
  {
    title: "Github",
    img: GithubLogo,
  },
  {
    title: "Airtable",
    img: AirtableLogo,
  },
  {
    title: "Cloudinary",
    img: CloudinaryLogo,
  },
  {
    title: "Chakra UI",
    img: ChakraLogo,
  },
  {
    title: "NodeJS",
    img: NodeLogo,
  },
];

const TexchStack = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          title="Teknologi yang kami gunakan"
          description="Semuanya demi menunjang bisnis kamu"
        />
        <Box sx={styles.grid}>
          {services.map((service, i) => (
            <Tech key={i} service={service} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TexchStack;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 12],
    pb: [12, null, null, null, null, 15],
  },
  grid: {
    gap: [3, null, null, 4],
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: [
      "repeat(2, 1fr)",
      null,
      null,
      "repeat(3, 1fr)",
      null,
      "repeat(4, 1fr)",
      "repeat(4, 300px)",
    ],
  },
};
