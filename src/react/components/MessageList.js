import React, { Component } from "react";
import {
  Card,
  Image,
  DeleteMessageButton,
  Container,
  Button,
  Icon,
  Label
} from "../components";
import "./MessageList.css";
import { withAsyncAction, connect } from "../HOCs";

import { getUsers } from "../../redux/actionCreators";

class MessageList extends Component {
  componentDidMount() {
    this.props.getMessages(this.props.username);
    this.props.getUsers(this.props.users);
  }
  componentDidUpdate(prevProps) {
    if (this.props.username !== prevProps.username) {
      this.props.getMessages(this.props.username);
    }
  }
  render() {
    return (
      this.props.result &&
      this.props.result.messages.map(message => {
        return (
          <Card.Group key={message.id}>
            <Card.Content className="conversation-list-item">
              <Image
                className="conversation-photo"
               
               
                src={
                 this.props.user.user.pictureLocation
                    ? "https://kwitter-api.herokuapp.com" + this.props.user.user.pictureLocation
                    : "http://simpleicon.com/wp-content/uploads/user1.svg"
                }

                // src={
                //  this.props.user.user.pictureLocation
                //     ? "https://kwitter-api.herokuapp.com" + this.props.user.user.pictureLocation
                //     : "http://simpleicon.com/wp-content/uploads/user1.svg"
                // }
              />
              <Container className="conversation-info">
                <Card.Header className="conversation-title">
                  {message.username}
                </Card.Header>
                <Card.Description className="conversation-snippet">
                  {message.text}
                </Card.Description>
                <Button
                  as="div"
                  labelPosition="right"
                  size="mini"
                  compact
                  onClick={this.handleClick}
                  style={{ marginTop: "15px" }}
                >
                  <Button
                    size="mini"
                    style={{ padding: "8px 14px", backgroundColor: "#95b9c7" }}
                  >
                    <Icon name="heart" />
                  </Button>
                  <Label as="a" basic color="" pointing="left" size="mini">
                    {/* {this.props.likes.length} */}
                    {this.props.addLikes}
                  </Label>
                </Button>
              </Container>
              <DeleteMessageButton />
            </Card.Content>
          </Card.Group>
        );
      })
    );
  }
}
//trying
const mapStateToProps = state => {
  return {
    user: state.users.getUser.result,
    getUsers
  };
};
export default connect(mapStateToProps)(
  withAsyncAction("messages", "getMessages")(MessageList)
);
