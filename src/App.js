import logo from "./logo.svg";
import lottie from "lottie-web";
import axios from "axios";
import { Skeleton, Modal } from "antd";
import { v4 as uuidv4 } from "uuid";

// import './App.css';
import "./App.scss";
import React, { useState, useEffect, useRef } from "react";
import {
  Form,
  Button,
  Alert,
  Table,
  ListGroup,
  Spinner,
} from "react-bootstrap";

// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { v4: uuidv4 } = require("uuid");
  const [data, setData] = useState([]);
  const [posts, setPosts] = useState([]);
  const [Id, setId] = useState();
  const [loading, setloading] = useState(true);
  const [test, setTest] = useState([]);

  const [update, setUpdate] = useState({
    id: 0,
    email: "",
    pass: "",
    name: "",
  });
  const [object, setObject] = useState({});
  let content = {
    arr: [],
  };

  // const setdata = (insertedValue) => {
  //   return {
  //     ...insertedValue,
  //   };
  // };
  // const insert = () => {
  //   const obj = {};
  // };
  // const newData = [...content.arr];
  let objIndex;
  // useEffect(() => {
  //   setloading(true);
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       setPosts(res?.data);
  //       setloading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    // let id = e.target.elements.formBasicId.value;
    let id = uuidv4();
    let email = e.target.elements.formBasicEmail.value;
    let pass = e.target.elements.formBasicPassword.value;
    let name = e.target.elements.formBasicName.value;

    const obj = { id, email, pass, name };

    const newData = [...test, obj];

    localStorage.setItem("arr", JSON.stringify(newData));

    setTest(newData);

    e.target.elements.formBasicEmail.value = "";
    e.target.elements.formBasicPassword.value = "";
    e.target.elements.formBasicName.value = "";
  };

  <script
    src="https://cdnjs.com/libraries/bodymovin"
    type="text/javascript"
  ></script>;
  useEffect(() => {
    const jsondata = JSON.parse(localStorage.getItem("arr")) || [];
    setTest(jsondata);
  }, []);

  //  MOdal

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newInput, setNewInput] = useState("");
  const showModal = (e) => {
    setUpdate(e);
    setIsModalVisible(true);
  };

  const handleSubmit = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleRemoveItem = (e) => {
    setTest(test.filter((item) => item.id !== e));
    console.log(test, "test");
    // {
    //   test.map((i) => {
    //     console.log(i.id);
    //   });
    // }
    // console.log(test, "test");

    const newData = [...test];
    console.log(newData, "newdata");
    // localStorage.clear();
    // console.log(localStorage);
    localStorage.setItem("arr", JSON.stringify(newData));
    console.log(localStorage);
    // console.log(test, "test");
    // localStorage.removeItem("arr", e);
  };
  const handleUpdateItem = (e) => {
    // setTest(test.filter((item) => item.id !== e));
  };

  return (
    <section className="service">
      <div className="service__container">
        <h1>osama</h1>

        <Form onSubmit={(e) => onSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicId">
            <Form.Label>Id</Form.Label>
            <Form.Control type="number" disabled />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>Pass</th>
              <th>Name</th>

              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {test.map((i) => {
              return (
                <>
                  <tr key={i?.id}>
                    <td>{i?.id}</td>
                    <td>{i.email}</td>
                    <td>{i.pass}</td>
                    <td>{i.name}</td>

                    <td>
                      <Button onClick={(e) => setId(i?.id)}>Update</Button>
                      <Button onClick={() => handleRemoveItem(i?.id)}>
                        Delete
                      </Button>
                      <Button>Edit</Button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>
    </section>
  );
}

export default App;
