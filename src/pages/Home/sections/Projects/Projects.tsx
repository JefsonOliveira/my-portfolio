import React from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { styled } from "@mui/system";

import Avatar from "../../../../assets/images/Perfil.jpeg";

const ProjectContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#333",
  color: "#fff",
  border: `1px solid ${theme.palette.warning.dark}`,
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  padding: "20px",
  margin: "20px 0",
  textAlign: "left",
  opacity: 0,
  transform: "translateY(20px)",
  transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
  "&.visible": {
    opacity: 1,
    transform: "translateY(0)",
  },
}));

const ProjectImage = styled("img")({
  width: "100%",
  borderRadius: "8px",
  marginTop: "10px",
  marginBottom: "10px",
});

const Projects = () => {
  const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  }));

  const projects = [
    {
      name: "Projeto 1",
      duration: "Jan 2023 - Abril 2024",
      image: Avatar,
      description: "Descrição do projeto 1",
      technologies: "JavaScript, React, Material UI, etc.",
      siteLink: "https://link-do-site.com",
      codeLink: "https://github.com/JefsonOliveira/projeto1",
    },
    {
      name: "Projeto 2",
      duration: "Jan 2023 - Abril 2024",
      image: Avatar,
      description: "Descrição do projeto 2",
      technologies: "JavaScript, React, Tailwind, etc.",
      siteLink: "https://link-do-site.com",
      codeLink: "https://github.com/JefsonOliveira/projeto2",
    },
    {
      name: "Projeto 1",
      duration: "Jan 2023 - Abril 2024",
      image: Avatar,
      description: "Descrição do projeto 1",
      technologies: "JavaScript, React, Material UI, etc.",
      siteLink: "https://link-do-site.com",
      codeLink: "https://github.com/JefsonOliveira/projeto1",
    },
    {
      name: "Projeto 2",
      duration: "Jan 2023 - Abril 2024",
      image: Avatar,
      description: "Descrição do projeto 2",
      technologies: "JavaScript, React, Tailwind, etc.",
      siteLink: "https://link-do-site.com",
      codeLink: "https://github.com/JefsonOliveira/projeto2",
    },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in");
      elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (position < screenPosition) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledProjects id="projects">
      <Container>
        <Typography color="primary.contrastText" variant="h4" textAlign="center" gutterBottom>
          Projetos
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <ProjectContainer className="fade-in">
                <Typography color="primary.contrastText" variant="h6">{project.name}</Typography>
                <Typography color="primary.contrastText" variant="subtitle2">
                  {project.duration}
                </Typography>
                <ProjectImage src={project.image} alt={project.name} />
                <Typography color="primary.contrastText" variant="body1" paragraph>
                  {project.description}
                </Typography>
                <Typography color="primary.contrastText" variant="body2">
                  Tecnologias: {project.technologies}
                </Typography>
                <Box mt={2}>
                  {/* <Button
                    variant="contained"
                    color="primary"
                    href={project.siteLink}
                    sx={{ marginRight: 1 }}
                  >
                    Ver o Site
                  </Button> */}
                  <Button
                    variant="outlined"
                    sx={{ color: "#fff", borderColor: "#fff" }}
                    href={project.codeLink}
                  >
                    Ver o Código
                  </Button>
                </Box>
              </ProjectContainer>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledProjects>
  );
};

export default Projects;
