import { VideoCard, ChannelCard, PlaylistCard } from ".";
import { VideosProp, Video } from "../types/types";

const Videos = ({ videos }: { videos: VideosProp }) => {
  return (
    <>
      {videos.items?.map((video: Video) =>
        video.id.playlistId ? (
          <PlaylistCard
            key={video.id.playlistId}
            id={video.id.playlistId}
            snippet={video.snippet}
          />
        ) : video.id.channelId ? (
          <ChannelCard
            key={video.id.channelId}
            id={video.id.channelId}
            snippet={video.snippet}
          />
        ) : (
          <VideoCard
            key={video.id.videoId}
            id={video.id.videoId}
            snippet={video.snippet}
            channelPhoto={videos.items[0].snippet.thumbnails?.high.url}
          />
        )
      )}
    </>
  );
};

export default Videos;
