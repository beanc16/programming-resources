// Routing
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";

// Routes
import ConceptsHome from "./home/conceptsHome";
import Algorithms from "./algorithms/algorithms";
import Automata from "./automata/automata";
import DataStructures from "./dataStructures/dataStructures";
import DesignPatterns from "./designPatterns/designPatterns";

// Components
import { TabBar, TabBarItem } from "../../components/navigation/tabBar";
  

export default function ProgrammingConcepts()
{
    let match = useRouteMatch();

    return(
        <div id="programming-concepts">
            <TabBar justify="center">
                <TabBarItem to={`${match.url}`}>
                    Programming Concepts Home
                </TabBarItem>
                <TabBarItem to={`${match.url}/algorithms`}>
                    Algorithms
                </TabBarItem>
                <TabBarItem to={`${match.url}/automata`}>
                    Automata
                </TabBarItem>
                <TabBarItem to={`${match.url}/data-structures`}>
                    Data Structures
                </TabBarItem>
                <TabBarItem to={`${match.url}/design-patterns`}>
                    Design Patterns
                </TabBarItem>
            </TabBar>
            <Switch>
                <Route path={`${match.path}/algorithms`}>
                    <Algorithms />
                </Route>
                <Route path={`${match.path}/automata`}>
                    <Automata />
                </Route>
                <Route path={`${match.path}/data-structures`}>
                    <DataStructures />
                </Route>
                <Route path={`${match.path}/design-patterns`}>
                    <DesignPatterns />
                </Route>
                <Route path={`${match.path}`}>
                    <ConceptsHome />
                </Route>
            </Switch>
        </div>
    );
}
