import React from "react";
import { Link } from ".";
import { Sidebar, Segment, Menu, Icon } from ".";
import "./NavMenu.css";
import { withAsyncAction, connect } from "../HOCs";

class NavMenu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div id="menu">
        {this.props.isAuthenticated && (
          <div id="NavMenu-links">
            <Sidebar.Pushable as={Segment} id="nav_segment"
             style={{
              width: "18%",
              height: "500px",
              margin: "135px 0",
              position: "fixed",
              top: "0px"
            }}>
              <Sidebar
                style={{ width: "100%", backgroundColor:"#95b9c7",  position: "fixed",
                top: "0px" }}
                
                as={Menu}
                icon="labeled"
                vertical
                visible
                width="wide"
               
              >
                <div id="menu">
                  <h1>Kwitter</h1>
                </div>
                <Link to="/homepage">
                  <Menu.Item>
                    <Icon name="home" />
                    Home
                  </Menu.Item>
                </Link>
                <Link to={"/profile/" + this.props.username }>
                  {" "}
                  <Menu.Item >
                    <Icon name="user" />
                    Profile
                  </Menu.Item>
                </Link>
                {/* <Link to="/messagefeed">
                  {" "}
                  <Menu.Item >
                    <Icon name="envelope" />
                    Message
                  </Menu.Item>
                </Link> */}
                <Link to="/" onClick={this.handleLogout}>
                  {" "}
                  <Menu.Item >
                    <Icon name="sign-out" />
                    Logout
                  </Menu.Item>
                </Link>
              </Sidebar>
            </Sidebar.Pushable>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.login.result.username
  }

}

export default connect(mapStateToProps)(withAsyncAction("auth", "logout")(NavMenu));
