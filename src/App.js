import React, { useEffect } from "react";
import classes from "./App.module.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import EmailList from "./components/EmailList";
import { Route, Switch } from "react-router-dom";
import MailBody from "./components/MailBody";
import { useLocation, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setallmails } from "./store/Slices/AllMails";

function App() {
  const params = useLocation().pathname.split("/")[1];
  const dispatch = useDispatch();
  const allmails = useSelector((store) => store.allmails.allmails);

  useEffect(() => {
    async function fetchmails() {
      const response = await fetch(
        "https://run.mocky.io/v3/58770279-0738-4578-a1cf-c56a193fce98"
      );
      const mails = await response.json();
      dispatch(setallmails(mails));
    }
    fetchmails();
  }, []);

  return (
    <div className={classes.app}>
      <Header selected={params} />
      <div className={classes.app__body}>
        <Sidebar selected={params} allmails={allmails} />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/inbox" />
          </Route>
          <Route path="/inbox" exact>
            <EmailList tags="inbox" />
          </Route>
          <Route path="/draft" exact>
            <EmailList tags="draft" />
          </Route>
          <Route path="/spam" exact>
            <EmailList tags="spam" />
          </Route>
          <Route path="/trash" exact>
            <EmailList tags="trash" />
          </Route>
          <Route path="/all" exact>
            <EmailList tags="all" />
          </Route>
          <Route path="/:tag/search/:query" exact>
            <EmailList />
          </Route>
          <Route path="/:tag/:userId/:id" exact>
            <MailBody />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
