// import React from "react";
// import {
//   NavMenu,
//   MessageList,
//   CreateMessageForm,
//   SearchBar,
//   Grid
// } from "../components";
// import { userIsAuthenticated } from "../HOCs";


// class MessageFeed extends React.Component {
//   render() {
//     return (
//       <>
//         <Grid columns="three" divided>
//           <Grid.Column width={3}>
//             <NavMenu isAuthenticated={this.props.isAuthenticated} />
//           </Grid.Column>

//           <Grid.Column width={4}>
//             <h3 style={{ margin: "30px 0 10px 0", textAlign: "center" }}>
//               Messages
//             </h3>
//             <SearchBar />
//             <MessageList username={this.props.match.params.username} />
//           </Grid.Column>

//           <Grid.Column width={9}>
//             <CreateMessageForm />
//           </Grid.Column>
//         </Grid>
//       </>
//     );
//   }
// }

// export default userIsAuthenticated(MessageFeed);
