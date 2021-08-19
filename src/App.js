// Routing
import {
  Switch,
  Route
} from "react-router-dom";

// Routes
import Home from "./routes/home/home";
import UniversalResources from "./routes/universal-resources/universalResources";
import ProgrammingLanguages from "./routes/languages/programmingLanguages";
import ProgrammingConcepts from "./routes/concepts/programmingConcepts";
import TypesOfDevelopment from "./routes/dev-types/typesOfDevelopment";

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
        <TabBarItem to="/dev-types">
          Types of Development
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
        <Route path="/dev-types">
          <TypesOfDevelopment />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}



export default App;
