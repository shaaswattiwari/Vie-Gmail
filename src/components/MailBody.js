import classes from "./MailBody.module.css";
import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { IconButton } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function MailBody() {
  const [requestedMail, setrequestedMail] = useState({});
  const history = useHistory();
  const { id } = useParams();
  const allmails = useSelector((store) => store.allmails.allmails);

  useEffect(() => {
    const mail = allmails.filter((mail) => Number(mail.id) === Number(id))[0];
    setrequestedMail(mail);
  }, [allmails, id]);

  return (
    <div className={classes.mail}>
      <div className={classes.mail__tools}>
        <div className={classes.mail__toolsLeft}>
          <IconButton onClick={() => history.goBack()}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className={classes.mail__toolsRight}>
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      {requestedMail ? (
        <div className={classes.mail__body}>
          <div className={classes.mail__bodyHeader}>
            <h2>{requestedMail.subject}</h2>
            <LabelImportantIcon className={classes.mail__important} />
            <p>user{requestedMail.userId}@gmail.com</p>
          </div>
          <div className={classes.mail__bodymessage}>
            <p>{requestedMail.body}</p>
          </div>
        </div>
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
  );
}

export default MailBody;
