import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "./store/session";
import { Route, Switch } from "react-router";
import Navigation from "./components/Navigation";
import EventList from "./components/Events/EventList"
import CreateEventForm from "./components/Events/CreateEventForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Switch>
        <Route exact path='/'>
          <h2> Splash page </h2>
        </Route>
        <Route exact path='/events'>
          <EventList />
        </Route>
        <Route path='/events/:eventId'>
          <CreateEventForm />
        </Route>
      </Switch>
      {/* <main>
        <EventList />
      </main> */}
    </>
  );
}

export default App;
