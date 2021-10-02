import ResourceRoute from "../../../components/routes/resourceRoute";

export default class GameDev extends ResourceRoute
{
    constructor(props)
    {
        super(props, "devType", "gameDev");
    }
}
