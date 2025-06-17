import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import SideBar from "./components/SideBar";
import { useState } from "react";

function App() {
  const [year, setYear] = useState(2000);
  return (
    <Grid
      templateAreas={{
        base: `"nav nav nav nav" "aside aside main main"`,
        lg: `"nav nav nav nav" "aside main main main"`,
      }}>
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem area={"aside"}>
        <SideBar year={year} onClick={(year) => setYear(year)} />
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid year={year} />
      </GridItem>
    </Grid>
  );
}

export default App;
