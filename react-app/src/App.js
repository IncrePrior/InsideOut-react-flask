import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation/Navigation";
import Home from './components/Home/Home';
import PostDetails from "./components/PostDetails/PostDetails";
import LandingPage from "./components/LandingPage/LandingPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import CollectionDetails from "./components/CollectionDetails/CollectionDetails";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div id='main-container'>
      <div id='content-container'>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route path='/login' >
            <LoginFormPage />
          </Route>
          <Route path='/signup'>
            <SignupFormPage />
          </Route>
          <Route exact path='/posts'>
            <Home />
          </Route>
          <Route path="/user">
              <ProfilePage />
          </Route>
          <Route exact path='/posts/:postId'>
            <PostDetails />
          </Route>
          <Route path="/collections/:collectionId">
              <CollectionDetails />
          </Route>
        </Switch>
      )}
      </div>
    </div>
  );
}

export default App;
