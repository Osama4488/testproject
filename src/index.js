import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Blog from "./blog";
import Osama from "./osama";
import reportWebVitals from "./reportWebVitals";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ItemDetail from "./itemDetails";
import Skeleton from "./skeleton-react";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <nav>
        <ul>
          <Link to="/osama">
            {" "}
            <li>Osama</li>
          </Link>
        </ul>
        <ul>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
        </ul>
      </nav>
      <Switch>
        <Route path="/osama" component={Osama} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/:id" component={ItemDetail} />
      </Switch>

      {/* <App /> */}
    </Router>
    {/* <Skeleton /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
