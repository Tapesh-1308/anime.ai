import { Box, Button, Container, Grid, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
export default function Navbar() {
  const loginbuttonStyle = {marginTop: "30px", fontSize:"10px", backgroundColor: '#838783'}
  const signInbuttonStyle = {marginTop: "30px", fontSize:"10px", backgroundColor: "#2b6cc2", color: "white"}
  const NavbarColor = { backgroundColor: "#272b27", maxHeight: "80px" };
  return (
    <div style={NavbarColor}>
      <Grid
        container
        spacing={{
          md: 2,
          xs: 1,
          lg: 4
        }}
      >
        <Grid xs={6} sm={8} lg={8}>
          <Box>
            <Typography color={"white"} variant="h3" padding="25px">
              anime.ai
            </Typography>
          </Box>
        </Grid>
        <Grid xs={6} sm={4} lg={4} spacing={4} style={{display: "flex"}}>
          <Grid xs={4} sm={3} lg={2} >
            <SearchIcon
              style={{ padding: "35px", color: "white", fontSize: "30px" }}
            />
          </Grid>
          <Grid xs={4} sm={3} lg={2} >
            <Button style={loginbuttonStyle} variant="contained">Log-in</Button>
          </Grid>
          <Grid xs={4} sm={3} lg={2}>
          <Button style={signInbuttonStyle} variant="outlined">Sign-up</Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
