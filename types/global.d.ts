export {};

declare global {
  interface VideoThumbnail {
    url: string;
    width: number;
    height: number;
  }

  interface Video {
    etag: string;
    id: { kind: string; videoId: string };
    kind: string;
    snippet: {
      channelId: string;
      channelTitle: string;
      description: string;
      liveBroadcastContent: string;
      publishTime: string;
      publishAt: string;
      thumbnails: {
        default: VideoThumbnail;
        high: VideoThumbnail;
        medium: VideoThumbnail;
      };
      title: string;
    };
  }
}
