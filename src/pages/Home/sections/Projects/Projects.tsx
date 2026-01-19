import React, { useMemo, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";

import Imagem_Projeto_1 from "../../../../assets/images/projects/projeto_amatec.png";
import Imagem_Projeto_2 from "../../../../assets/images/projects/projeto_Album.png";
import Imagem_Projeto_3 from "../../../../assets/images/projects/projeto_multistep.png";
import Imagem_Projeto_4 from "../../../../assets/images/projects/projeto_tela_login.png";
import Imagem_Projeto_5 from "../../../../assets/images/projects/projeto_delicias_da_le.png";

type ProjectKind = "PERSONAL" | "PROFESSIONAL";
type ProjectStatus = "DEPLOYED" | "IN_PROGRESS";

type Project = {
  name: string;
  kind: ProjectKind;
  status: ProjectStatus;
  duration: string;
  image?: string;
  headline: string;
  bullets: string[];
  tech: string[];
  siteLink?: string;
  codeLink?: string;
  featured?: boolean;
};

const StyledProjects = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: "2.5rem 0",
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#2b2b2b",
  color: "#fff",
  borderRadius: 16,
  border: `1px solid ${theme.palette.warning.dark}`,
  transition: "transform 160ms ease, box-shadow 160ms ease",
  "& *": {
    color: "inherit",
  },
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
  },
}));

