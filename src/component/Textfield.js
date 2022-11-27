import { TextField } from "@mui/material";

export default function Textfield({
  value = "",
  onChange = (value) => {},
  ...rest
}) {
  const handleChange = (e) => {
    const value = e.target.value;

    onChange(value);
  };
  return (
    <TextField
      sx={{
        background: "gray",
      }}
      value={value}
      onChange={handleChange}
      fullWidth
      {...rest}
    />
  );
}
