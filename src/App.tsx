import { HashRouter, Routes, Route } from "react-router-dom";
import {
  ChannelDetails,
  Feed,
  Header,
  NotFound,
  PlaylistDetails,
  VideoDetails,
} from "./components";

const App = () => {
  return (
    <HashRouter>
      <div className="bg-[--bg-color] min-h-screen text-[--text-color] overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/playlist/:id" element={<PlaylistDetails />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
