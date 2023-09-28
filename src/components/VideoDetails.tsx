import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../utils/fetchData";
import { VideoDetail, Channel, VideosProp, Video } from "../types/types";
import { useNavigate } from "react-router-dom";
import { VideoCard, VideoSkeleton } from ".";

const VideoDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState({} as VideoDetail);
  const [channelDetails, setChannelDetails] = useState({} as Channel);
  const [videos, setVideos] = useState({} as VideosProp);
  console.log(videos);

  const getDetails = (channelId: string): void => {
    getData(`channels?part=snippet&id=${channelId}`).then((data) =>
      setChannelDetails(data.items[0])
    );
    getData(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data)
    );
  };

  useEffect(() => {
    getData(`videos?part=snippet&id=${id}`).then((data) => {
      setVideoDetails(data.items[0]);
      getDetails(data.items[0]?.snippet.channelId);
    });
  }, [id]);
  return (
    <div className="pt-[140px] flex gap-10 p-10 max-md:flex-col">
      <div className="w-[75%] max-md:w-full h-[80vh] flex flex-col rounded-2xl overflow-hidden">
        <iframe
          allowFullScreen
          className="bg-[--skeleton] w-full flex-1"
          src={`https://www.youtube.com/embed/${id}`}
        ></iframe>
        <div className="bg-[--skeleton] p-5 flex flex-col gap-5">
          <p>{videoDetails?.snippet?.title}</p>
          {channelDetails.snippet && (
            <div
              onClick={() => {
                navigate(`/channel/${videoDetails.snippet.channelId}`);
              }}
              className="flex items-center gap-10 cursor-pointer"
            >
              <img
                className="w-20 h-20 rounded-full"
                src={channelDetails.snippet.thumbnails.high.url}
                alt="Channel Photo"
              />
              <span className="text-2xl text-[--primary] font-bold">
                {channelDetails.snippet.title}
              </span>
            </div>
          )}
          <div className="flex justify-between items-center">
            <p className="bg-[--bg-color] flex rounded-lg overflow-hidden">
              <span className="w-10 h-10 bg-[--primary] flex justify-center items-center">
                <i className="fa-solid fa-thumbs-up"></i>
              </span>
              <span className="text-[--primary] px-5 font-bold flex items-center">
                123123
              </span>
            </p>
            <p className="bg-[--bg-color] flex rounded-lg overflow-hidden">
              <span className="w-10 h-10 bg-[--primary] flex justify-center items-center">
                <i className="fa-solid fa-eye"></i>
              </span>
              <span className="text-[--primary] px-5 font-bold flex items-center">
                123123
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 gap md:h-[80vh] md:overflow-y-scroll rounded-2xl md:pr-3">
        {videos.items?.map((video: Video) => (
          <div>
            <VideoCard
              style="hidden"
              key={video.id.videoId}
              id={video.id.videoId}
              snippet={video.snippet}
              channelPhoto={channelDetails.snippet.thumbnails.high.url}
            />
          </div>
        ))}
        {!videos.items &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => <VideoSkeleton key={e} />)}
      </div>
    </div>
  );
};

export default VideoDetails;
