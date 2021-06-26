import { useState } from "react";
import { Box, Container } from "theme-ui";
import PopularCard from "components/cards/popular-card";
import SectionHeading from "components/section-heading";
import FormRegister from "./FormRegister";
import { packageData } from "./dataPackage";

const Products = () => {
  const [packageSelect, setPackageSelect] = useState("Entry-Level");

  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Mulai berlangganan"
          description="Tunggu apa lagi"
        />
        {packageData.map((course, index) => (
          <Box sx={styles.popularCourse.col} key={index}>
            <PopularCard
              key={index}
              listData={course.list}
              expanded={course.expanded}
              starCount={course.starCount}
              title={course.title}
              reviewCount={course.reviewCount}
              watchCount={course.watchCount}
              icon={course.icon}
              setPackageSelect={setPackageSelect}
            />
          </Box>
        ))}
        <SectionHeading
          sx={styles.heading2}
          title="Daftar"
          description="Isi form berikut secara lengkap!"
        />
        <FormRegister pckgSelected={packageSelect} />
      </Container>
    </Box>
  );
};

export default Products;

const styles = {
  section: {
    backgroundColor: "#F9FAFC",
    pt: [175],
    pb: [150],
  },
  heading: {
    textAlign: "center",
    mb: 10,
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: "#858B91",
      fontSize: 3,
      m: ["10px auto", null, null, "0 auto"],
    },
  },
  heading2: {
    textAlign: "center",
    mt: 150,
    mb: 50,
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: "#858B91",
      fontSize: 3,
      m: ["10px auto", null, null, "0 auto"],
    },
  },
  popularCourse: {
    paddingBottom: ["100px"],
    "@media(max-width: 575px)": {
      paddingBottom: "60px",
    },
    blockTitle: {
      textAlign: "center",
      marginBottom: "60px",
      "@media(max-width: 575px)": {
        marginBottom: "30px",
      },
    },
    col: {},
  },
};
