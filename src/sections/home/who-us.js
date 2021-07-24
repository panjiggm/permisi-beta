/** @jsx jsx */
import { jsx, Box, Heading, Text, Container } from "theme-ui";
import UltimateFeature from "components/cards/ultimate-feature";

const data = [
  {
    id: 1,
    icon: "🏗️",
    title: "Jamstack Architecture",
    description: "Teknologi website kekinian yang stabil dan modern",
  },
  {
    id: 2,
    icon: "🚀",
    title: "Fast Performance",
    description: "Performa cepat, ringan, tanpa loading",
  },
  {
    id: 3,
    icon: "🎨",
    title: "Intuitive Design",
    description: "Tampilan user friendly dan enak dipandang",
  },
  {
    id: 4,
    icon: "🏆",
    title: "Easy Setup",
    description: `Mudah dioperisakan se-awam apapun kamu`,
  },
];

const WhoUs = () => {
  return (
    <Container>
      <Box sx={styles.heading}>
        <Heading sx={styles.title}>
          <span sx={styles.brand}>Permisi</span> para hadirin...
        </Heading>
        <Text as="p" sx={styles.description}>
          Kami adalah platform Jamstack pertama di Indonesia yang menyediakan{" "}
          <i>instant superset e-commerce</i> untuk kebutuhan penjualan produk
          bisnis/usaha kamu
        </Text>
      </Box>

      <Box sx={styles.features}>
        {data?.map((item) => (
          <UltimateFeature key={item.id} data={item} />
        ))}
      </Box>
    </Container>
  );
};

export default WhoUs;

const styles = {
  heading: {
    pt: [9, null, null, 10, 11, 11, 11],
    textAlign: "center",
    maxWidth: 580,
    margin: "0 auto 60px",
  },
  brand: {
    color: "primary",
  },
  title: {
    color: "heading",
    fontWeight: 500,
    fontSize: ["24px", "30px"],
    lineHeight: [1.25, 1.5],
    letterSpacing: "heading",
  },
  description: {
    color: "heading",
    fontSize: ["14px", "16px"],
    lineHeight: [1.85, 2.2],
    mt: "10px",
  },
  features: {
    gap: ["35px 60px", 60, 60, 40, 30, 60],
    pb: [12, null, null, null, 13, 15, 15, null],
    display: ["grid", "grid"],
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(2, 1fr)",
      "repeat(4, 1fr)",
    ],
  },
};
