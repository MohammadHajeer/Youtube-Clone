import { VideoSnippet } from "../types/types";
import { useNavigate } from "react-router-dom";

const ChannelCard = ({
  snippet,
  id,
  style,
}: {
  snippet: VideoSnippet;
  id: string;
  style?: string;
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/channel/${id}`);
      }}
      className={`bg-[--skeleton] rounded-xl p-5 pb-0 cursor-pointer ${style}`}
    >
      <div className="w-60 h-60 mx-auto">
        <img
          className="rounded-full object-cover w-full h-full"
          src={snippet.thumbnails.high.url}
          alt="Channel Photo"
        />
      </div>
      <div className="p-5 text-center">
        <h2 className="text-2xl">{snippet.title}</h2>
        <p className="text-sm text-[--text-color-2]">{snippet.description}</p>
      </div>
    </div>
  );
};

export default ChannelCard;
