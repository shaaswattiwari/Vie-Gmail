import React from "react";
import classes from "./Header.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useSelector, useDispatch } from "react-redux";
import { setinput, setisfocused } from "../store/Slices/Input";
import { useHistory } from "react-router-dom";

function Header({ selected }) {
  const history = useHistory();
  const input = useSelector((store) => store.input.input);
  const isfocused = useSelector((store) => store.input.isfocused);
  const dispatch = useDispatch();
  const onKeyHandler = (e) => {
    if (e.key === "Enter" && input.length) {
      history.push(`/${selected}/search/${input.trim()}`);
      dispatch(setinput(""));
    }
  };
  const onChangeHandler = (e) => {
    dispatch(setinput(e.target.value));
  };
  const onFocusHandler = (e) => {
    dispatch(setisfocused(true));
  };
  const onBlurHandler = (e) => {
    dispatch(setinput(""));
    dispatch(setisfocused(false));
  };
  return (
    <div className={classes.header}>
      <div className={classes.header__left}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt="Gmail Logo"
        />
      </div>
      <div className={classes.header__middle}>
        <SearchIcon style={{ color: "grey" }} />

        <p className={`${isfocused && classes.show}`}>In {selected}</p>
        <input
          type="text"
          onChange={onChangeHandler}
          placeholder="Search Mail"
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          value={input}
          onKeyDown={onKeyHandler}
        />
        <p className={`${isfocused && classes.show}`}>Press Enter</p>

        <ArrowDropDownIcon className={classes.header__inputCaret} />
      </div>
      <div className={classes.header__right}>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <Avatar />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
