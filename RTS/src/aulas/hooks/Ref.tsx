import React from "react";
import videoSrc from "../video.mp4";

const Ref = () => {
  const [playing, setPlaying] = React.useState(false);

  const video = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    console.log(video.current, playing);
  }, []);

  return (
    <div>
      <video
        controls
        ref={video}
        src={videoSrc}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      ></video>

      <div className="flex" id="actions">
        {playing ? (
          <button onClick={() => video.current?.pause()}>Pause</button>
        ) : (
          <button onClick={() => video.current?.play()}>Play</button>
        )}
        <button
          onClick={() => {
            if (video.current?.currentTime) video.current.currentTime += 2;
          }}
        >
          2+
        </button>
        <button
          onClick={async () => {
            if (document.pictureInPictureElement) {
              document.exitPictureInPicture();
            }

            await video.current?.requestPictureInPicture();
          }}
        >
          PIP
        </button>
        <button
          onClick={async () => {
            if (video.current) video.current.muted = !video.current?.muted;
          }}
        >
          Mudo
        </button>
        <select
          onChange={({ currentTarget }) => {
            if (video.current?.playbackRate)
              video.current.playbackRate = parseFloat(currentTarget.value);
          }}
        >
          <option value="1">1x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </select>
      </div>
    </div>
  );
};

export default Ref;
