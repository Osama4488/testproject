// import BlogIndex from "./components/blog";
// export default function Blog() {
//   return <BlogIndex />;
// }

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "././components/blog/index.scss";
import { useLocation, useParams } from "react-router";
import React, { useState, useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import Osama from "./osama";
export default function SinglePage(props) {
  const { id } = useParams();

  return <h1>{id}</h1>;
}
