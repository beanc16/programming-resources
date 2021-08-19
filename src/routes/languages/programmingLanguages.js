import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

// Routes
import PLHome from "./home/plHome";
import HtmlAndCss from "./htmlAndCss/htmlAndCss";
import JavaScript from "./javascript/javascript";
  

function ProgrammingLanguages()
{
    let match = useRouteMatch();

    return(
        <div id="programming-languages">
            <nav>
                <ul>
                    <li>
                        <Link to={`${match.url}`}>Programming Languages Home</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/html-css`}>HTML & CSS</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/javascript`}>JavaScript</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path={`${match.path}/html-css`}>
                    <HtmlAndCss />
                </Route>
                <Route path={`${match.path}/javascript`}>
                    <JavaScript />
                </Route>
                <Route path={`${match.path}`}>
                    <PLHome />
                </Route>
            </Switch>
        </div>
    );
}



export default ProgrammingLanguages;