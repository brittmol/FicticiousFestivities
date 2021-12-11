import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "./store/session";
import { Route, Switch } from "react-router";
import Navigation from "./components/Navigation";
import EventList from "./components/Events/EventList"
import SingleEvent from "./components/Events/SingleEvent";
import MyTickets from "./components/MyTickets/MyTickets";
import SplashPage from "./components/SplashPage/SplashPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  // const sessionUser = useSelector(state => state.session.user);

  return (
    <>
        <Switch>
          <Route exact path='/'>
            <SplashPage />
          </Route>
          <Route exact path='/events'>
            <Navigation isLoaded={isLoaded} />
            <EventList />
          </Route>
          <Route path='/events/:eventId'>
            <Navigation isLoaded={isLoaded} />
            <SingleEvent />
          </Route>
          <Route path='/mytickets'>
            <Navigation isLoaded={isLoaded} />
            <MyTickets />
          </Route>
        </Switch>
    </>
  );
}

export default App;
