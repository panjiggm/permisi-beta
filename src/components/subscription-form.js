/** @jsx jsx */
import { useState, useEffect } from "react";
import { jsx, Flex, Input, Button, Label } from "theme-ui";
import { useSnackbar } from "react-simple-snackbar";

const SubscriptionForm = ({ buttonLabel, ...props }) => {
  const [openSnackbar] = useSnackbar();
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setId(Date.now());
  }, []);

  const handleSubscribe = async () => {
    setLoading(true);

    try {
      await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ fields: { email } }),
        headers: { "Content-Type": "application/json" },
      });

      openSnackbar("Terimakasih telah Subscribe!");
      setLoading(false);
      setEmail("");
    } catch (error) {
      console.log("err register", error);
      setLoading(false);
    }
  };

  return (
    <Flex sx={styles.form} {...props}>
      <Label htmlFor={`email-${id}`} variant="styles.srOnly">
        Email
      </Label>
      <Input
        type="email"
        id={`email-${id}`}
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={handleSubscribe}>
        {loading ? "Mengirim..." : "Subscibe"}
      </Button>
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
