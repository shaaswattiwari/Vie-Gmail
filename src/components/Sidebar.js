import classes from "./Sidebar.module.css";
import React from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import DeleteIcon from "@material-ui/icons/Delete";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import ErrorIcon from "@material-ui/icons/Error";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IconButton } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import CallIcon from "@material-ui/icons/Call";

function Sidebar({ selected, allmails }) {
  const inboxCount = allmails.filter((mail) => mail.tag === "inbox").length;
  const draftCount = allmails.filter((mail) => mail.tag === "draft").length;
  const spamCount = allmails.filter((mail) => mail.tag === "spam").length;
  const trashCount = allmails.filter((mail) => mail.tag === "trash").length;
  const allCount = allmails.length;
  return (
    <div className={classes.sidebar}>
      <Button
        className={classes.sidebar__compose}
        startIcon={<AddIcon fontSize="large" />}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title={"Inbox"}
        number={inboxCount}
        selected={selected === "inbox" ? true : false}
      />
      <SidebarOption
        Icon={DraftsIcon}
        title={"Draft"}
        number={draftCount}
        selected={selected === "draft" ? true : false}
      />
      <SidebarOption
        Icon={ErrorIcon}
        title={"Spam"}
        number={spamCount}
        selected={selected === "spam" ? true : false}
      />
      <SidebarOption
        Icon={DeleteIcon}
        title={"Trash"}
        number={trashCount}
        selected={selected === "trash" ? true : false}
      />
      <SidebarOption
        Icon={AllInboxIcon}
        title={"All"}
        number={allCount}
        selected={selected === "all" ? true : false}
      />
      <SidebarOption
        Icon={ExpandMoreIcon}
        title={"More"}
        number={""}
        selected={""}
      />
      <div className={classes.sidebar__footer}>
        <div className={classes.sidebar__footericons}>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <CallIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
