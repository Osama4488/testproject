import { Modal } from "antd";
// import { v4 as uuidv4 } from "uuid";

import "./App.scss";
import React, { useState, useEffect, useRef } from "react";
import { Form, Button, Table } from "react-bootstrap";

function App() {
  // const [data, setData] = useState([]);
  // const [posts, setPosts] = useState([]);
  // const [Id, setId] = useState();
  // const [loading, setloading] = useState(true);
  const { v4: uuidv4 } = require("uuid");
  const [test, setTest] = useState([]);

  const [update, setUpdate] = useState({
    id: "0",
    email: "",
    pass: "",
    name: "",
  });

  // const setdata = (insertedValue) => {
  //   return {
  //     ...insertedValue,
  //   };
  // };
  // const insert = () => {
  //   const obj = {};
  // };
  // const newData = [...content.arr];

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
  const modalSubmit = (e) => {
    e.preventDefault();

    let id = e.target.elements.formBasicId.value;
    let email = e.target.elements.formBasicEmail.value;
    let pass = e.target.elements.formBasicPassword.value;
    let name = e.target.elements.formBasicName.value;

    const obj = { id, email, pass, name };
    const newObj = test.findIndex((e) => e.id == id);
    test[newObj].name = name;
    test[newObj].id = id;
    test[newObj].email = email;
    test[newObj].pass = pass;
    const newData = [...test, test];
    // setTest(newData);
    console.log(test, "test");
    console.log(newData, "Newdata");
    // setTest(...test,obj)
    // setUpdate({ email: email, pass: pass, name: name });
    // console.log(obj, "obj");
    // const newData = [...test, obj];

    localStorage.setItem("arr", JSON.stringify(test));

    e.target.elements.formBasicEmail.value = "";
    e.target.elements.formBasicPassword.value = "";
    e.target.elements.formBasicName.value = "";
    setIsModalVisible(false);
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
    const result = test.filter((item) => item.id === e);

    setUpdate(result[0]);

    setIsModalVisible(true);
  };

  const handleSubmit = () => {
    setIsModalVisible(false);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleRemoveItem = (e) => {
    const result = test.filter((item) => item.id !== e);
    setTest(test.filter((item) => item.id !== e));

    const newData = [...result];

    localStorage.setItem("arr", JSON.stringify(newData));
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
                <React.Fragment key={Math.random()}>
                  <tr key={i?.id}>
                    <td>{i?.id}</td>
                    <td>{i.email}</td>
                    <td>{i.pass}</td>
                    <td>{i.name}</td>

                    <td>
                      <Button onClick={() => showModal(i.id)}>Update</Button>

                      <Button onClick={() => handleRemoveItem(i?.id)}>
                        Delete
                      </Button>
                      <Button>Edit</Button>
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
            <Modal
              title="Basic Modal"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Form onSubmit={(e) => modalSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicId">
                  <Form.Label>Id</Form.Label>
                  <Form.Control
                    value={update.id}
                    disabled
                    onChange={(e) => e.target.value}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={update.email}
                    onChange={(e) => setUpdate(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={update.pass}
                    onChange={(e) => setUpdate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={update.name}
                    onChange={(e) => setUpdate(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Modal>
          </tbody>
        </Table>
      </div>
    </section>
  );
}

export default App;
