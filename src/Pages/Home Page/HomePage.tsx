import { Grid } from "@mui/material";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import ChatInterface from "../../components/ChatInterface";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item xs={1}>
          <SideBar />
        </Grid>
        <Grid xs={11}>
          <div style={{minWidth: "100vw", backgroundColor: '#37393b', minHeight: "100vh"}}>
            <ChatInterface/>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
