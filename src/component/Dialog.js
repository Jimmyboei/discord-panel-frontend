import { Dialog as DialogMui, DialogTitle, DialogContent } from "@mui/material";

export default function Dialog({
  title = "",
  open = false,
  onClose = () => {},
  children,
  ...rest
}) {
  const handleClose = () => {
    onClose();
  };
  return (
    <DialogMui
      onClose={handleClose}
      open={open}
      maxWidth="sm"
      fullWidth
      sx={{
        "& .MuiPaper-root ": {
          background: "#1C1E21",
          color: "white",
          border: "1px solid white",
        },
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </DialogMui>
  );
}
