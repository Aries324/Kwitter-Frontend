import React from "react";
import { HomePageFeed, Grid, NavMenu, MessageList } from "../components";
import { userIsAuthenticated } from "../HOCs";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Grid columns="three" divided>
          <Grid.Column width={3}>
            <NavMenu isAuthenticated={this.props.isAuthenticated} />
          </Grid.Column>

          <Grid.Column width={9}>
            <HomePageFeed />
            <MessageList />
          </Grid.Column>

          <Grid.Column width={4}></Grid.Column>
        </Grid>
      </>
    );
  }
}

export default userIsAuthenticated(HomePage);
