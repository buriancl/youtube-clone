import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

const RecommendedVideos = () => {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Reflecting On Joe Rogan's Election Night Special!"
          views="109,791 views"
          timestamp="Nov 9, 2020"
          channelImage="https://yt3.ggpht.com/a/AATXAJwOnLEuovfyBUMIYL1gJZyJRpTN8VtaHRFBTjUCbQ=s48-c-k-c0xffffffff-no-rj-mo"
          channel="Secular Talk"
          image="https://i.ytimg.com/an_webp/Zpn_XpnC4l0/mqdefault_6s.webp?du=3000&sqp=CMjxqf0F&rs=AOn4CLBYcLNoD4VyzfUOX7RsspGxTtNefA"
        />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};

export default RecommendedVideos;
