import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { GlobalContext } from "../GlobalState";
import SearchBox from "./SearchBox";
import {
  AppBar,
  Toolbar,
  IconButton,
  Slide
} from "@material-ui/core/";

import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import { Search } from "@material-ui/icons/";


function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function SimpleAppBar(props) {
  const [{ searchState }, dispatch] = useContext(GlobalContext);

  const setMenuOpen = data => {
    console.log(data);
    dispatch({ type: "setMenuOpen", snippet: data });
  };
  const setSearchState = React.useCallback(
    data => {
      console.log(data);
      dispatch({ type: "setSearchState", snippet: data });
    },
    [dispatch]
  );

  React.useEffect(() => {
    // if the page is on search we will change the search state
    const changeAppBar = () => {
      const path = props.history.location.pathname;
      if (path === "/search") {
        setSearchState("searching");
      } else {
        setSearchState("home");
      }
      console.log("history change detected in app bar");
    };

    changeAppBar();
    const unlisten = props.history.listen(location => {
      changeAppBar();
    });
  }, [setSearchState, props.history]);

  const toggleSearch = () => {
    if (searchState === "home") {
      return (
        <>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={() => setMenuOpen(true)}
          >
            <h1 className="simpleAppBar" style={{ fontFamily: "'Pacifico', cursive", margin: 0, padding: 0, fontSize: "24px", height: "45px", width: "45px" }}>M</h1>
          </IconButton>

          <IconButton
            onClick={() => setSearchState("clicked")}
            color="inherit"
            aria-label="Search"
          >
            <Search />
          </IconButton>
        </>
      );
    } else {
      return <SearchBox />;
    }
  };

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar id="navbar" position="sticky">
          <Toolbar style={{ justifyContent: "space-between" }}>{toggleSearch()}</Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
}

export default withRouter(SimpleAppBar);
