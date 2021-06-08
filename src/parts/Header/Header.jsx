import React from "react";
import fake_icon from "../../assets/fake_icon.png";
import { Route, Switch, NavLink } from "react-router-dom";
import ViewUser from "../../pages/User/View";
import AddEditPost from "../../pages/Post/AddEditPost";
import HomePage from "../../pages/Home/HomePage";
import UserPage from "../../pages/User/Index";
import PostPage from "../../pages/Post/Index";
import ViewPost from "../../pages/Post/View";
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
          <Route exact path="/react-redux-blog">
            <HomePage />
          </Route>
          <Route exact path="/users">
            <UserPage />
          </Route>
          <Route exact path="/posts">
            <PostPage />
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
