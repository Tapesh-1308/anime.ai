import { Box, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import AddIcon from '@mui/icons-material/Add';
export default function SideBar() {
  return (
    <Box style={{ backgroundColor: "#272829", minHeight: "100vh" }}>
      <Stack spacing={6}>
        <Stack textAlign={"center"} alignItems={"center"} color={"white"}>
          <HomeIcon style={{ justifyContent: "center" }} />
          Home
        </Stack>
        <Stack textAlign={"center"} alignItems={"center"} color={"white"}>
          <LiveTvIcon style={{ justifyContent: "center" }} />
          Feed
        </Stack>
        <Stack textAlign={"center"} alignItems={"center"} color={"white"}>
          <AddIcon style={{ justifyContent: "center" }} />
          Create
        </Stack>
      </Stack>
    </Box>
  );
}
