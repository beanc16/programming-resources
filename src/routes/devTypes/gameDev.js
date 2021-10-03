// Routing
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";

// Routes
import GameDevHome from "./home/gameDevHome";
import GameDesign from "./gameDev/gameDesign";
import LevelDesign from "./levelDesign/levelDesign";

// Components
import { TabBar, TabBarItem } from "../../components/navigation/tabBar";
  

export default function GameDev()
{
    let match = useRouteMatch();

    return(
        <div id="game-dev">
            <TabBar justify="center">
                <TabBarItem to={`${match.url}`}>
                    Game Development Home
                </TabBarItem>
                <TabBarItem to={`${match.url}/game-design`}>
                    Game Design
                </TabBarItem>
                <TabBarItem to={`${match.url}/level-design`}>
                    Level Design
                </TabBarItem>
            </TabBar>
            <Switch>
                <Route path={`${match.path}/game-design`}>
                    <GameDesign />
                </Route>
                <Route path={`${match.path}/level-design`}>
                    <LevelDesign />
                </Route>
                <Route path={`${match.path}`}>
                    <GameDevHome />
                </Route>
            </Switch>
        </div>
    );
}
