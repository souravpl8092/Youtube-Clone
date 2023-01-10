import VideoCard from "./VideoCard";
import VideoTiles from "./VideoTiles";
import { useState } from "react";

import "./VideoPage.css";

const VideoPage = (props) => {
  const [clickedSideVid, setClickedSideVid] = useState();

  const { homePageClickedVid, searchPageClickedVid, youtubeObj } = props.props;
  const { channelName, image, vidName, videoId } = homePageClickedVid
    ? homePageClickedVid
    : searchPageClickedVid;

  // console.log(props);

  const handleClickedSideVid = (e) => {
    setClickedSideVid(e);
  };

  const youtubeURL = `https://youtube.com/embed/${
    clickedSideVid ? clickedSideVid.id.videoId : videoId
  }`;

  const videoCardChannelName = clickedSideVid
    ? clickedSideVid.snippet.channelTitle
    : channelName;

  const videoCardImage = clickedSideVid
    ? clickedSideVid.snippet.thumbnails.high.url
    : image;

  const videoCardVidName = clickedSideVid
    ? clickedSideVid.snippet.title
    : vidName;

  return (
    <div className="videoPageContainer">
      <div className="mainVideo">
        <VideoCard
          url={youtubeURL}
          channelName={videoCardChannelName}
          image={videoCardImage}
          vidName={videoCardVidName}
        />
      </div>
      <div className="sideVideos">
        <VideoTiles
          youtubeObj={youtubeObj}
          handleClickedSideVid={handleClickedSideVid}
        />
      </div>
    </div>
  );
};

export default VideoPage;
