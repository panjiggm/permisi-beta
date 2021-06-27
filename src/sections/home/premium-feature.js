/** @jsx jsx */
import { jsx, Box, Container, Grid } from "theme-ui";
import SectionHeading from "components/section-heading";
import Accordion from "components/accordion/accordion";
import Image from "components/image";
import midrange from "assets/images/midrange.png";
// import midrange from "assets/images/messenger.png";
import emoji from "assets/images/icons/emoji-2.png";

const data = [
  {
    title: "Kelola konten produk kamu",
    contents: <div>Tambah produk item kamu sesuka hati sebanyak mungkin</div>,
  },
  {
    title: "Langsung pesan via WhtasApp? Bisa!",
    contents: (
      <div>
        Sebelum client memutuskan untuk memebeli produk kamu, client bisa
        tanya-tanya dulu ke kamu supaya lebih yakin
      </div>
    ),
  },
  {
    title: "Jualan semudah menjentikan jari",
    contents: (
      <div>
        Miliki link ajaib atau domain untuk wesite kamu sendiri, kamu dapat
        dengan mudah dalam mempromosikan.
      </div>
    ),
  },
];

const PremiumFeature = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <Box as="figure" sx={styles.illustration}>
            <Image src={midrange} alt="midrange" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              emoji={emoji}
              sx={styles.heading}
              title="Temukan fitur keren yang dapat membuat kamu berkata wow"
              description="Dengan 0 Rupiah kamu bisa punya website untuk jualan dengan fitur dan tampilan yang keren"
            />
            <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
            </Box>
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default PremiumFeature;

const styles = {
  section: {
    pt: [6, null, null, 11, 13, 15],
    pb: [6, null, null, null, 7, 9, 11, null],
  },
  grid: {
    alignItems: "center",
    gridTemplateColumns: [
      "1fr",
      null,
      null,
      null,
      "1fr 431px",
      "1fr 530px",
      "1fr 550px",
    ],
  },
  heading: {
    textAlign: ["left", null, null, "center", "left"],
    ml: [null, null, null, "auto"],
    maxWidth: [null, null, null, 520, 660],
    h2: {
      fontSize: [null, null, null, 10, 8, 10, 40],
      img: {
        maxWidth: [24, null, null, 30, 25, null, "100%"],
        top: ["4px", "8px", null, null, "4px", "8px"],
      },
    },
    p: {
      fontSize: [null, null, null, 2],
    },
  },
  illustration: {
    mb: [-6, null, null, -8, 0],
  },
  accordionGroup: {
    m: [null, null, null, "0 auto", "unset"],
    maxWidth: [null, null, null, 600, "none"],
  },
};
