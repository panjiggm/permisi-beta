/** @jsx jsx */
import { jsx, Box, Grid, Flex, Container, Image, Text } from "theme-ui";
import SectionHeading from "components/section-heading";
import { LearnMore } from "components/link";
// import app from "assets/images/jamstack.png";
import app from "assets/images/jamstack-txt.png";
// import app from "assets/images/illustration-2.png";
import check from "assets/images/icons/icon-circle-white.png";

const data = [
  {
    id: 1,
    label: "Better Performance",
  },
  {
    id: 2,
    label: "Higher Security",
  },
  {
    id: 3,
    label: "Cheaper, Easier Scaling",
  },
  {
    id: 4,
    label: "Better Developer Experience",
  },
];

const Jamstack = () => {
  return (
    <section sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <Box sx={styles.rightContent}>
            <SectionHeading
              // emoji={emoji}
              sx={styles.heading}
              // title="Built in one app to make instant reply with in lowest minutes"
              title="Apa itu Jamstack?"
              description="Cara modern untuk membangun Situs Web dan Aplikasi yang memberikan kinerja jauh lebih baik"
            />
            <Box sx={styles.features}>
              {data?.map(({ id, label }) => (
                <Flex key={id} as="span" sx={{ alignItems: "flex-start" }}>
                  <Image src={check} width="22" alt="check icon" />
                  <Text as="span">{label}</Text>
                </Flex>
              ))}
            </Box>
            <LearnMore
              sx={styles.more}
              label="Selengkapnya"
              path="https://jamstack.org/"
            />
          </Box>
          <Box sx={styles.illustration}>
            <Image src={app} alt="workHard" />
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default Jamstack;

const styles = {
  section: {
    py: [10, 10, 10, 13, 11, 8, 13],
    pb: [8, null, null, 11, 0],
    backgroundColor: "primary",
  },
  grid: {
    gap: [0, 0, 0, 0, 10, 30],
    display: ["flex", null, null, null, "grid"],
    flexDirection: ["column-reverse", null, null, "column", "row"],
    gridTemplateColumns: ["0.9fr 1.1fr"],
    alignItems: "center",
  },
  heading: {
    maxWidth: ["auto", null, null, "495px", "auto"],
    textAlign: ["center", null, null, null, "left"],
    mb: ["20px"],
    ml: [0],
    h2: {
      color: "#FEF2F2",
      fontSize: ["24px", null, null, "36px", "31px", 10, 40],
      lineHeight: [1.33, 1.33, 1.26, null, 1.5, 1.26],
      letterSpacing: "-1px",
      letterSpacing: "-1px",
    },
    img: {
      maxWidth: [24, null, null, 30, 25, null, "100%"],
      top: ["4px", "8px", null, null, "4px", "8px"],
      "@media screen and (min-width: 1441px) and (max-width:1600px)": {
        maxWidth: 35,
      },
    },
    p: {
      maxWidth: 430,
      color: "#FEF2F2",
    },
  },
  features: {
    columnCount: [1, 2],
    lineHeight: 2.81,
    ml: ["20px", 0],
    mt: [null, null, null, 6, 0],
    img: {
      mr: "10px",
      mt: "11px",
    },
    "+ a": {
      mt: "25px",
      ml: ["20px", 0],
    },
    span: {
      color: "#FEF2F2",
    },
  },
  more: {
    color: "#7F1D1D",
  },
  illustration: {
    // mb: [0, null, null, null, "-150px", "-260px"],
    // mt: [0],
    // zIndex: "-1",
    img: {
      display: ["block", "none", null, null, "block"],
    },
    // "@media screen and (max-width: 767px)": {
    //   background: `transparent url(${app}) no-repeat center top / cover`,
    //   width: "100%",
    //   minHeight: 310,
    //   marginBottom: 40,
    // },
  },
};
