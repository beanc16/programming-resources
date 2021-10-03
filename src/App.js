// Routing
import {
  Switch,
  Route
} from "react-router-dom";

// Routes
import Home from "./routes/home/home";
import UniversalResources from "./routes/universalResources/universalResources";
import ProgrammingLanguages from "./routes/languages/programmingLanguages";
import ProgrammingConcepts from "./routes/concepts/programmingConcepts";
import GameDev from "./routes/devTypes/gameDev";

// Components
import { TabBar, TabBarItem } from "./components/navigation/tabBar";


function App()
{
  return (
    <div id="app" className="col-12 p-3 bg-dark bg-gradient text-white">
      <TabBar justify="center">
        <TabBarItem to="/" >
          Home
        </TabBarItem>
        <TabBarItem to="/universal">
          Universal Resources
        </TabBarItem>
        <TabBarItem to="/languages">
          Programming Languages
        </TabBarItem>
        <TabBarItem to="/concepts">
          Programming Concepts
        </TabBarItem>
        <TabBarItem to="/game-dev">
          Game Development
        </TabBarItem>
      </TabBar>

      <Switch>
        <Route path="/universal">
          <UniversalResources />
        </Route>
        <Route path="/languages">
          <ProgrammingLanguages />
        </Route>
        <Route path="/concepts">
          <ProgrammingConcepts />
        </Route>
        <Route path="/game-dev">
          <GameDev />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}



export default App;