const Projects: React.FC = () => {
  const [tab, setTab] = useState<"ALL" | ProjectKind>("ALL");

  const projects: Project[] = [
    // ===== FEATURED (PESSOAL) =====
    {
      name: "HouseBills",
      kind: "PERSONAL",
      status: "IN_PROGRESS",
      duration: "2025 - atual",
      // image: Imagem_HouseBills,
      headline:
        "App de controle de despesas pessoais/familiares com autenticação e CRUD completo.",
      bullets: [
        "Backend em NestJS com Prisma + PostgreSQL",
        "Auth com JWT + bcrypt e módulos de Users/Expenses",
        "Base pronta para evoluir relatórios e categorias",
      ],
      tech: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "JWT"],
      // siteLink: "",
      // codeLink: "https://github.com/...repository..."
      featured: true,
    },
    {
      name: "Gym Planner",
      kind: "PERSONAL",
      status: "IN_PROGRESS",
      duration: "2025 - atual",
      // image: Imagem_GymPlanner,
      headline:
        "Sistema para criar e acompanhar treinos semanais com organização por dias e exercícios.",
      bullets: [
        "Modelagem de treino por semana (Program/ProgramDay) e fluxo de criação",
        "Estrutura pensada para Docker + Postgres e evolução do produto",
        "Planejado frontend React para visualização e edição do treino",
      ],
      tech: ["NestJS", "TypeScript", "PostgreSQL", "Docker"],
      featured: true,
    },

    // ===== FEATURED (FREELA/PROFISSIONAL) =====
    {
      name: "Delícias da Lê",
      kind: "PROFESSIONAL",
      status: "DEPLOYED",
      duration: "nov/2025 - dez/2025",
      image: Imagem_Projeto_5,
      headline:
        "Landing page para encomendas com foco em conversão e presença digital.",
      bullets: [
        "Estrutura de seções + CTA direto para contato/compra",
        "Carrossel de avaliações com link para google Reviews",
        "Deploy em Cloudflare Pages com melhorias de perfomance/UX",
      ],
      tech: ["React", "Vite", "Cloudflare Pages"],
      siteLink: "https://d26bf347.delicias-da-le.pages.dev/",
      // codeLink: "",
      featured: true,
    },

    // ===== FRELLA/PROFISSIONAL (EM ANDAMENTO) =====
    {
      name: "Amatec Refrigeração",
      kind: "PROFESSIONAL",
      status: "IN_PROGRESS",
      duration: "2026 - atual",
      headline:
        "Landing page para servições de manutenção com foco em conversão e presença digital.",
      bullets: [
        "Reestruturação visual e responsividade (mobile-first)",
        "CTA e conteúdo reorganizados para facilitar contato",
        "Preparação para deploy continuo e manutenção mais fácil",
      ],
      tech: ["React", "Vite"],
      // siteLink: "",
      // odeLink: "",
    },

    // ===== OUTROS PROJETOS (PESSOAIS) =====
    {
      name: "Amatec Refrigeração (Versão antiga)",
      kind: "PERSONAL",
      status: "DEPLOYED",
      duration: "Ago 2023 - Out 2023",
      image: Imagem_Projeto_1,
      headline:
        "Landing page com foco em conversão e contato rápido (CTA + redes sociais).",
      bullets: [
        "Layout responsivo e seção de serviços com CTA",
        "Integrações para contato rápido via redes sociais",
        "Deploy com domínio e publicação do projeto",
      ],
      tech: ["React", "JavaScript", "HTML", "CSS"],
      siteLink: "https://support.jefsonoliveira.com.br",
      codeLink:
        "https://github.com/JefsonOliveira/Amatec_Refrigeracao/tree/main/Amatec-Refrigeracao",
    },
    {
      name: "Album",
      kind: "PERSONAL",
      status: "DEPLOYED",
      duration: "Jun 2024",
      image: Imagem_Projeto_2,
      headline:
        "Aplicação para criar e organizar álbuns com galeria e compartilhamento.",
      bullets: [
        "Organização de fotos em galerias/coleções",
        "Interface simples com foco em navegação",
        "Deploy do projeto com link público",
      ],
      tech: ["React", "JavaScript", "HTML", "CSS"],
      siteLink: "https://jefsonoliveira.jefsonoliveira.com.br/",
      codeLink: "https://github.com/JefsonOliveira/album",
    },
    {
      name: "Multi-step Form",
      kind: "PERSONAL",
      status: "DEPLOYED",
      duration: "Mai 2024",
      image: Imagem_Projeto_3,
      headline: "Form em etapas com experiência guiada e revisão final.",
      bullets: [
        "Fluxo em 3 etapas com estado controlado",
        "Validações e revisão antes do envio",
        "UI clara para reduzir abandono",
      ],
      tech: ["React", "JavaScript", "HTML", "CSS"],
      siteLink: "https://projetomultistep.jefsonoliveira.com.br",
      codeLink:
        "https://github.com/JefsonOliveira/Curso-Hora-de-Codar/tree/main/arquivos/multistep_form_react",
    },
    {
      name: "Tela de Login",
      kind: "PERSONAL",
      status: "DEPLOYED",
      duration: "Mai 2024",
      image: Imagem_Projeto_4,
      headline: "Login com validações e feedback de erro para o usuário.",
      bullets: [
        "Validação de e-mail e requisitos mínimos de senha",
        "Feedback visual para campos inválidos",
        "Base pronta para integração com autenticação real",
      ],
      tech: ["React", "JavaScript", "HTML", "CSS"],
      siteLink: "https://staging.jefsonoliveira.com.br",
      codeLink:
        "https://github.com/JefsonOliveira/Curso-Hora-de-Codar/tree/main/arquivos/tela_login",
    },
  ];

  const filteredProjects = useMemo(() => {
    const list =
      tab === "ALL" ? projects : projects.filter((p) => p.kind === tab);

    // Featured primeiro, depois DEPLOYED, depois IN_PROGRESS, depois alfabético
    return [...list].sort((a, b) => {
      const f = Number(!!b.featured) - Number(!!a.featured);
      if (f !== 0) return f;

      const statusRank = (s: ProjectStatus) => (s === "DEPLOYED" ? 0 : 1);
      const sr = statusRank(a.status) - statusRank(b.status);
      if (sr !== 0) return sr;

      return a.name.localeCompare(b.name);
    });
  }, [projects, tab]);

  const kindLabel = (k: ProjectKind) =>
    k === "PERSONAL" ? "Pessoal" : "Freela/Profissional";
  const statusLabel = (s: ProjectStatus) =>
    s === "DEPLOYED" ? "Deploy" : "Em andamento";

  return (
    <StyledProjects id="projects">
      <Container>
        <Typography
          color="primary.contrastText"
          variant="h4"
          textAlign="center"
          gutterBottom
          sx={{ mb: 2 }}
        >
          Projetos
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <Tabs
            value={tab}
            onChange={(_, v) => setTab(v)}
            TabIndicatorProps={{ style: { backgroundColor: "#fff" } }}
            sx={{
              "& .MuiTab-root": { color: "rgba(255,255,255,0.75)" },
              "& .MuiTab-root.Mui-selected": { color: "#fff" },
            }}
          >
            <Tab value="ALL" label="Todos" />
            <Tab value="PERSONAL" label="Pessoais" />
            <Tab value="PROFESSIONAL" label="Freelas/Profissionais" />
          </Tabs>
        </Box>

        <Grid container spacing={3}>
          {filteredProjects.map((project) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={project.name}
              sx={{ display: "flex" }}
            >
              <ProjectCard
                sx={{ width: "100%", display: "flex", flexDirection: "column" }}
              >
                {project.image ? (
                  <CardMedia
                    component="img"
                    height="210"
                    image={project.image}
                    alt={project.name}
                  />
                ) : null}

                <CardContent
                  sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
                >
                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    useFlexGap
                    sx={{ mb: 1 }}
                  >
                    <Chip
                      size="small"
                      label={kindLabel(project.kind)}
                      variant="outlined"
                      sx={{
                        color: "#fff",
                        borderColor: "rgba(255,255,255,0.35)",
                        "& .MuiChip-label": { color: "#fff" },
                      }}
                    />

                    <Chip
                      size="small"
                      label={statusLabel(project.status)}
                      color={
                        project.status === "DEPLOYED" ? "success" : "warning"
                      }
                    />
                    {project.featured ? (
                      <Chip size="small" label="Destaque" color="secondary" />
                    ) : null}
                  </Stack>

                  <Typography variant="h6" sx={{ mb: 0.3 }}>
                    {project.name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ opacity: 0.85, mb: 1.2 }}
                  >
                    {project.duration}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1.5, opacity: 0.95 }}>
                    {project.headline}
                  </Typography>

                  <Box component="ul" sx={{ pl: 2, mt: 0, mb: 2 }}>
                    {project.bullets.map((b) => (
                      <li key={b}>
                        <Typography variant="body2" sx={{ opacity: 0.95 }}>
                          {b}
                        </Typography>
                      </li>
                    ))}
                  </Box>

                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    useFlexGap
                    sx={{ mb: 2 }}
                  >
                    {project.tech.map((t) => (
                      <Chip
                        key={t}
                        label={t}
                        size="small"
                        variant="outlined"
                        sx={{
                          color: "#fff",
                          borderColor: "rgba(255,255,255,0.35)",
                        }}
                      />
                    ))}
                  </Stack>
                  <Box sx={{ mt: "auto" }}>
                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      useFlexGap
                    >
                      {project.siteLink ? (
                        <Button
                          variant="contained"
                          color="primary"
                          href={project.siteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Demo
                        </Button>
                      ) : null}

                      {project.codeLink ? (
                        <Button
                          variant="outlined"
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ color: "#fff", borderColor: "#fff" }}
                        >
                          GitHub
                        </Button>
                      ) : (
                        project.kind === "PROFESSIONAL" && (
                          <Chip
                            label="Código/links indisponíveis"
                            size="small"
                            variant="outlined"
                            sx={{
                              color: "#fff",
                              borderColor: "rgba(255,255,255,0.35)",
                              "& .MuiChip-label": { color: "#fff" },
                            }}
                          />
                        )
                      )}
                    </Stack>
                  </Box>
                </CardContent>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledProjects>
  );
};

export default Projects;
