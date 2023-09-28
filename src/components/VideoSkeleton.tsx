const VideoSkeleton = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-xl">
      <div className="h-[200px] bg-[--skeleton] animate-pulse"></div>
      <div className="flex gap-5 items-center p-5">
        <div className="rounded-full w-20 h-20 bg-[--skeleton] animate-pulse"></div>
        <div className="flex-1 flex flex-col gap-3">
          <span className="h-5 w-full bg-[--skeleton] animate-pulse"></span>
          <span className="h-5 w-full bg-[--skeleton] animate-pulse"></span>
        </div>
      </div>
    </div>
  );
};

export default VideoSkeleton;
