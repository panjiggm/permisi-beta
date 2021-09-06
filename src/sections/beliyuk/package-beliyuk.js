/** @jsx jsx */
import { useState } from "react";
import { keyframes } from "@emotion/core";
import { jsx, Box, Container, Flex, Text } from "theme-ui";
import SectionHeading from "components/section-heading";
import PriceTable from "components/cards/price-table";
import Switch from "components/switch";

const data = [
  {
    id: 1,
    title: "💩 Entry Level",
    subtitle:
      "Untuk kamu yang pingin coba-coba dulu. Kalo udah nyaman, hubungi kami ya :)",
    amount: {
      monthly: 0,
      annual: 0,
    },
    isRecommended: false,
    buttonText: "Gratis",
    demo: "https://http.cat/",
    features: [
      {
        id: 1,
        isAvailable: true,
        title: "Pesan via WhatsApp",
      },
      {
        id: 2,
        isAvailable: true,
        title: `Unlimited produk`,
      },
      {
        id: 3,
        isAvailable: false,
        title: `Produk detail`,
      },
      {
        id: 4,
        isAvailable: false,
        title: `Custom domain`,
      },
      {
        id: 5,
        isAvailable: false,
        title: `Fitur e-commerce (like, add to cart, checkout, delivery options, dll)`,
      },
      {
        id: 6,
        isAvailable: false,
        title: `Pembayaran via Bank atau E-wallet`,
      },
    ],
  },
  {
    id: 2,
    title: "😺 Mid-Range",
    subtitle:
      "Seharga semangkok Seblak, makin terpercaya dengan punya domain sendiri",
    amount: {
      monthly: 19000,
      annual: 19000 * 12 - 10,
    },
    isRecommended: true,
    buttonText: "Mulai Sekarang",
    demo: "https://kumpul-rasa.vercel.app/",
    features: [
      {
        id: 1,
        isAvailable: true,
        title: "Pesan via WhatsApp",
      },
      {
        id: 2,
        isAvailable: true,
        title: `Unlimited produk`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Produk detail`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Custom domain`,
      },
      {
        id: 5,
        isAvailable: false,
        title: `Fitur e-commerce (like, add to cart, checkout, delivery options, dll)`,
      },
      {
        id: 6,
        isAvailable: false,
        title: `Pembayaran via Bank atau E-wallet`,
      },
    ],
  },
  {
    id: 3,
    title: "🤖 Flagship",
    subtitle:
      "Brand kamu udah bagus? tapi belum punya web resminya, berati kamu cocoknya disini",
    amount: {
      monthly: 49000,
      annual: 49000 * 12 - 10,
    },
    isRecommended: false,
    buttonText: "Segera Hadir",
    demo: null,
    features: [
      {
        id: 1,
        isAvailable: true,
        title: "Pesan via WhatsApp",
      },
      {
        id: 2,
        isAvailable: true,
        title: `Unlimited produk`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Produk detail`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Custom domain`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Fitur e-commerce (like, add to cart, checkout, delivery options, dll)`,
      },
      {
        id: 6,
        isAvailable: true,
        title: `Pembayaran via Bank atau E-wallet`,
      },
    ],
  },
];

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handlePlan = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <Box as="section" id="pricing" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Temukan perencanaan yang tepat untukmu"
          description="Pilihan harga yang terjangkau dan kompetitif"
        />
        <Flex sx={styles.priceSwitcher}>
          <Text as="span">Setiap bulan</Text>
          <Switch isMonthly={isMonthly} handlePlan={handlePlan} />
          <Text as="span">Setiap tahun</Text>
        </Flex>
        <Box sx={styles.priceWrapper}>
          {data?.map((price, index) => (
            <PriceTable
              price={price}
              isAnnual={!isMonthly}
              key={`${isMonthly}-${index}`}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;

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
  priceSwitcher: {
    display: "flex",
    alignItems: "center",
    margin: [
      "35px auto 50px",
      null,
      null,
      "0 auto 30px",
      null,
      "60px auto 50px",
    ],
    maxWidth: 300,
    p: 2,
    span: {
      color: "text",
      fontWeight: 500,
      outline: 0,
      p: 0,
      minHeight: "auto",
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
