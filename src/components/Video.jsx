import useBars from "../hooks/useBars";
import Bars from "./Bars";

const Video = () => {
  const { isMuted } = useBars();

  return (
    <div className="Video">
      <div className="video-container">
        <video
          src="https://onepager972.wpengine.com/wp-content/uploads/2022/05/Plus972-Graphics-Video_v4-copy.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        ></video>
      </div>
    </div>
  );
};

export default Video;
