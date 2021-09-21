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
  // const jsondata = 1;

  const jsondata = JSON.parse(localStorage.getItem("arr")) || [];

  const { id } = useParams();
  const result = jsondata.filter((e) => e.id === id);
  console.log(result, "aa");
  return (
    <>
      <div>
        {" "}
        {result.map((i) => {
          return (
            <>
              <h1>{i.id}</h1>
              <h2>{i.name}</h2>
              <h3>{i.content}</h3>
            </>
          );
        })}
      </div>
    </>
  );
}
