import { useEffect, useRef } from "react";
import { styled, Grid, Container, Typography, Box } from "@mui/material";
import Avatar from "../../../../assets/images/Perfil.jpeg";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      paddingTop: "100px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "0",
    },
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  }));

  const StyledButton = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    textDecoration: "none", // Remove o sublinhado
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  }));

  const textRef = useRef<HTMLSpanElement>(null);
  const fullText = "Sou Desenvolvedor de Software";

  useEffect(() => {
    let index = 0;

    const typeWriter = () => {
      if (textRef.current) {
        textRef.current.innerHTML = fullText.substring(0, index + 1);
        index++;
        if (index < fullText.length) {
          setTimeout(typeWriter, 150); // Velocidade da digitação ajustada para 100ms
        }
      }
    };

    typeWriter();
  }, []);

  const DownloadButton = () => (
    <StyledButton>
      <a
        href="/docs/Jefson_Oliveira_CV.pdf"
        download="Jefson_Oliveira_CV.pdf"
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <DownloadIcon />
        <Typography>Download CV</Typography>
      </a>
    </StyledButton>
  );

  return (
    <StyledHero>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box position="relative">
              <Box position="absolute" width={"150%"} top={-100} right={0}>
                <AnimatedBackground />
              </Box>
              <Box position="relative" textAlign="center">
                <StyledImg src={Avatar} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              color="primary.contrastText"
              variant="h1"
              textAlign="center"
              pb={2}
            >
              Jefson Oliveira
            </Typography>
            <Typography
              color="primary.contrastText"
              variant="h2"
              textAlign="center"
            >
              <span ref={textRef}></span>
              <span className="cursor">|</span>
            </Typography>
            <Grid
              container
              display="flex"
              justifyContent="center"
              spacing={3}
              pt={3}
            >
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <DownloadButton />
              </Grid>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton
                  onClick={() =>
                    (window.location.href = "mailto:kaironoliveira16@gmail.com")
                  }
                >
                  <MailOutlineIcon />
                  <Typography>Contact me</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
