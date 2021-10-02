import ResourceRoute from "../../../components/routes/resourceRoute";
import VideoLoading from "../../../components/resources/videoLoading";

export default class Git extends ResourceRoute
{
    constructor(props)
    {
        super(props, "language", "git");
    }

    render()
    {
        return(
            <div id="pl-git">
                <div>
                    <h1>Git</h1>
                    <p>
                        This will contain quick references and tutorials for 
                        Git.
                    </p>
                    {this.state.resources}
                </div>
            </div>
        );
    }
}
