import { VideoSnippet } from "../types/types";
import { useNavigate } from "react-router-dom";

const VideoCard = ({
  snippet,
  channelPhoto,
  id,
  style,
}: {
  snippet: VideoSnippet;
  channelPhoto: string;
  id: string;
  style?: string;
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/video/${id}`);
      }}
      className="rounded-lg overflow-hidden shadow-xl cursor-pointer"
    >
      <div className="bg-[--skeleton]">
        <img
          className=" object-cover w-full h-[250px] max-sm:h-[200px]"
          src={snippet?.thumbnails.high?.url}
          alt="Video Thumbnail"
        />
      </div>
      <div className="flex gap-5 items-center p-5">
        <div
          className={`rounded-full w-20 h-20 max-sm:w-16 max-sm:h-16 bg-[--skeleton] overflow-hidden ${style}`}
        >
          <img
            className="object-cover"
            src={channelPhoto}
            alt="channel photo"
          />
        </div>
        <div className="max-sm:w-40 w-40 flex flex-col gap-3">
          <span
            title={snippet.title}
            className="overflow-hidden whitespace-nowrap w-[250px] overflow-ellipsis block"
          >
            {snippet.title}
          </span>
          <span className="text-[--text-color-2] text-sm flex flex-col">
            {snippet.channelTitle}
            <span>{calculateDate(snippet.publishedAt)}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

const calculateDate = (publishedAt: string): string => {
  const nowDate: number = Date.now();
  const publishedDate: number = new Date(publishedAt).getTime();
  const timeIntervalInHours: number = Math.floor(
    (nowDate - publishedDate) / 1000 / 60 / 60
  );
  const timeIntervalInDays: number = Math.floor(timeIntervalInHours / 24);
  const timeIntervalInMonths: number = Math.floor(timeIntervalInDays / 30);
  const timeIntervalInYears: number = Math.floor(timeIntervalInMonths / 12);

  if (timeIntervalInHours >= 24) {
    if (timeIntervalInDays >= 30 && timeIntervalInDays <= 365) {
      return time(timeIntervalInMonths, "month");
    } else if (timeIntervalInDays >= 365) {
      return time(timeIntervalInYears, "year");
    } else {
      return time(timeIntervalInDays, "day");
    }
  } else {
    return time(timeIntervalInHours, "hour");
  }
};

function time(timeInterval: number, unit: string): string {
  return `${timeInterval} ${timeInterval > 1 ? `${unit}s` : unit}  ago`;
}
