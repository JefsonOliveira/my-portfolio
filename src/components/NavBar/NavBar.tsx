/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

const NavBar = () => {
  const StyledToobar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
  }));

  return (
    <>
      <AppBar position="absolute">
        <StyledToobar>
          <MenuItem>Sobre</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Projetos</MenuItem>
        </StyledToobar>
      </AppBar>
    </>
  );
};

export default NavBar;
