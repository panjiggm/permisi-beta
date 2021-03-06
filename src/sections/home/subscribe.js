/** @jsx jsx */
import Link from "next/link";
import { jsx, Box, Container, Button } from "theme-ui";
import SectionHeading from "components/section-heading";

const Subscribe = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Ada pertanyaan?"
          description="Kami dengan senang hati menjawab semua pertanyaan kamu 😊"
        />
        <Box css={{ display: "flex", justifyContent: "center" }}>
          <Link href="/register">
            <Button>Hubungi Kami</Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Subscribe;

const styles = {
  section: {
    backgroundColor: "#353448",
    mt: [50, null, null, null, 100],
    pt: [9, null, null, null, 10, 13, null],
    pb: [9, null, null, null, 11, 14, null],
  },
  heading: {
    // mb: [7, null, null, 8, 9, 10],
    h2: {
      color: "white",
      fontSize: [6, null, null, 8],
    },
    p: {
      color: "#858B91",
      fontSize: [2, null, null, 3],
      m: ["15px auto 0", null, null, "10px auto 0"],
    },
  },
};
