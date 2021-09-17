import lottie from "lottie-web";
import axios from "axios";
import { Skeleton, Modal } from "antd";
import { v4 as uuidv4 } from "uuid";
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

export default function Index() {
  const { v4: uuidv4 } = require("uuid");
  const [data, setData] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    // let id = e.target.elements.formBasicId.value;
    let id = e.target.elements.formBasicId.value;
    let email = e.target.elements.formBasicEmail.value;
    let pass = e.target.elements.formBasicPassword.value;
    let name = e.target.elements.formBasicName.value;

    const obj = { id, email, pass, name };

    const newData = [...test, obj];

    localStorage.setItem("arr", JSON.stringify(newData));

    setData(newData);

    e.target.elements.formBasicEmail.value = "";
    e.target.elements.formBasicPassword.value = "";
    e.target.elements.formBasicName.value = "";
  };
  return (
    <>
      <div style={{ padding: "0px 100px 0px" }}>
        <Form onSubmit={(e) => onSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicId">
            <Form.Label>Id</Form.Label>
            <Form.Control disabled type="number" placeholder={uuidv4()} />
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
        <div className="box">
          <div className="id">70797097097</div>

          <div className="title">osama</div>
          <div className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </div>
        </div>
      </section>
    </>
  );
}
