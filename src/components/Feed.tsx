import { SideBar, VideoSkeleton, Videos } from ".";
import { useState, useEffect } from "react";
import { getData } from "../utils/fetchData";
import { VideosProp } from "../types/types";

const Feed = () => {
  const [activeChannel, setActiveChannel] = useState({
    name: "One Message Foundation",
    category: "Dawah",
  });
  const [videos, setVideos] = useState({} as VideosProp);
  const [menu, setMenu] = useState(true);

  useEffect(() => {
    setVideos({} as VideosProp);
    getData(`search?part=snippet&q=${activeChannel.name}`).then((data) =>
      setVideos(data)
    );
  }, [activeChannel]);

  return (
    <div className=" flex gap-10 pt-[100px]">
      <SideBar
        menu={menu}
        setMenu={setMenu}
        activeChannel={activeChannel}
        setActiveChannel={setActiveChannel}
      />
      <div
        className={` ${
          menu ? "md:ml-[350px]" : "md:ml-[200px]"
        } mt-5 max-md:mt-48 max-sm:mt-60 p-5 transition-all  w-full`}
      >
        <h2 className="text-4xl font-semibold max-md:text-center">
          {activeChannel.name} <span className="text-[--primary]">Videos</span>
        </h2>
        <div className="grid-system mt-5 w-full">
          {videos && <Videos videos={videos} />}
          {!videos.items &&
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => <VideoSkeleton key={e} />)}
        </div>
      </div>
    </div>
  );
};

export default Feed;
