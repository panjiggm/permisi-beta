import { Box, Container } from "theme-ui";
import PopularCard from "components/cards/popular-card";
import SectionHeading from "components/section-heading";

const popularCourseData = [
  {
    title: "Entry-Level",
    reviewCount: "1.0 (Standar)",
    watchCount: "0 pengguna",
    icon: "💩",
    starCount: 1,
    expanded: true,
    list: [
      {
        content: "Pesan via WhatsApp",
      },
      {
        content: "Unlimited produk item",
      },
    ],
  },
  {
    title: "Midrange",
    reviewCount: "3.0 (Lumayan)",
    watchCount: "1 pengguna",
    icon: "😺",
    starCount: 3,
    expanded: false,
    list: [
      {
        content: "Pesan via WhatsApp",
      },
      {
        content: "Unlimited produk item",
      },
      {
        content: "Produk detail",
      },
      {
        content: "Custom domain",
      },
    ],
  },
  {
    title: "Flagship",
    reviewCount: "5.0 (Greget)",
    watchCount: "0 pengguna",
    icon: "🤖",
    starCount: 5,
    expanded: false,
    list: [
      {
        content: "Pesan via WhatsApp",
      },
      {
        content: "Unlimited produk item",
      },
      {
        content: "Produk detail",
      },
      {
        content: "Custom domain",
      },
      {
        content:
          "Fitur lainya (like, add to cart, checkout, delivery options, dll)",
      },
      {
        content: "Pembayaran via Bank atau E-wallet",
      },
    ],
  },
];

const Products = () => {
  return (
    <Box as="section" id="courses" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Mulai berlangganan"
          description="Tunggu apa lagi"
        />
        {popularCourseData.map((course, index) => (
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
            />
          </Box>
        ))}
        <SectionHeading
          sx={styles.heading2}
          title="Daftar"
          description="Isi form berikut secara lengkap!"
        />
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
    mt: 150,
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
