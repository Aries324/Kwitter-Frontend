import React from "react";
import { LoginForm, Menu, TrendingNewsFeed } from "../components";
import { userIsNotAuthenticated } from "../HOCs";

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
        <TrendingNewsFeed/>
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
