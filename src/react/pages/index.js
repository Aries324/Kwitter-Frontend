import Home from "./Home";
import HomePage from "./HomePage";
import Profile from "./Profile";
import NotFound from "./NotFound";

import CreateUser from "./CreateUser";

export default {
  Home: { path: "/", component: Home },
  HomePage: { path: "/homepage", component: HomePage },
  Profile: { path: "/profile/:username", component: Profile },
  CreateUser: { path: "/createuser", component: CreateUser },
  NotFound: { path: "*", component: NotFound },
};
