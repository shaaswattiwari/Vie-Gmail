import classes from "./EmailRow.module.css";
import React from "react";
import { IconButton, Checkbox } from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import ArchiveIcon from "@material-ui/icons/Archive";
import DeleteIcon from "@material-ui/icons/Delete";
import MarkunreadMailboxIcon from "@material-ui/icons/MarkunreadMailbox";
import SnoozeIcon from "@material-ui/icons/Snooze";
import { Link } from "react-router-dom";

function EmailRow(mail) {
  return (
    <div className={classes.emailRow} key={Math.random()}>
      <div className={classes.emailRow__startoptions}>
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <Link
        style={{ textDecoration: "none" }}
        className={classes.emailRow__userAndSubject}
        to={`/${mail.tag}/u${mail.userId}/${mail.id}`}
      >
        <div className={classes.emailRow__user}>
          <h4> User{Math.floor(Math.random() * 1000)}</h4>
        </div>
        <div className={classes.subject}>
          <h4>{mail.subject}</h4>
        </div>
      </Link>
      <div className={classes.emailRow__endoptions}>
        <IconButton>
          <ArchiveIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <IconButton>
          <MarkunreadMailboxIcon />
        </IconButton>
        <IconButton>
          <SnoozeIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default EmailRow;
