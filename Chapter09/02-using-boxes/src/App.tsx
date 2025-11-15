import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Example() {
  return (
    <>
      <Box
        sx={{
          padding: 2,
          backgroundColor: "#e3f2fd",
          textAlign: "center",
          marginBottom: 2,
        }}
      >
        <Typography>First Box</Typography>
      </Box>

      <Box
        sx={{
          padding: 2,
          backgroundColor: "#fce4ec",
          display: "flex",
          justifyContent: "center",
          height: "100px",
          borderRadius: "30px",
        }}
      >
        <Typography>Second Box</Typography>
      </Box>
    </>
  );
}
