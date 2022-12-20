declare module "youtube-api-search" {
  export type YoutubeApiSearchType = (
    options: { key: string; term?: any },
    callback: Function
  ) => void;

  const a: YoutubeApiSearchType;
  export default a;
}
