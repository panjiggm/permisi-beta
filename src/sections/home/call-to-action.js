import Link from "next/link";
import { Box, Container, Flex, Text, Heading } from "theme-ui";
import { Link as BtnLink } from "components/link";
import SectionHeading from "components/section-heading";

// import callImage from 'assets/call-image.png';

const CallToAction = () => {
  return (
    <Box as="section" sx={styles.callToAction}>
      <Container>
        <SectionHeading
          title="Produk unggulan kami"
          description="Pilih sesuai kebutuhan bisnis kamu"
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.content}>
            <Text as="span">Beliyuk</Text>
            <Heading as="h3">A minimum superset e-commerce</Heading>
            <Text as="p">
              Template e-commerce dengan 3 jenis pilihan paket untuk kebutuhan
              mengiklankan atau mengkatalogkan produk kamu supaya mudah dalam
              menjualnya. Terdapat fitur e-commerce seperti order, cart,
              checkout, delivery options, dll
            </Text>
            <Link href="/beliyuk">
              <BtnLink path="#" sx={styles.button}>
                <a>Selengkapnya</a>
              </BtnLink>
            </Link>
          </Box>
          <Box sx={styles.content}>
            <Text as="span">Jam-Site</Text>
            <Heading as="h3">Custom Jamstack website by request</Heading>
            <Text as="p">
              Kami membuat website atau aplikasi sesuai permintaan kamu,
              tentunya dengan teknologi Jamstack sebagai keunggulan kami. Kami
              akan bantu mulai dari design (jika belum ada) hingga menjadi
              produk yang siap mengudara
            </Text>
            <Link href="/beliyuk">
              <BtnLink path="#" sx={styles.button}>
                <a>Selengkapnya</a>
              </BtnLink>
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CallToAction;

const styles = {
  callToAction: {
    mt: ["-20px", null, null, null, "0"],
    py: ["50px", null, null, null, "110px", null, "50px"],
  },
  flex: {
    flexWrap: "wrap",
    justifyContent: "center",
  },
  content: {
    flex: ["0 0 100%", null, null, null, "0 0 48.5%"],
    textAlign: "center",
    pt: ["30px", null, null, null, "70px"],
    px: [null, null, null, null, 5],
    maxWidth: ["100%", null, null, "80%", "100%"],
    mx: ["auto", null, null, null, "0"],
    mb: ["30px", null, null, null, "0"],
    span: {
      fontSize: "18px",
      fontWeight: 700,
      color: "primary",
      display: "block",
      lineHeight: 1,
    },
    h3: {
      color: "#273c75",
      fontWeight: 700,
      // textAlign: "left",
      fontSize: ["23px", null, null, null, "26px", "32px", "40px"],
      maxWidth: ["100%", null, null, null, null, "90%", "100%"],
      lineHeight: 1.36,
      letterSpacing: "-1.5px",
      mt: "20px",
      mb: "30px",
    },
    p: {
      color: "#02073E",
      textAlign: "justify",
      fontSize: ["16px", null, null, "18px"],
      lineHeight: ["2", null, null, 2.33],
      mb: "30px",
    },
  },
  button: {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundColor: "primary",
    color: "#fff",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: 700,
    p: "6.5px 19px",
    mt: [null, null, null, null, 30],
    letterSpacing: "-0.16px",
    transition: "all 500ms ease",
    cursor: "pointer",
    "&:hover": {
      opacity: 0.8,
    },
  },
};
