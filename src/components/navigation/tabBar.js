// Routing
import { Link } from "react-router-dom";

// Properties
import PropTypes from "prop-types";


function TabBar(props)
{
    const className = _getClassName(props);

    return(
        <nav>
            <ul className={className}>
                {props.children}
            </ul>
        </nav>
    );
}

function TabBarItem(props)
{
    return(
        <li className="nav-item">
            <Link to={props.to} className="nav-link text-white">
                {props.children}
            </Link>
        </li>
    );
}

TabBarItem.propTypes = {
    to: PropTypes.string.isRequired
}



function _getClassName(props)
{
    let className = "nav nav-tabs";

    if (props.justify != null)
    {
        if (props.justify === "start")
        {
            
            className += " justify-content-start";
        }

        else if (props.justify === "end")
        {
            className += " justify-content-end";
        }

        else if (props.justify === "center")
        {
            className += " justify-content-center";
        }
        
        else if (props.justify === "between")
        {
            className += " justify-content-between";
        }

        else if (props.justify === "around")
        {
            className += " justify-content-around";
        }

        else if (props.justify === "evenly")
        {
            className += " justify-content-evenly";
        }
    }

    return className;
}



export { TabBar, TabBarItem };