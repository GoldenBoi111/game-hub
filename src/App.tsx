import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { ColorModeButton } from "./components/ui/color-mode";
import GameGrid from "./components/GameGrid";
import SideBar from "./components/SideBar";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main"`,
      }}>
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
