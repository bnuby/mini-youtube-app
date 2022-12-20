import { FunctionComponent } from "react";
import { VideoListItem } from "./video_list_item";

interface Props {
  videos: Video[];
  onVideoClick: (i: Video) => void;
}

export const VideoList: FunctionComponent<Props> = ({
  videos,
  onVideoClick,
}) => {
  return (
    <ul className="col-12 col-xs-6 col-xl-3 col-md-4 list-group">
      {videos.map((video) => (
        <VideoListItem
          key={video.etag}
          video={video}
          onVideoClick={onVideoClick}
        />
      ))}
    </ul>
  );
};
