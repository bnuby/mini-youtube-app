import { FunctionComponent } from "react";
interface Props {
  video: Video;
  onVideoClick: (i: Video) => void;
}
export const VideoListItem: FunctionComponent<Props> = ({
  video,
  onVideoClick,
}) => {
  return (
    <li className="list-group-item" onClick={() => onVideoClick(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img
            className="media-object"
            alt={video.snippet.title}
            src={video.snippet.thumbnails.default.url}
            width={video.snippet.thumbnails.default.width}
            height={video.snippet.thumbnails.default.height}
          />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};
