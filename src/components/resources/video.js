// Video
import ReactPlayer from "react-player";

// Components
import VideoLoading from "./videoLoading";

export default class Video extends ReactPlayer
{
}



// Default Property values
Video.defaultProps.controls = true;
Video.defaultProps.className = "col-xl-4 mb-4 mx-auto";
Video.defaultProps.fallback = <VideoLoading />;
