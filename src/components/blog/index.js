import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
import "./index.scss";
import React, { useState, useEffect, useRef } from "react";
import {
  Form,
  InputGroup,
  Button,
  Alert,
  Table,
  ListGroup,
  Spinner,
} from "react-bootstrap";
import App from "../../App";
import Osama from "../../osama";
export default function Index() {
  const { v4: uuidv4 } = require("uuid");
  const [data, setData] = useState([]);
  useEffect(() => {
    const jsondata = JSON.parse(localStorage.getItem("arr")) || [];
    console.log(jsondata);
    setData(jsondata);
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();

    let id = e.target.elements.formBasicId.value;
    let name = e.target.elements.formBasicBlogName.value;
    let content = e.target.elements.formBasicBlogContent.value;

    const obj = { id, name, content };
    const newData = [...data, obj];

    localStorage.setItem("arr", JSON.stringify(newData));

    setData(newData);

    e.target.elements.formBasicId.value = "";
    e.target.elements.formBasicBlogName.value = "";
    e.target.elements.formBasicBlogContent.value = "";
  };

  const openPage = () => {};
  return (
    <>
      <div style={{ padding: "0px 100px 0px" }}>
        <Form onSubmit={(e) => onSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicId">
            <Form.Label>Id</Form.Label>
            <Form.Control disabled placeholder={uuidv4()} value={uuidv4()} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicBlogName">
            <Form.Label>Blog Name</Form.Label>
            <Form.Control type="text" placeholder="Blog Name" />
            <Form.Text className="text-muted">
              Enter a unique blog name
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicBlogContent">
            <Form.Label>Enter Blog's Content</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <section className="blog-section">
        {data?.map((i) => {
          return (
            // <Router>
            //   <Route path="/osama" component={Osama} />
            //   <div
            //     onClick={() => openPage()}
            //     key={Math.random()}
            //     className="box"
            //   >
            //     <div className="id">{i?.id}</div>

            //     <div className="title">{i?.name}</div>
            //     <div className="description">{i?.content}</div>
            //   </div>
            // </Router>

            <div onClick={() => openPage()} key={Math.random()} className="box">
              <div className="id">
                <Router>
                  <Link to={`/components/blog/${i?.id}`}> {i?.id}</Link>{" "}
                </Router>
              </div>

              <div className="title">{i?.name}</div>
              <div className="description">{i?.content}</div>
            </div>
          );
        })}
      </section>
    </>
  );
}
