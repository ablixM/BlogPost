import { Grid, GridItem } from "@chakra-ui/react";

import NavBar from "../components/Navbar.tsx";
import HomePage from "./HomePage.tsx";

const MainPage = () => {
  return (
    <>
      <NavBar />
      <Grid>
        <HomePage />
      </Grid>
    </>
  );
};

export default MainPage;
