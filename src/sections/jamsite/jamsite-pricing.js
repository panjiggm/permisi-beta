/** @jsxRuntime classic */
/** @jsx jsx */
import { keyframes } from "@emotion/core";
import { jsx, Box, Container, Flex, Text } from "theme-ui";
import SectionHeading from "components/section-heading";
import ItemJamprice from "components/cards/item-jamprice";

const data = [
  {
    id: 1,
    title: "🐟 Pemula",
    subtitle:
      "Perkenalkan brand kamu kepada dunia, dengan landing page dalam beberapa halaman yang dapat disesuaikan.",
    amount: "Landing Page",
    isRecommended: false,
  },
  {
    id: 2,
    title: "🐬 Pemain",
    subtitle:
      "Landing page sebagai informasi utama brand kamu, dan blog sebagai daya tariknya.",
    amount: "Landing Page & Blog",
    isRecommended: false,
  },
  {
    id: 3,
    title: "🦈 Pemangsa",
    subtitle:
      "Wadah yang tepat untuk produk kamu dengan fitur marketplace seperti cart, checkout, delivery, dll.",
    amount: "E-commerce",
    isRecommended: false,
  },
  {
    id: 4,
    title: "🐋 Penguasa",
    subtitle:
      "Memiliki website e-commerce disertai blog didalamnya adalah teknik jualan yang haqiqi.",
    amount: "E-commerce & Blog",
    isRecommended: false,
  },
];

const JamsitePricing = () => {
  return (
    <Box as="section" id="pricing" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Temukan perencanaan yang tepat untukmu"
          description="Pilihan harga yang terjangkau dan kompetitif"
        />
        <Box sx={styles.priceWrapper}>
          {data?.map((price, index) => (
            <ItemJamprice price={price} key={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default JamsitePricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  section: {
    backgroundColor: "#F9FAFC",
    pt: [175],
    pb: [150],
  },
  heading: {
    mb: 3,
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: "#858B91",
      fontSize: 3,
      m: ["10px auto", null, null, "0 auto"],
    },
  },
  priceWrapper: {
    display: ["block", null, null, "flex"],
    alignItems: "center",
    justifyContent: "center",
    ".priceCard": {
      ".priceHeader": {
        animation: `${fadeIn} 0.8s linear`,
      },
      "ul > li": {
        animation: `${fadeIn2} 0.7s linear`,
      },
      ".priceAmount": {
        animation: `${fadeIn} 0.9s linear`,
      },
      ".priceButton": {
        animation: `${fadeIn2} 0.7s linear`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },
    },
  },
};
