import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

const NavBar = () => {
  const StyledToobar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
  }));

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth"})
    }
  }

  return (
    <>
      <AppBar position="absolute">
        <StyledToobar>
          <MenuItem onClick={() => handleScroll("about")}>Sobre</MenuItem>
          <MenuItem onClick={() => handleScroll("skills")}>Skills</MenuItem>
          <MenuItem onClick={() => handleScroll("projects")}>Projetos</MenuItem>
        </StyledToobar>
      </AppBar>
    </>
  );
};

export default NavBar;
