import "../../helpers/prototypes/string";

export default function ResourceGroup(props)
{
    return(
        <div className="resource-group">
            <h2>{props.groupName.toHeader()}</h2>
            {props.children}
        </div>
    );
}
