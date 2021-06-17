/** @jsx jsx */
import { jsx, Text } from "theme-ui";
import { Link } from "components/link";
// import Image from "next/image";
// import logo from "assets/images/permisi-logo.png";

export default function Logo({ isWhite, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      {/* <LogoSvg isWhite={isWhite} /> */}
      <Text as="h1" sx={styles.logoText}>
        Permisi
      </Text>
      {/* <Image src={logo} height="75" width="100%" /> */}
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
