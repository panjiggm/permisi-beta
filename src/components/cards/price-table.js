/** @jsx jsx */
import { jsx, Box, Button, Heading, Text } from "theme-ui";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import { rgba } from "polished";

const PriceTable = ({ price, isAnnual }) => {
  return (
    <Box
      sx={styles.priceTable}
      className={`priceCard ${price.isRecommended ? "recommended" : ""}`}>
      {price.isRecommended && (
        <Text sx={styles.recomendPack}>Direkomendasikan</Text>
      )}
      <Box sx={styles.header} className="priceHeader">
        <Heading as="h3" sx={styles.title}>
          {price.title}
        </Heading>
        <Text as="p" sx={styles.priceAmount}>
          IDR{" "}
          {isAnnual
            ? new Intl.NumberFormat("id-ID").format(price?.amount?.annual)
            : new Intl.NumberFormat("id-ID").format(price?.amount?.monthly)}
          {/* /mo */}
        </Text>
        <Text as="p" sx={styles.subtitle}>
          {price.subtitle}
        </Text>
      </Box>
      <Box as="ul" sx={styles.list}>
        {price?.features?.map((feat) => (
          <li key={feat.id} className={!feat.isAvailable ? "unavailable" : ""}>
            {feat.isAvailable ? (
              <span>
                <IoMdCheckmarkCircle sx={{ color: "primary" }} size="23px" />
              </span>
            ) : (
              <span>
                <IoIosCloseCircle color="#CED7E1" size="23px" />
              </span>
            )}
            <span>{feat.title}</span>
          </li>
        ))}
      </Box>
      <Box className="priceButton">
        <Button sx={styles.button} variant="primaryMd">
          {price.buttonText}
        </Button>
        {price.demo !== null ? (
          <a
            href={price.demo}
            target="_blank_"
            sx={styles.link}
            variant="primaryMd">
            Demo
          </a>
        ) : (
          <div />
        )}
      </Box>
    </Box>
  );
};

export default PriceTable;

const styles = {
  priceTable: {
    background: "#FFFFFF",
    borderRadius: 10,
    position: "relative",
    padding: ["30px 30px", null, null, null, "25px 30px 50px"],
    "&.recommended": {
      boxShadow: "0px 5px 30px rgb(252, 165, 165, 0.4)",
      padding: ["45px 30px", null, null, null, "45px 40px 70px"],
      mt: [6, null, null, 0],
      border: "1px solid #FECACA",
      button: {
        backgroundColor: "primary",
        color: "#FFFFFF",
        ":hover": {
          backgroundColor: "secondary",
        },
      },
    },
    margin: ["20px 10px", null, null, null, "4px 5px 7px"],
  },
  recomendPack: {
    backgroundColor: "secondary",
    padding: "2px 10px",
    color: "#FFFFFF",
    borderRadius: 7.5,
    top: -16,
    position: "absolute",
  },
  header: {
    borderBottom: `1px solid #E0E2E4`,
    pb: [6],
  },
  title: {
    fontWeight: 700,
    fontSize: 5,
    lineHeight: 1.31,
    letterSpacing: "-0.55px",
  },
  priceAmount: {
    color: "primary",
    fontWeight: 700,
    fontSize: "26px",
    lineHeight: 1.39,
    letterSpacing: "heading",
    mt: [2],
  },
  subtitle: {
    color: rgba("#343D48", 0.65),
    lineHeight: 1.62,
    maxWidth: 290,
    mt: [4],
  },
  list: {
    borderBottom: `1px solid #E0E2E4`,
    listStyle: "none",
    padding: 0,
    mt: [7],
    pb: [7],
    maxWidth: 340,
    li: {
      display: "flex",
      alignItems: "flex-start",
      fontSize: 16,
      lineHeight: 1.62,
      "+ li ": {
        mt: 4,
      },
      "span:first-of-type": {
        mr: "13px",
        mt: "5px",
      },
    },
    ".unavailable": {
      opacity: 0.5,
    },
  },
  button: {
    backgroundColor: rgba("#FFC059", 0.1),
    color: "primary",
    minHeight: [50, null, null, null, 50],
    px: 25,
    mt: [7],
    ":hover": {
      backgroundColor: "secondary",
      color: "white",
    },
  },
  link: {
    color: "secondary",
    mt: [7],
    ":hover": {
      backgroundColor: "primary",
      color: "white",
    },
  },
};
