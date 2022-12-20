import YoutubeSearchApi from "youtube-api-search";

const APIKEY = process.env.REACT_APP_API_KEY;

const cache = new Map();

export const List = async (term: string = ""): Promise<any[]> => {
  /**
   * 1. get data from youtube api
   * 2. cache the response value to prevent recalling api
   */
  return await new Promise((resolve) => {
    // check cache, if cache has value just get the value from cache
    if (cache.get(term)) return resolve(cache.get(term));
    console.log("get video from youtube");
    YoutubeSearchApi({ key: APIKEY, term }, (videos) => {
      // cache the value
      cache.set(term, videos);
      resolve(videos);
    });
  });
};
