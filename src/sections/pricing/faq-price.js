/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";

import Accordion from "components/accordion/accordion";
import SectionHeading from "components/section-heading";

const data = [
  {
    title: "Apakah harga tersebut sudah termasuk domain?",
    contents: (
      <div>
        Harga tersebut <b>belum</b> termasuk domain. Jika kamu ingin custom
        domain, maka kami akan bantu kamu untuk prosesnya.
      </div>
    ),
  },
  {
    title: "Pemayaran untuk berlangganan melalui apa?",
    contents: <div>Menggunakan transfer bank atau e-wallet (Gopay, OVO).</div>,
  },
  {
    title: `Apakah ada biaya tambahan ketika custom domain?`,
    contents: (
      <div>Untuk bisaya jasanya GRATIS yaaa. Sekali lagi, GRATIS 😇</div>
    ),
  },
  {
    title: `Bagaimana jika tidak membayar biaya langganan?`,
    contents: (
      <div>
        Kami akan memperingatkan kamu, dan jika kamu masih belum bayar, maka
        dalam kurun waktu 3 hari kedepanya website kamu akan kami takedown
      </div>
    ),
  },
];

const FaqPrice = () => {
  return (
    <Box as="section" id="pricing" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Frequently Asked Questions"
        />
        <Box sx={styles.accordionGroup}>
          <Accordion items={data} />
        </Box>
      </Container>
    </Box>
  );
};

export default FaqPrice;

const styles = {
  section: {
    backgroundColor: "#FFF",
    pt: [13],
    pb: [15],
  },
  heading: {
    textAlign: "center",
    ml: [null, null, null, "auto"],
    mb: [9],
    maxWidth: [null, null, null, 520, 660],
    h2: {
      fontSize: [null, null, null, 10, 8, 10, 30],
      img: {
        maxWidth: [24, null, null, 30, 25, null, "100%"],
        top: ["4px", "8px", null, null, "4px", "8px"],
      },
    },
    p: {
      fontSize: [null, null, null, 2],
    },
  },
  accordionGroup: {
    m: [null, null, null, "0 auto", "unset"],
    maxWidth: [null, null, null, 600, "none"],
  },
};
