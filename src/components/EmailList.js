import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import classes from "./EmailList.module.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import EmailRow from "./EmailRow";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function EmailList({ tags }) {
  const allmails = useSelector((store) => store.allmails.allmails);
  const { tag, query } = useParams();
  return (
    <div className={classes.emailList}>
      <div className={classes.emailList__settings}>
        <div className={classes.emailList__settingsLeft}>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className={classes.emailList__settingsRight}>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className={classes.emailList__list}>
        {allmails.length ? (
          allmails
            .filter((mail) => {
              if (!query) {
                if (tags !== "all") {
                  return mail.tag === tags;
                } else {
                  return true;
                }
              } else {
                if (tag !== "all") {
                  return (
                    mail.tag === tag &&
                    mail.subject.toLowerCase().includes(query)
                  );
                } else {
                  return true && mail.subject.toLowerCase().includes(query);
                }
              }
            })
            .map((mail) => EmailRow(mail))
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://i.ibb.co/zX6bdZw/Spinner-0-9s-264px.png"
              alt="loading"
            ></img>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmailList;
