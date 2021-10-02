// Components
import Video from "../../../components/resources/video";

export default function GameDev()
{
    return(
        <div id="dt-game-dev">
            <div>
                <h1>Game Development</h1>
                <p>
                    This will contain quick references and tutorials for 
                    game development.
                </p>
            </div>
            <div class="">
                <div class="row d-flex justify-content-center">
                    <Video 
                        url="https://www.youtube.com/watch?v=B2Ut-LH8ai8" 
                    />
                    <Video 
                        url="https://www.youtube.com/watch?v=B2Ut-LH8ai8" 
                    />
                    <Video 
                        url="https://www.youtube.com/watch?v=B2Ut-LH8ai8" 
                    />
                </div>
            </div>
        </div>
    );
}
