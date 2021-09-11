// Routing
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";

// Routes
import DevHome from "./home/devHome";
import GameDev from "./gameDev/gameDev";
import AppDev from "./appDev/appDev";
import WebDev from "./webDev/webDev";

// Components
import { TabBar, TabBarItem } from "../../components/navigation/tabBar";
  

function TypesOfDevelopment()
{
    let match = useRouteMatch();

    return(
        <div id="types-of-dev">
            <TabBar justify="center">
                <TabBarItem to={`${match.url}`}>
                    Development Types Home
                </TabBarItem>
                <TabBarItem to={`${match.url}/game-dev`}>
                    Game Development
                </TabBarItem>
                <TabBarItem to={`${match.url}/web-dev`}>
                    Web Development
                </TabBarItem>
                <TabBarItem to={`${match.url}/app-dev`}>
                    App Development
                </TabBarItem>
            </TabBar>
            <Switch>
                <Route path={`${match.path}/game-dev`}>
                    <GameDev />
                </Route>
                <Route path={`${match.path}/web-dev`}>
                    <WebDev />
                </Route>
                <Route path={`${match.path}/app-dev`}>
                    <AppDev />
                </Route>
                <Route path={`${match.path}`}>
                    <DevHome />
                </Route>
            </Switch>
        </div>
    );
}



export default TypesOfDevelopment;