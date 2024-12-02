import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box padding={0} alignContent={"center"} width={"100%"}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
