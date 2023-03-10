import { FunctionComponent } from "react";

interface Props {
  video: Video;
}

export const VideoDetail: FunctionComponent<Props> = ({ video }) => {
  if (!video) return null;
  const videoId: string = video.id.videoId;
  const url: string = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={url} className="embed-responsive-item"></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};
