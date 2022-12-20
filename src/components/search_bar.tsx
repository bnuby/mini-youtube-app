import { FunctionComponent, useEffect, useState } from "react";
import { List } from "../utils/youtube";

interface Props {
  onFetchVideo: (videos: Video[]) => void;
}

let timeout: number;
const debounceFunc = (callback: Function, sleep: number = 1000): void => {
  if (timeout) clearTimeout(timeout);
  timeout = null;
  timeout = setTimeout(callback, sleep);
};

export const SearchBar: FunctionComponent<Props> = ({ onFetchVideo }) => {
  const [state, setState] = useState({
    text: "",
  });

  useEffect(() => {
    debounceFunc(() => {
      if (state.text)
        List(state.text)
          .then((links: any[]) => {
            onFetchVideo(links);
          })
          .catch(console.error);
      else onFetchVideo([]);
    }, 500);
  }, [state.text]);

  return (
    <div className="search_bar">
      <input
        value={state.text}
        onChange={(e) => {
          const value = e.currentTarget.value;
          console.log(value);
          setState((draft) => {
            return {
              ...draft,
              text: value,
            };
          });
        }}
      />
    </div>
  );
};
