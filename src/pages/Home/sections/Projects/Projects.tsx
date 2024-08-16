import React from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { styled } from "@mui/system";

import SemImagem from "../../../../assets/images/projects/sem-imagem.jpg";
import Imagem_Projeto_3 from "../../../../assets/images/projects/projeto_multistep.png";
import Imagem_Projeto_4 from "../../../../assets/images/projects/projeto_tela_login.png"

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
      duration: "Maio 2024",
      image: Imagem_Projeto_3,
      description: "O projeto multistep é um sistema de avaliação que guia o usuário por três etapas distintas, permitindo que ele forneça informações detalhadas sobre um produto ou serviço. As etapas incluem a coleta de dados pessoais, uma revisão detalhada, e uma mensagem final de agradecimento, criando uma experiência de feedback interativa e eficiente.",
      technologies: "JavaScript, React, HTML, CSS.",
      siteLink: "https://projetomultistep.jefsonoliveira.com.br",
      codeLink: "https://github.com/JefsonOliveira/projeto1",
    },
    {
      name: "Projeto 2",
      duration: "Jan 2023 - Abril 2024",
      image: SemImagem,
      description: "Descrição do projeto 2",
      technologies: "JavaScript, React, Tailwind, etc.",
      siteLink: "https://link-do-site.com",
      codeLink: "https://github.com/JefsonOliveira/projeto2",
    },
    {
      name: "Projeto 3",
      duration: "Maio 2024",
      image: Imagem_Projeto_3,
      description: "O projeto multistep é um sistema de avaliação que guia o usuário por três etapas distintas, permitindo que ele forneça informações detalhadas sobre um produto ou serviço. As etapas incluem a coleta de dados pessoais, uma revisão detalhada, e uma mensagem final de agradecimento, criando uma experiência de feedback interativa e eficiente.",
      technologies: "JavaScript, React, HTML, CSS.",
      siteLink: "https://projetomultistep.jefsonoliveira.com.br",
      codeLink: "https://github.com/JefsonOliveira/projeto1",
    },
    {
      name: "Projeto 4",
      duration: "Jan 2023 - Abril 2024",
      image: Imagem_Projeto_4,
      description: "Este projeto consiste em uma tela de login que realiza verificações básicas: valida se o e-mail está em um formato correto e se a senha atende aos requisitos mínimos. A aplicação é projetada para garantir que os usuários forneçam dados válidos antes de prosseguir.",
      technologies: "JavaScript, React, HTML, CSS.",
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
        <Typography
          color="primary.contrastText"
          variant="h4"
          textAlign="center"
          gutterBottom
        >
          Projetos
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <ProjectContainer className="fade-in">
                <Typography color="primary.contrastText" variant="h6">
                  {project.name}
                </Typography>
                <Typography color="primary.contrastText" variant="subtitle2">
                  {project.duration}
                </Typography>
                <ProjectImage src={project.image} alt={project.name} />
                <Typography
                  color="primary.contrastText"
                  variant="body1"
                  paragraph
                >
                  {project.description}
                </Typography>
                <Typography color="primary.contrastText" variant="body2">
                  Tecnologias: {project.technologies}
                </Typography>
                <Box mt={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    href={project.siteLink}
                    target="_blank" // Abre o link em uma nova aba
                    rel="noopener noreferrer" // Adiciona segurança ao abrir uma nova aba
                    sx={{ marginRight: 1 }}
                  >
                    Ver o Site
                  </Button>
                  <Button
                    variant="outlined"
                    href={project.codeLink}
                    target="_blank" // Abre o link em uma nova aba
                    rel="noopener noreferrer" // Adiciona segurança ao abrir uma nova aba 
                    sx={{ color: "#fff", borderColor: "#fff" }}
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
