import YouTubeCard from "../YouTubeCard/YouTubeCard";

import { useState } from "react";

import "./YouTubeVids.css";

const YouTubeVids = ({
  youtubeObj,
  getTheHomepageVid,
  scrollY,
  wordFromChipBar,
  lazyLoadYoutubeObj,
  secondLazyLoadYoutubeObj,
  thirdLazyLoadYoutubeObj,
}) => {
  const [clickedVideo, setClickedVideo] = useState("");

  const getTheVid = (e) => {
    setClickedVideo(e);
  };

  // console.log(wordFromChipBar);

  const getTheClickedVid = () => {
    getTheHomepageVid(clickedVideo);
  };

  getTheClickedVid();

  return (
    <div className="cardSpacing">
      {youtubeObj.map((youtubeVid, i) => (
        <YouTubeCard
          key={i}
          image={youtubeVid.snippet.thumbnails.high.url}
          vidName={youtubeVid.snippet.title}
          channelName={youtubeVid.snippet.channelTitle}
          videoId={youtubeVid.id.videoId}
          getTheVid={(e) => {
            getTheVid(e);
          }}
          scrollY={scrollY}
          wordFromChipBar={wordFromChipBar}
        />
      ))}
      {scrollY > 3050 &&
        lazyLoadYoutubeObj.map((youtubeVid, i) => (
          <YouTubeCard
            key={i}
            image={youtubeVid.snippet.thumbnails.high.url}
            vidName={youtubeVid.snippet.title}
            channelName={youtubeVid.snippet.channelTitle}
            videoId={youtubeVid.id.videoId}
            getTheVid={(e) => {
              getTheVid(e);
            }}
            scrollY={scrollY}
            wordFromChipBar={wordFromChipBar}
          />
        ))}
      {scrollY > 6355 &&
        secondLazyLoadYoutubeObj.map((youtubeVid, i) => (
          <YouTubeCard
            key={i}
            image={youtubeVid.snippet.thumbnails.high.url}
            vidName={youtubeVid.snippet.title}
            channelName={youtubeVid.snippet.channelTitle}
            videoId={youtubeVid.id.videoId}
            getTheVid={(e) => {
              getTheVid(e);
            }}
            scrollY={scrollY}
            wordFromChipBar={wordFromChipBar}
          />
        ))}
      {scrollY > 10225 &&
        thirdLazyLoadYoutubeObj.map((youtubeVid, i) => (
          <YouTubeCard
            key={i}
            image={youtubeVid.snippet.thumbnails.high.url}
            vidName={youtubeVid.snippet.title}
            channelName={youtubeVid.snippet.channelTitle}
            videoId={youtubeVid.id.videoId}
            getTheVid={(e) => {
              getTheVid(e);
            }}
            scrollY={scrollY}
            wordFromChipBar={wordFromChipBar}
          />
        ))}
    </div>
  );
};

export default YouTubeVids;
