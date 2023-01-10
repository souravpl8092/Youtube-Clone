import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChipTags from "./ChipTags";
import { useMediaQuery } from "react-responsive";

import { useState, useEffect } from "react";

import "./ChipBar.css";

const ChipBar = ({ getWordFromChipBar, wordFromChipBar }) => {
  const [randomWordArray, setRandomWordArray] = useState([]);
  const [wordFromChipTag, setWordFromChipTag] = useState("");

  const isSmallerScreen = useMediaQuery({ query: "(max-width: 800px)" });

  useEffect(() => {
    const getRandomWords = async () => {
      const res = await fetch(
        "https://random-words5.p.rapidapi.com/getMultipleRandom?count=20",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "random-words5.p.rapidapi.com",
            "x-rapidapi-key":
              "2895577f1amshc0eab35c83a8b00p17ae26jsnfc082aac1ef7",
          },
        }
      );

      const data = await res.json();

      setRandomWordArray(data);
    };

    getRandomWords();
  }, []);

  const getSelectedWord = (wordFromChipTags) => {
    setWordFromChipTag(wordFromChipTags);
    getWordFromChipBar(wordFromChipTags);
  };

  const resetWordFromChipTags = () => {
    window.scrollTo(0, 0);
    getWordFromChipBar("FAANG Companies");
    setWordFromChipTag("FAANG Companies");
  };

  return (
    <div className="mainBar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#202020",
            width: "100%",
            borderBottom: "1.5px solid #343434",
            borderTop: "1.5px solid #343434",
            boxShadow: "none",
          }}
        >
          <Toolbar variant="dense">
            <Chip
              label="All"
              className={
                wordFromChipTag !== wordFromChipBar ||
                wordFromChipTag === "FAANG Companies"
                  ? "active"
                  : "chip"
              }
              onClick={resetWordFromChipTags}
            />
            {randomWordArray.map((word, i) => (
              <ChipTags
                word={word}
                getSelectedWord={getSelectedWord}
                key={i}
                wordFromChipTag={wordFromChipTag}
                wordFromChipBar={wordFromChipBar}
              />
            ))}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                position: "absolute",
                backgroundColor: "#212121ee",
                "&:hover": {
                  backgroundColor: "#212121ee",
                },
                height: 45,
                right: 75,
                width: 70,
                borderRadius: 0,
              }}
              className="chevronRight"
            >
              <ChevronRightIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default ChipBar;
