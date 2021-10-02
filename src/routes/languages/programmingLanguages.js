// Routing
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";

// Routes
import PLHome from "./home/plHome";
import HtmlAndCss from "./htmlAndCss/htmlAndCss";
import JavaScript from "./javascript/javascript";
import Git from "./git/git";

// Components
import { TabBar, TabBarItem } from "../../components/navigation/tabBar";
  

function ProgrammingLanguages()
{
    let match = useRouteMatch();

    return(
        <div id="programming-languages">
            <TabBar justify="center">
                <TabBarItem to={`${match.url}`}>
                    Programming Languages Home
                </TabBarItem>
                <TabBarItem to={`${match.url}/html-css`}>
                    HTML & CSS
                </TabBarItem>
                <TabBarItem to={`${match.url}/javascript`}>
                    JavaScript
                </TabBarItem>
                <TabBarItem to={`${match.url}/git`}>
                    Git
                </TabBarItem>
            </TabBar>
            <Switch>
                <Route path={`${match.path}/html-css`}>
                    <HtmlAndCss />
                </Route>
                <Route path={`${match.path}/javascript`}>
                    <JavaScript />
                </Route>
                <Route path={`${match.path}/git`}>
                    <Git />
                </Route>
                <Route path={`${match.path}`}>
                    <PLHome />
                </Route>
            </Switch>
        </div>
    );
}



export default ProgrammingLanguages;