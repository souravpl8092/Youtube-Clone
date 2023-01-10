import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SettingsInputAntennaOutlinedIcon from "@mui/icons-material/SettingsInputAntennaOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";

import { useState, useEffect } from "react";
import "./SideBar.css";

const SideBar = () => {
  const [state, setState] = useState(true);
  const [youtubeObj, setYoutubeObj] = useState([]);

  const queryStr = "WorldCup";

  useEffect(() => {
    const getYoutubeVidObject = async () => {
      const res = await fetch(
        `https://youtube-v31.p.rapidapi.com/search?q=${queryStr}&part=snippet%2Cid&regionCode=US&maxResults=7&order=date`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
            "x-rapidapi-key":
              "2895577f1amshc0eab35c83a8b00p17ae26jsnfc082aac1ef7",
          },
        }
      );

      const data = await res.json();

      setYoutubeObj(data.items);
    };

    getYoutubeVidObject();
  }, [queryStr]);

  const objectSnippet = youtubeObj.map((obj) => {
    return obj.snippet;
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const menuOptions = [
    ["Home", <HomeIcon sx={{ color: "white" }} />],
    ["Explore", <ExploreOutlinedIcon sx={{ color: "white" }} />],
    ["Subscriptions", <SubscriptionsOutlinedIcon sx={{ color: "white" }} />],
    ["Library", <VideoLibraryOutlinedIcon sx={{ color: "white" }} />],
    ["History", <HistoryOutlinedIcon sx={{ color: "white" }} />],
    ["Your Videos", <OndemandVideoOutlinedIcon sx={{ color: "white" }} />],
    ["Watch Later", <WatchLaterOutlinedIcon sx={{ color: "white" }} />],
    ["Show More", <KeyboardArrowDownOutlinedIcon sx={{ color: "white" }} />],
    ["YouTube Premium", <YouTubeIcon sx={{ color: "white" }} />], // POSITION 9 IN THE ARRAY
    ["Movies & Shows", <LocalMoviesOutlinedIcon sx={{ color: "white" }} />],
    ["Gaming", <SportsEsportsOutlinedIcon sx={{ color: "white" }} />],
    ["Live", <SettingsInputAntennaOutlinedIcon sx={{ color: "white" }} />],
    [
      "Fashion & Beauty",
      <SentimentVerySatisfiedOutlinedIcon sx={{ color: "white" }} />,
    ],
    ["Learning", <LightbulbOutlinedIcon sx={{ color: "white" }} />],
    ["Sports", <SportsSoccerOutlinedIcon sx={{ color: "white" }} />],
    ["Settings", <SettingsOutlinedIcon sx={{ color: "white" }} />], // POSITION 16 IN THE ARRAY
    ["Report history", <FlagOutlinedIcon sx={{ color: "white" }} />],
    ["Help", <HelpOutlineOutlinedIcon sx={{ color: "white" }} />],
    ["Send feedback", <FeedbackOutlinedIcon sx={{ color: "white" }} />],
  ];

  const copyrightLabels = [
    "About",
    "Press",
    "Copyright",
    "Contact us",
    "Creators",
    "Advertise",
    "Developers", // POSITIOn 6 IN THE ARRAY
    "Terms",
    "Privacy",
    "Policy & Safety",
    "How YouTube works",
    "Test new features",
  ];

  const list = (anchor) => (
    <Box
      sx={{
        width: 270,
        backgroundColor: "#202020",
        color: "#fff",
        height: "100%",
        overflowY: "scroll",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="burgerMenu">
        <MenuIcon sx={{ color: "white", mt: 3.5, ml: 2, mb: 3 }} />

        <div className="youtubeLogo">
          <YouTubeIcon sx={{ color: "red", fontSize: "35px", mt: 3 }} />

          <p className="youtubeName">YouTube</p>
        </div>
      </div>

      <List>
        {menuOptions.slice(0, 3).map(([label, Icon], i) => (
          <div
            className={`${
              i === 0 ? "listItems2 firstItemOnList" : "listItems2"
            }`}
          >
            <ListItem button key={label}>
              <ListItemIcon>{Icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </div>
        ))}
      </List>
      <Divider sx={{ backgroundColor: "#2c2c2c" }} />

      <List>
        {menuOptions.slice(3, 8).map(([label, Icon]) => (
          <div className="listItems2">
            <ListItem button key={label}>
              <ListItemIcon>{Icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </div>
        ))}
      </List>
      <Divider sx={{ backgroundColor: "#2c2c2c" }} />
      <Typography
        variant="subtitle2"
        noWrap
        component="div"
        sx={{
          ml: 3,
          mt: 2,
          color: "#aaa",
          fontWeight: "bolder",
          letterSpacing: "1px",
        }}
      >
        SUBSCRIPTIONS
      </Typography>
      <List>
        {objectSnippet.map((snippet, i) => (
          <div className="listItems2">
            <ListItem button key={i}>
              <ListItemIcon>
                <img
                  src={snippet.thumbnails.high.url}
                  className="imagesForChannelSubs"
                  alt=""
                />
              </ListItemIcon>
              <ListItemText primary={snippet.channelTitle} />
            </ListItem>
          </div>
        ))}
        <div className="listItems2">
          <ListItem button>
            <ListItemIcon>
              <KeyboardArrowDownOutlinedIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Show More" />
          </ListItem>
        </div>
      </List>
      <Divider sx={{ backgroundColor: "#2c2c2c" }} />
      <Typography
        variant="subtitle2"
        noWrap
        component="div"
        sx={{
          ml: 3,
          mt: 2,
          color: "#aaa",
          fontWeight: "bolder",
          letterSpacing: "1px",
        }}
      >
        MORE FROM YOUTUBE
      </Typography>
      <List>
        {menuOptions.slice(8, 15).map(([label, Icon]) => (
          <div className="listItems2">
            <ListItem button key={label}>
              <ListItemIcon>{Icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </div>
        ))}
      </List>
      <Divider sx={{ backgroundColor: "#2c2c2c", fontWeight: "bolder" }} />
      <List>
        {menuOptions.slice(15, 19).map(([label, Icon]) => (
          <div className="listItems2">
            <ListItem button key={label}>
              <ListItemIcon>{Icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </div>
        ))}
      </List>

      <Divider sx={{ backgroundColor: "#2c2c2c" }} />
      <div className="copyright">
        {copyrightLabels.slice(0, 7).map((label) => (
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: "13px",
              mr: "5px",
              fontWeight: "bolder",
              color: "#aaaaaa",
            }}
            key={label}
          >
            {label}
          </Typography>
        ))}
      </div>

      <div className="copyright copyright2">
        {copyrightLabels.slice(7, 13).map((label) => (
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: "13px",
              mr: "5px",
              fontWeight: "bolder",
              color: "#aaaaaa",
            }}
            key={label}
          >
            {label}
          </Typography>
        ))}
      </div>

      <Typography
        variant="subtitle2"
        noWrap
        component="div"
        sx={{
          m: 3,
          color: "#6c6c6c",
          fontSize: "12px",
        }}
      >
        © 2021 Google LLC
      </Typography>
    </Box>
  );

  return (
    <div className="sideBarBurgerMenu">
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon sx={{ color: "white" }} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SideBar;
