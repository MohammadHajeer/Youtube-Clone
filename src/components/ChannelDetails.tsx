import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getData } from "../utils/fetchData";
import { VideoSkeleton, VideoCard } from ".";
import { VideosProp, Channel, Video } from "../types/types";

const ChannelDetails = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState({} as VideosProp);
  const [channelDetails, setChannelDetails] = useState({} as Channel);
  useEffect(() => {
    getData(`search?part=snippet&order=date&channelId=${id}`).then((data) =>
      setVideos(data)
    );
    getData(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetails(data.items[0])
    );
  }, [id]);
  return (
    <div className="pt-[100px] max-md:pt-[160px] leading-none">
      <div className="bg-[--skeleton] lg:h-[400px] relative flex flex-row-reverse overflow-hidden max-lg:flex-col">
        <div className="lg:w-[40%]">
          {channelDetails?.brandingSettings?.image && (
            <img
              className=" object-cover w-full h-full"
              src={channelDetails.brandingSettings.image.bannerExternalUrl}
              alt="Channel Banner"
            />
          )}
          {!channelDetails.brandingSettings && (
            <div className="bg-[--skeleton] absolute inset-0 animate-pulse"></div>
          )}
        </div>
        <div className="lg:w-[60%]">
          {channelDetails.snippet && (
            <div className="flex flex-col items-start gap-4 overflow-y-scroll h-full max-lg:h-[200px] p-5">
              <div className="flex justify-between items-center w-full flex-wrap gap-5">
                <img
                  className="w-60 h-60 max-md:w-28 max-md:h-28 rounded-full shadow-2xl"
                  src={channelDetails.snippet.thumbnails.high.url}
                  alt="Channel Photo"
                />
                <span className="flex flex-col items-start text-4xl max-md:text-2xl">
                  <span className="text-[--primary] ">
                    {(+channelDetails.statistics
                      .subscriberCount).toLocaleString("en-US")}
                  </span>{" "}
                  subscribers
                </span>
              </div>
              <h2 className="text-4xl font-bold text-[--primary]">
                {channelDetails.brandingSettings.channel.title}
              </h2>
              <p className=" text-[--text-color-2] leading-normal">
                {channelDetails.brandingSettings.channel.description}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="container mt-20">
        <h2 className="text-4xl text-[--primary] text-center font-bold mb-10">
          VIDEOS
        </h2>
        <div className="grid-system w-full  max-md:p-5 container">
          {videos &&
            videos.items?.map((video: Video) => (
              <VideoCard
                key={video.id.videoId}
                id={video.id.videoId}
                snippet={video.snippet}
                channelPhoto={channelDetails?.snippet?.thumbnails.high.url}
              />
            ))}
          {!videos.items &&
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => <VideoSkeleton key={e} />)}
        </div>
      </div>
    </div>
  );
};

export default ChannelDetails;
