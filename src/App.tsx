import { ReactElement, useState } from "react";
import { SearchBar } from "./components/search_bar";
import "./App.css";
import { VideoList } from "./components/video_list";
import { VideoDetail } from "./components/video_detail";

const App = (): ReactElement => {
  const [state, setState] = useState<{
    videos: Video[];
    selectedVideo: Video | null;
  }>({ videos: [], selectedVideo: null });
  return (
    <div className="App container-fluid">
      <SearchBar
        onFetchVideo={(data) => {
          setState({
            videos: data,
            selectedVideo: data?.[0] ?? null,
          });
        }}
      />
      {!!state.videos.length && (
        <div className="row content">
          <VideoDetail video={state.selectedVideo} />
          <VideoList
            videos={state.videos}
            onVideoClick={(v: Video) =>
              setState((prevState) => ({
                ...prevState,
                selectedVideo: v,
              }))
            }
          />
        </div>
      )}
    </div>
  );
};

export default App;
