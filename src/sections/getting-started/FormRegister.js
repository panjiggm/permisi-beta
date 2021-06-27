import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  Box,
  Label,
  Input,
  Select,
  Checkbox,
  Button,
  Text,
  Alert,
  Close,
} from "theme-ui";

const FormRegister = () => {
  // ========= PATTERN =========
  const pattern = {
    email:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /^0\d{9,12}/g,
  };
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const domainWatch = watch("domain", false);
  const packageWatch = watch("package", "Entry-Level");

  const onRegister = async (fields) => {
    setLoading(true);

    try {
      await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ fields }),
        headers: { "Content-Type": "application/json" },
      });

      reset();
      setSuccess(true);

      setLoading(false);
    } catch (error) {
      console.log("err register", error);
      setLoading(false);
    }
  };

  return (
    <Box
      as="form"
      id="formReg"
      sx={styles.section}
      onSubmit={handleSubmit(onRegister)}>
      <Box sx={styles.nameEmail} mb={3}>
        <Box>
          <Label htmlFor="full_name">Nama Lengkap</Label>
          <Input
            name="full_name"
            id="full_name"
            sx={styles.form}
            {...register("full_name", { required: true, minLength: 3 })}
          />
          <Text sx={styles.errText}>
            {errors.full_name?.type === "required" &&
              "Nama lengkap wajib diisi"}
            {errors.full_name?.type === "minLength" &&
              "Nama lengkap minimal 3 karakter"}
          </Text>
        </Box>
        <Box>
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            id="email"
            sx={styles.form}
            {...register("email", { required: true, pattern: pattern.email })}
          />
          <Text sx={styles.errText}>
            {errors.full_name?.type === "required" && "Email wajib diisi"}
            {errors.full_name?.type === "pattern" && "Email harus sesuai"}
          </Text>
        </Box>
      </Box>
      <Box sx={styles.nameEmail} mb={3}>
        <Box>
          <Label htmlFor="phone">No Hape/Whatsapp</Label>
          <Input
            type="phone"
            name="phone"
            id="phone"
            sx={styles.form}
            {...register("phone", { required: true, pattern: pattern.phone })}
          />
          <Text sx={styles.errText}>
            {errors.full_name?.type === "required" && "Nomor hape wajib diisi"}
            {errors.full_name?.type === "pattern" && "Nomor hape harus sesuai"}
          </Text>
        </Box>
        <Box>
          <Label htmlFor="merchant">Nama Toko/Jasa/Usaha</Label>
          <Input
            {...register("merchant", { required: true })}
            type="merchant"
            name="merchant"
            id="merchant"
            sx={styles.form}
          />
          <Text sx={styles.errText}>
            {errors.full_name?.type === "required" &&
              "Nama Toko/Jasa/Usaha wajib diisi"}
          </Text>
        </Box>
      </Box>
      <Label htmlFor="package">Paket</Label>
      <Select
        name="package"
        id="package"
        mb={3}
        sx={styles.form}
        {...register("package", { required: true })}>
        <option value="Entry-Level">Entry-Level</option>
        <option value="Midrange">Midrange</option>
        <option value="Flagship">Flagship</option>
      </Select>
      {packageWatch !== "Entry-Level" && (
        <Box>
          <Label mb={3}>
            <Checkbox {...register("domain")} />
            Custom domain
          </Label>
        </Box>
      )}
      {domainWatch && packageWatch !== "Entry-Level" && (
        <Box>
          <Label htmlFor="domain_name">Nama Domain</Label>
          <Input
            type="domain_name"
            name="domain_name"
            id="domain_name"
            placeholder="contoh: www.domainmu.com"
            sx={styles.form}
            {...register("domain_name")}
          />
          <Text sx={styles.errText}>
            {errors.full_name?.type === "required" && "Nama Domain wajib diisi"}
          </Text>
        </Box>
      )}
      <Box mt={20}>
        <span className="">
          By creating an account, you agree to our{" "}
          <Link href="/tos">
            <a>terms & conditions.</a>
          </Link>
        </span>
      </Box>
      <Button type="submit" value="Submit" mt={20}>
        {loading ? "Mengirim data..." : "Daftar"}
      </Button>
      {success && (
        <Alert variant="success" mt={5}>
          Selamat! kamu berhasil mendaftar, akan kami proses dalam 1x24jam yaa
          <Close ml="auto" mr={-2} onClick={() => setSuccess(false)} />
        </Alert>
      )}
    </Box>
  );
};

export default FormRegister;

const styles = {
  section: {
    display: "block",
    ml: "auto",
    mr: "auto",
    maxWidth: 756,
  },
  nameEmail: {
    gap: ["5px 0px", 10, 20, 30],
    display: ["grid", "grid"],
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(2, 1fr)",
      "repeat(2, 1fr)",
    ],
  },
  form: {
    backgroundColor: "#F1F5F9",
    border: "1px solid #CBD5E1",
  },
  errText: {
    color: "primary",
  },
};
