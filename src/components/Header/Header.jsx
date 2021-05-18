import React from "react";
import fake_icon from "../../assets/fake_icon.png";
import { Route, Switch, NavLink } from "react-router-dom";
import HomeContainer from "../../containers/Home/HomeContainer";
import UserContainer from "../../containers/User/UserContainer";
import ViewUser from "../User/ViewUser";
import PostContainer from "../../containers/Post/PostContainer";
import ViewPost from "../Post/ViewPost";
import AddEditPost from "../Post/AddEditPost";
const index = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          <img
            src={fake_icon}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="fake_icon"
          />
          Fake Blog
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/users"
                activeClassName="active"
              >
                Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/posts"
                activeClassName="active"
              >
                Posts
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* below is the routing */}

      <div className="container">
        <Switch>
          <Route exact path="/">
            <HomeContainer />
          </Route>
          <Route exact path="/users">
            <UserContainer />
          </Route>
          <Route exact path="/posts">
            <PostContainer />
          </Route>

          <Route exact path="/users/:userId" children={<ViewUser />} />
          <Route exact path="/posts/add" children={<AddEditPost />} />
          <Route exact path="/posts/:postId" children={<ViewPost />} />
          <Route exact path="/posts/:postId/edit" children={<AddEditPost />} />
        </Switch>
      </div>
    </>
  );
};

export default index;
