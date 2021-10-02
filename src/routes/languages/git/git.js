import ResourceRoute from "../../../components/routes/resourceRoute";

export default class Git extends ResourceRoute
{
    constructor(props)
    {
        super(props, "language", "git");
    }
}
