import { Box, Typography, IconButton, Link, Container } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: "#fff",
        color: "#000",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Link href="https://github.com/JefsonOliveira" target="_blank">
            <IconButton>
              <GitHub fontSize="large" />
            </IconButton>
          </Link>
          <Link
            href="https://www.linkedin.com/in/jefson-oliveira-a92a62206/"
            target="_blank"
          >
            <IconButton>
              <LinkedIn fontSize="large" />
            </IconButton>
          </Link>
          <Link href="mailto:kaironoliveira16@gmail.com">
            <IconButton>
              <Email fontSize="large" />
            </IconButton>
          </Link>
        </Box>
        <Typography variant="body1">
          © 2024 Jefson Oliveira - Todos os direitos reservados
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
