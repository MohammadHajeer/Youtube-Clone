import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getData } from "../utils/fetchData";
import { ChannelCard, VideoSkeleton, VideoCard } from ".";
import {
  PlaylistVideosProp,
  VideoSnippet,
  Channel,
  PlaylistVideo,
} from "../types/types";

const PlaylistDetails = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState({} as PlaylistVideosProp);
  const [playlistDetails, setPlaylistDetails] = useState({} as VideoSnippet);
  const [channelDetails, setChannelDetails] = useState({} as Channel);
  console.log(videos);
  const getChannelDetails = (id: string): void => {
    getData(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetails(data.items[0])
    );
  };

  useEffect(() => {
    getData(`playlistItems?part=snippet&playlistId=${id}`).then((data) =>
      setVideos(data)
    );
    getData(`playlists?part=snippet&id=${id}`).then((data) => {
      setPlaylistDetails(data.items[0].snippet);
      getChannelDetails(data.items[0].snippet.channelId);
    });
  }, [id]);

  return (
    <div className="pt-[100px] leading-none">
      <div className="bg-[--primary] h-[400px] relative">
        {channelDetails.snippet && (
          <div className="absolute flex flex-col gap-5 items-center bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
            <ChannelCard
              snippet={channelDetails.snippet}
              id={playlistDetails.channelId}
              style="bg-transparent shadow-2xl w-96 max-w-[90%]"
            />
          </div>
        )}
      </div>
      <div className="grid-system w-full mt-60 container">
        {channelDetails?.snippet &&
          videos.items?.map((video: PlaylistVideo) => (
            <VideoCard
              key={video.id}
              id={video.id}
              snippet={video.snippet}
              channelPhoto={channelDetails.snippet.thumbnails.high.url}
            />
          ))}
        {!videos.items &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => <VideoSkeleton key={e} />)}
      </div>
    </div>
  );
};

export default PlaylistDetails;
