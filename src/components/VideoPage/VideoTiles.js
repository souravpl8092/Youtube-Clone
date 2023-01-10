import Typography from "@mui/material/Typography";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import PlaylistPlayOutlinedIcon from "@mui/icons-material/PlaylistPlayOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { useState, useEffect } from "react";

import "./VideoTiles.css";

const VideoTiles = ({ youtubeObj, handleClickedSideVid }) => {
  const [clickedSideVid, setClickedSideVid] = useState();

  const TIME_ARR = ["hours", "days", "months", "years"];

  const [uploadTime, setuploadTime] = useState(Math.ceil(Math.random() * 10));

  const [timeFrame, setTimeFrame] = useState(
    TIME_ARR[Math.floor(Math.random() * 4)]
  );

  const [views, setViews] = useState(Math.ceil(Math.random() * 20));

  const getRandomArbitrary = (min, max) => {
    return Math.ceil(Math.random() * (max - min) + min);
  };

  const tenResults = youtubeObj.slice(6, 16);

  const [timeStamp, setTimeStamp] = useState({
    minutes: getRandomArbitrary(59, 10),
    seconds: getRandomArbitrary(59, 10),
  });

  useEffect(() => {
    setuploadTime(Math.ceil(Math.random() * 10));
    setViews(Math.ceil(Math.random() * 20));
    setTimeStamp({
      minutes: getRandomArbitrary(59, 10),
      seconds: getRandomArbitrary(59, 10),
    });
  }, []);

  const handleClickedVid = () => {
    handleClickedSideVid(clickedSideVid);
  };

  handleClickedVid();

  console.log(clickedSideVid);

  return (
    <div>
      {tenResults.map((vid, i) => (
        <div
          className="sideContainer"
          key={i}
          onClick={() => {
            setClickedSideVid(vid);
            window.scrollTo(0, 0);
          }}
        >
          <div className="sideImage">
            <img src={vid.snippet.thumbnails.medium.url} alt="" />
          </div>

          <div className="videoInfo">
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bolder" }}
              className="vidTitle"
            >
              {vid.snippet.title.split(" ").length > 7
                ? vid.snippet.title.split(" ").slice(0, 7).join(" ") + "..."
                : vid.snippet.title}
            </Typography>
            <Typography
              varaiant="subtitle2"
              sx={{ fontSize: "80%", color: "#AAAAAA", mt: "5px" }}
            >
              {vid.snippet.channelTitle}
            </Typography>
            <Typography
              varaiant="subtitle2"
              sx={{ fontSize: "80%", color: "#AAAAAA", mb: "15px" }}
            >
              {`${views}K views ·  ${uploadTime} ${timeFrame} ago`}
            </Typography>

            <div className="vidIcons">
              <div className="clockwork">
                <div className="icon">
                  <WatchLaterOutlinedIcon />
                </div>
              </div>

              <div className="clockwork">
                <div className="icon">
                  <PlaylistPlayOutlinedIcon />
                </div>
              </div>

              <div className="dots">
                <MoreVertOutlinedIcon sx={{ mt: 11, ml: 23 }} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoTiles;
