import { VideoSnippet } from "../types/types";
import { useNavigate } from "react-router-dom";

const PlaylistCard = ({
  snippet,
  id,
}: {
  snippet: VideoSnippet;
  id: string;
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/playlist/${id}`);
      }}
      className="cursor-pointer"
    >
      <div className="">
        <img
          className="object-cover h-[250px] w-full"
          src={snippet.thumbnails.high.url}
          alt="Playlist Thumbnail"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg">{snippet.channelTitle}</h3>
        <p className="flex justify-between items-center text-sm mt-2">
          <span>{snippet.title}</span>
          <span className="text-[--primary] font-bold">View details</span>
        </p>
      </div>
    </div>
  );
};

export default PlaylistCard;
