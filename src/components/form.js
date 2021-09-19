/** @jsx jsx */
import { jsx, Themed, Box, Label, Input, Textarea, Button, Spinner } from "theme-ui";
import { useState } from "react";

export default function Form() {
  const [values, setValues] = useState();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { name, email, message } = values;
      const response = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          spreadsheetId: process.env.GATSBY_SPREADSHEET_ID,
          values: Object.values({ name, email, message }),
        }),
      });
      const data = await response.json();
      console.log(data);
      setSent(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      as="form"
      sx={{
        variant: "forms.primary",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <Label htmlFor="name">Tu nombre</Label>
      <Input type="text" name="name" id="name" required />
      <Label htmlFor="email">Correo electrónico</Label>
      <Input type="email" name="email" id="email" required />
      <Label htmlFor="message">Mensaje</Label>
      <Textarea name="message" id="message" rows={6} required />
      <Button>Enviar</Button>
      {loading && (
        <div
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            display: "flex",
            bg: "background",
          }}
        >
          {sent ? (
            <div sx={{ m: "auto" }}>
              <Themed.h4>
                Bien, <span sx={{ color: "primary" }}>{values.name}</span> 🥳
              </Themed.h4>
              <Themed.h4>Pronto estaremos en contacto.</Themed.h4>
            </div>
          ) : (
            <Spinner color="secondary" sx={{ m: "auto" }} />
          )}
        </div>
      )}
    </Box>
  );
}
