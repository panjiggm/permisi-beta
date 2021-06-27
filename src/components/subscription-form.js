/** @jsx jsx */
import { useState, useEffect } from "react";
import { jsx, Flex, Input, Button, Label, Text } from "theme-ui";
import Link from "next/link";

const SubscriptionForm = ({ buttonLabel, ...props }) => {
  const [id, setId] = useState("");
  const [yourBrand, setYourBrand] = useState("");

  useEffect(() => {
    setId(Date.now());
  }, []);

  return (
    <Flex as="form" sx={styles.form} {...props}>
      <Text sx={styles.text}>beliyuk.co/</Text>
      <Label htmlFor={`email-${id}`} variant="styles.srOnly">
        Email
      </Label>
      <Input
        type="email"
        id={`email-${id}`}
        placeholder="brandkamu"
        value={yourBrand}
        onChange={(e) => setYourBrand(e.target.value)}
      />
      <Link href="/register">
        <Button>Coba Yuk!</Button>
      </Link>
    </Flex>
  );
};

export default SubscriptionForm;

const styles = {
  text: {
    mr: 3,
    fontSize: 18,
  },
  form: {
    alignItems: "center",
    input: {
      flexGrow: 1,
      p: ["0 20px", null, null, null, "0 25px"],
      minHeight: [60],
      height: "auto",
      width: "auto",
    },
    button: {
      ml: [3],
    },
  },
};
