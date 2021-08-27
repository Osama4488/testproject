import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Skeleton from "./Skeleton";
import Skeleton from "./skeleton-react";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Skeleton />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
