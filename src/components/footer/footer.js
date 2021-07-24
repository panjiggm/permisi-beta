/** @jsx jsx */
import { jsx, Flex, Box, Text, Container } from "theme-ui";
import { rgba } from "polished";
// import { Link } from "components/link";
import Link from "next/link";
import Logo from "components/logo";

const menuItems = [
  {
    path: "",
    label: "Home",
  },
  {
    path: "/tos",
    label: "Terms & Condition",
  },
  {
    path: "/pricing",
    label: "Pricing",
  },
];

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container>
        <Flex sx={styles.footerInner}>
          <Flex sx={styles.copyright}>
            <Logo isWhite />
            <Text as="span">
              &copy; Copyright {new Date().getFullYear()} Permisi
            </Text>
          </Flex>
          <Flex as="ul" sx={styles.footerNav}>
            {menuItems?.map((item, index) => (
              <li key={index}>
                <Link href={item?.path}>
                  <a>{item?.label}</a>
                </Link>
              </li>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    backgroundColor: "#2B293E",
    pt: [6],
    pb: [6],
  },
  footerInner: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: ["column", null, null, null, "row"],
  },
  copyright: {
    alignItems: "center",
    flexDirection: ["column", null, null, null, "row"],
    span: {
      color: rgba("white", 0.7),
      fontSize: 1,
      lineHeight: "18px",
      ml: [null, null, null, null, 3],
      mt: [3, null, null, null, 0],
    },
  },
  footerNav: {
    listStyle: "none",
    // flexDirection: ['column', null, null, null, 'row'],
    m: ["25px 0 0", null, null, null, 0],
    p: 0,
    li: {
      "+ li": {
        ml: [3, null, null, null, 4],
      },
      a: {
        color: "white",
        cursor: "pointer",
        textDecoration: "none",
        fontSize: [1, null, null, 2],
      },
    },
  },
};
