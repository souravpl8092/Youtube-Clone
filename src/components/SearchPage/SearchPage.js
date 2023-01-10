import Typography from "@mui/material/Typography";
import ListIcon from "@mui/icons-material/List";
import YouTubeCard from "../YouTubeCard/YouTubeCard";

import "./SearchPage.css";
import { useState } from "react";

const SearchPage = ({ youtubeObj, getTheSearchedVid, searchResults }) => {
  const [clickedVideo, setClickedVideo] = useState("");

  const getTheVid = (e) => {
    setClickedVideo(e);
  };

  const getTheClickedVid = () => {
    getTheSearchedVid(clickedVideo);
  };

  getTheClickedVid();

  return (
    <div className="searchPageBox">
      <div className="searchTiles">
        <div className="divider">
          <ListIcon
            sx={{
              mb: 1,
              "&:hover": {
                cursor: "pointer",
              },
            }}
          />
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "bolder",
              ml: 1,
              mt: 0.2,
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            FILTERS
          </Typography>
        </div>
        {youtubeObj.slice(0, 15).map((youtubeVid, i) => (
          <YouTubeCard
            key={i}
            image={youtubeVid.snippet.thumbnails.high.url}
            vidName={youtubeVid.snippet.title}
            channelName={youtubeVid.snippet.channelTitle}
            videoId={youtubeVid.id.videoId}
            getTheVid={getTheVid}
            searchResults={searchResults}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
