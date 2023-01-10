import PrimarySearchAppBar from "./components/PrimarySearchAppBar/PrimarySearchAppBar";
import YouTubeVids from "./components/YouTubeVids/YouTubeVids";
import SearchPage from "./components/SearchPage/SearchPage";
import VideoPage from "./components/VideoPage/VideoPage";
import DummyIcons from "./components/DummyIcons/DummyIcons";
import useScrollPosition from "@react-hook/window-scroll";
import { useMediaQuery } from "react-responsive";

import { useState, useEffect } from "react";

import "./App.css";
import ChipBar from "./components/ChipBar/ChipBar";

const App = () => {
  const [youtubeObj, setYoutubeObj] = useState([]);
  const [searchResults, setSearchResults] = useState("");
  const [searchPageClickedVid, setSearchPageClickedVid] = useState("");
  const [homePageClickedVid, setHomePageClickedVid] = useState();
  const [deleteTheSearchResults, setDeleteTheSearchResults] = useState(false);
  const [wordFromChipBar, setWordFromChipBar] = useState("FAANG Companies");
  const [queryStr, setQueryStr] = useState("FAANG Companies");

  const [lazyLoadYoutubeObj, setLazyLoadYoutubeObj] = useState([]);
  const [secondLazyLoadYoutubeObj, setSecondLazyLoadYoutubeObj] = useState([]);
  const [thirdLazyLoadYoutubeObj, setThirdLazyLoadYoutubeObj] = useState([]);

  const isSmallerScreen = useMediaQuery({ query: "(max-width: 800px)" });

  const endlessScrollSearchRequests = [
    "cat videos",
    "vegan recipes",
    "Maldives holiday",
  ];

  const scrollY = useScrollPosition(60);

  useEffect(() => {
    const getYoutubeVidObject = async () => {
      const res = await fetch(
        `https://youtube-v31.p.rapidapi.com/search?q=${queryStr}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,
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

  // ANOTHER CALL TO THE API TO ADD MORE VIDEOS WHEN DOCUMENT HAS REACHED CERTAIN HEIGHT - IMITATE ENDLESS SCROLL

  useEffect(() => {
    const getYoutubeVidObject = async () => {
      const res = await fetch(
        `https://youtube-v31.p.rapidapi.com/search?q=${endlessScrollSearchRequests[0]}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,
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

      setLazyLoadYoutubeObj(data.items);
    };

    const getSecondYoutubeVidObject = async () => {
      const res = await fetch(
        `https://youtube-v31.p.rapidapi.com/search?q=${endlessScrollSearchRequests[1]}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,
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

      setSecondLazyLoadYoutubeObj(data.items);
    };

    const getThirdYoutubeVidObject = async () => {
      const res = await fetch(
        `https://youtube-v31.p.rapidapi.com/search?q=${endlessScrollSearchRequests[2]}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,
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

      setThirdLazyLoadYoutubeObj(data.items);
    };

    getYoutubeVidObject();
    getSecondYoutubeVidObject();
    getThirdYoutubeVidObject();
  }, []);

  useEffect(() => {}, []);

  useEffect(() => {
    clearingSearchResult();
  }, [searchPageClickedVid, homePageClickedVid]);

  useEffect(() => {
    if (searchResults) {
      setQueryStr(searchResults);
    } else if (wordFromChipBar) {
      setQueryStr(wordFromChipBar);
    }
  }, [searchResults, wordFromChipBar]);

  // FUNCTION TO CHANGE THE QUERY STRING USING THE INPUT APPBAR
  const changeQueryString = (e) => {
    setSearchResults(e);
    setDeleteTheSearchResults(false);
    setHomePageClickedVid();
    setWordFromChipBar("FAANG Companies");
  };

  // FUNCTION TO GET THE VIDEO OBJECT FROM A SEARCHED RESULT
  const getTheSearchedVid = (e) => {
    setSearchPageClickedVid(e);
  };

  // FUNCTION TO COLLECT THE DATA NEEDED TO DISPLAY ON THE HOMEPAGE
  const getTheHomepageVid = (e) => {
    setHomePageClickedVid(e);
  };

  // DATA RECEIVED WHEN YOU CLICK ON A VIDEO ON THE HOMEPAGE OR SEARCH PAGE,
  // ALSO A SLICED ARRAY OF PART OF THE HOMEPAGE OR SEARCH RESULTS
  const videoDataFromClickedVid = {
    homePageClickedVid,
    youtubeObj,
    searchPageClickedVid,
  };

  const clearVideoData = (e) => {
    setHomePageClickedVid(e);
    setSearchPageClickedVid(e);
    setDeleteTheSearchResults(e);
  };

  const clearingSearchResult = () => {
    if (
      (searchPageClickedVid && !deleteTheSearchResults) ||
      (homePageClickedVid && !deleteTheSearchResults)
    ) {
      setDeleteTheSearchResults(true);
    }
  };

  const getWordFromChipBar = (newSearchWord) => {
    setWordFromChipBar(newSearchWord);
  };

  return (
    <div>
      <PrimarySearchAppBar
        changeQueryString={changeQueryString}
        clearVideoData={clearVideoData}
      />
      {!searchResults && !homePageClickedVid && !searchPageClickedVid && (
        <ChipBar
          getWordFromChipBar={getWordFromChipBar}
          wordFromChipBar={wordFromChipBar}
        />
      )}
      <div className="formatting">
        {!deleteTheSearchResults && !isSmallerScreen && <DummyIcons />}

        {!searchResults && !homePageClickedVid && !searchPageClickedVid && (
          <YouTubeVids
            youtubeObj={youtubeObj}
            getTheHomepageVid={getTheHomepageVid}
            scrollY={scrollY}
            wordFromChipBar={wordFromChipBar}
            lazyLoadYoutubeObj={lazyLoadYoutubeObj}
            secondLazyLoadYoutubeObj={secondLazyLoadYoutubeObj}
            thirdLazyLoadYoutubeObj={thirdLazyLoadYoutubeObj}
            isSmallerScreen={isSmallerScreen}
          />
        )}

        {searchResults &&
          (!searchPageClickedVid || !deleteTheSearchResults) && (
            <SearchPage
              youtubeObj={youtubeObj}
              getTheSearchedVid={getTheSearchedVid}
              scrollY={scrollY}
              searchResults={searchResults}
              deleteTheSearchResults={deleteTheSearchResults}
            />
          )}

        {(homePageClickedVid || searchPageClickedVid) &&
          deleteTheSearchResults && (
            <VideoPage props={videoDataFromClickedVid} scrollY={scrollY} />
          )}
      </div>
    </div>
  );
};

export default App;
