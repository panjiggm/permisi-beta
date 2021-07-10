/** @jsx jsx */
import { jsx, Text } from "theme-ui";
import { Link } from "components/link";
import logo from "assets/images/Logo-03.png";

export default function Logo({ isWhite, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <img src={logo} style={{ objectFit: "fill", height: 60 }} />
      {/* <Text sx={styles.logoText}>Beliyuk</Text> */}
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: "center",
    cursor: "pointer",
    display: "inline-flex",
    svg: {
      height: "auto",
      width: [128, null, "100%"],
    },
  },
  logoText: {
    color: "primary",
    fontWeight: 700,
    fontSize: 30,
  },
};
