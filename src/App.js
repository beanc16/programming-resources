import {
  Switch,
  Route,
  Link
} from "react-router-dom";

// Routes
import Home from "./routes/home/home";
import UniversalResources from "./routes/universal-resources/universalResources";
import ProgrammingLanguages from "./routes/languages/programmingLanguages";
import ProgrammingConcepts from "./routes/concepts/programmingConcepts";
import TypesOfDevelopment from "./routes/dev-types/typesOfDevelopment";


function App()
{
  return (
    <div id="app">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/universal">Universal Resources</Link>
          </li>
          <li>
            <Link to="/languages">Programming Languages</Link>
          </li>
          <li>
            <Link to="/concepts">Programming Concepts</Link>
          </li>
          <li>
            <Link to="/dev-types">Types of Development</Link>
          </li>
        </ul>
      </nav>

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
