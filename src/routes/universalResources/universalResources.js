// Routing
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";

// Routes
import URHome from "./home/urHome";
import Fonts from "./fonts/fonts";
import ColorPalettes from "./colorPalettes/colorPalettes";
import RoyaltyFree from "./royaltyFree/royaltyFree";

// Components
import { TabBar, TabBarItem } from "../../components/navigation/tabBar";
  

export default function UniversalResources()
{
    let match = useRouteMatch();

    return(
        <div id="universal-resources">
            <TabBar justify="center">
                <TabBarItem to={`${match.url}`}>
                    Universal Resources Home
                </TabBarItem>
                <TabBarItem to={`${match.url}/color-palettes`}>
                    Color Palettes
                </TabBarItem>
                <TabBarItem to={`${match.url}/fonts`}>
                    Fonts
                </TabBarItem>
                <TabBarItem to={`${match.url}/royalty-free-assets`}>
                    Royalty Free Assets
                </TabBarItem>
            </TabBar>
            <Switch>
                <Route path={`${match.path}/color-palettes`}>
                    <ColorPalettes />
                </Route>
                <Route path={`${match.path}/fonts`}>
                    <Fonts />
                </Route>
                <Route path={`${match.path}/royalty-free-assets`}>
                    <RoyaltyFree />
                </Route>
                <Route path={`${match.path}`}>
                    <URHome />
                </Route>
            </Switch>
        </div>
    );
}
