// Video
import ReactPlayer from "react-player";

// Components
import VideoLoading from "./videoLoading";

export default class Video extends ReactPlayer
{
}

Video.defaultProps.controls = "true";
Video.defaultProps.class = "col-4 mb-4 mx-auto";
Video.defaultProps.fallback = <VideoLoading />;
