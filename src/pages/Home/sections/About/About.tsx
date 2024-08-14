import { Box, Typography, Grid, Divider, Icon } from "@mui/material";
import { School, WorkspacePremium } from "@mui/icons-material";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        backgroundColor: "#fff",
        color: "#333",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Sobre
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={5}>
          <Box
            sx={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "20px",
              textAling: "center",
              backgroundColor: "#f9f9f9",
            }}
          >
            <Icon
              component={WorkspacePremium}
              sx={{ fontSize: 40, color: "#333" }}
            />
            <Typography variant="h6" sx={{ marginTop: 2 }}>
              Experiência
            </Typography>
            <Typography variant="body1">
              1+ Anos de experiência como desenvolvedor front-end
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box
            sx={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "20px",
              textAlign: "center",
              backgroundColor: "#f9f9f9",
            }}
          >
            <Icon component={School} sx={{ fontSize: 40 }} />
            <Typography variant="h6" sx={{ marginTop: 2 }}>
              Educação
            </Typography>
            <Typography variant="body1">
              Análise e Desenvolvimento de Sistemas
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Com experiência como Supervisor Administrativo, onde desenvolvi
        habilidades essenciais de liderança, coordenação e trabalho em equipe,
        decidi seguir minha verdadeira paixão pela tecnologia. Após anos de
        atuação no setor administrativo, realizei uma transição significativa
        para o desenvolvimento frontend, área em que tenho me especializado nos
        últimos anos. Como desenvolvedor frontend freelancer, tenho aplicado meu
        conhecimento técnico para criar interfaces dinâmicas e responsivas,
        sempre focando na melhor experiência do usuário. Meu compromisso com a
        excelência e a busca contínua por inovação me motivam a aprimorar
        constantemente minhas habilidades e expandir meu conhecimento em
        tecnologias modernas.
      </Typography>

      <Divider sx={{ marginY: 4 }} />

      <Typography id="skills" variant="h4" gutterBottom>
        Skills
      </Typography>

      <Grid container justifyContent="center">
        {[
          "JavaScript",
          "ReactJS",
          "HTML",
          "CSS",
          "GitHub",
          "Tailwind",
          "Material UI",
        ].map((skill, index) => (
          <Box
            key={index}
            sx={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              backgroundColor: "#f9f9f9",
              marginRight: "10px",
            }}
          >
            <Typography variant="body1">{skill}</Typography>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default About;
