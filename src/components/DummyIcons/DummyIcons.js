import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";

import "./DummyIcons.css";

const menuOptions = [
  ["Home", <HomeIcon sx={{ color: "white", mt: 2 }} />],
  ["Explore", <ExploreOutlinedIcon sx={{ color: "white" }} />],
  ["Subscriptions", <SubscriptionsOutlinedIcon sx={{ color: "white" }} />],
  ["Library", <VideoLibraryOutlinedIcon sx={{ color: "white" }} />],
];

const DummyIcons = () => {
  return (
    <div className="dummyIcons">
      <Box
        sx={{
          width: 75,
          height: "100%",
          backgroundColor: "#202020",
          color: "#fff",
          position: "fixed",
          mt: "50px",
        }}
        role="presentation"
      >
        <List>
          {menuOptions.map(([label, Icon]) => (
            <div className="listItems">
              <ListItem
                sx={{ display: "flex", flexDirection: "column" }}
                key={label}
              >
                <ListItemIcon sx={{ ml: 4 }}>{Icon}</ListItemIcon>
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{ fontSize: "10px" }}
                />
              </ListItem>
            </div>
          ))}
        </List>
      </Box>
    </div>
  );
};

export default DummyIcons;
