import logo from "./logo.svg";
import lottie from "lottie-web";
import axios from "axios";
import { Skeleton, Modal } from "antd";

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
  const [data, setData] = useState([]);
  const [posts, setPosts] = useState([]);
  const [Id, setId] = useState();
  const [loading, setloading] = useState(true);
  const [test, setTest] = useState([
    {
      id: 0,
      email: "osama@gmail.com",
      pass: "123",
      name: "osama",
    },
    {
      id: 1,
      email: "osama123@gmail.com",
      pass: "123",
      name: "osama",
    },
    {
      id: 2,
      email: "osamaasdas@gmail.com",
      pass: "123",
      name: "osama",
    },
    {
      id: 3,
      email: "osama987@gmail.com",
      pass: "123",
      name: "osama",
    },
  ]);
  const [update, setUpdate] = useState({
    id: 0,
    email: "",
    pass: "",
    name: "",
  });
  let objIndex;
  useEffect(() => {
    setloading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res?.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const container = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
    let id = e.target.elements.formBasicId.value;
    let email = e.target.elements.formBasicEmail.value;
    let pass = e.target.elements.formBasicPassword.value;
    let name = e.target.elements.formBasicName.value;
    localStorage.setItem("email", email);
    localStorage.setItem("password", pass);
    localStorage.setItem("name", name);
    const obj = { id, email, pass, name };

    setUpdate(obj);
    objIndex = test.findIndex((obj) => obj.id == id);
    test[objIndex].name = name;
    test[objIndex].email = email;
    test[objIndex].pass = pass;
    test[objIndex].id = id;
    handleCancel();

    setData([...data, obj]);
    // setData([]);
    e.target.elements.formBasicEmail.value = "";
    e.target.elements.formBasicPassword.value = "";
    e.target.elements.formBasicName.value = "";
  };
  console.log(update, "update");
  // console.log(data, "update");

  <script
    src="https://cdnjs.com/libraries/bodymovin"
    type="text/javascript"
  ></script>;
  useEffect(() => {
    const email = localStorage.getItem("email");
    const name = localStorage.getItem("name");
    const pass = localStorage.getItem("password");
    const obj = { email, pass, name };
    setData([...data, obj]);
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
  };
  const handleUpdateItem = (e) => {
    // setTest(test.filter((item) => item.id !== e));
  };
  const handleChange = (e) => {
    // this.setState({value: event.target.value});
    // setUpdate(email, e.target.elements.formBasicEmail.value);
    // console.log(e.target.value, "text");
  };

  // console.log(update.email, "text");
  return (
    <section className="service">
      <div className="service__container">
        <h1>osama</h1>

        <Form onSubmit={(e) => onSubmit(e)}>
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
        <h1> {Id} </h1>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>email</th>
              <th>pass</th>

              <th>name</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {test?.map((i, index) => {
              return (
                <>
                  <tr>
                    <td>{i?.id} </td>
                    <td>{i?.email}</td>
                    <td>{i?.pass}</td>
                    <td>{i?.name}</td>
                    <td>
                      <Button onClick={() => showModal(i)}>Update</Button>
                      <Button
                        onClick={() => {
                          handleRemoveItem(i?.id);
                        }}
                      >
                        Delete
                      </Button>
                      <Button>Edit</Button>
                    </td>
                  </tr>
                  <Modal
                    title="Basic Modal"
                    visible={isModalVisible}
                    onOk={handleSubmit}
                    onCancel={handleCancel}
                    okText="Submit"
                  >
                    {/* <h1>{update.email}</h1> */}
                    <Form onSubmit={(e) => onSubmit(e)}>
                      <Form.Group className="mb-3" controlId="formBasicId">
                        <Form.Label>Id</Form.Label>
                        <Form.Control
                          type="number"
                          disabled
                          value={update?.id}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          value={update?.email}
                          placeholder="Enter email"
                          onChange={(e) => setUpdate({ email: e.target.value })}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          value={update?.pass}
                          placeholder="Password"
                          onChange={(e) => setUpdate({ pass: e.target.value })}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          value={update?.name}
                          placeholder="Name"
                          onChange={(e) => setUpdate({ name: e.target.value })}
                        />
                      </Form.Group>

                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </Modal>
                </>
              );
            })}
          </tbody>
        </Table>
        {/* <h1>{Id}</h1> */}
        {/* <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
             
              <th colSpan="3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <>
                <Skeleton delay={1} style={{ width: "100%" }} />
              </>
            ) : (
              posts?.map((i, index) => {
                return (
                  <>
                    <tr key={i?.id}>
                      <td>{i?.id}</td>
                      <td>{i.title}</td>
                      
                      <td>
                        
                        <Button onClick={(e) => setId(i?.id)}>Update</Button>
                        <Button>Delete</Button>
                        <Button>Edit</Button>
                      </td>
                    </tr>
                  </>
                );
              })
            )}
          </tbody>
        </Table> */}
      </div>
    </section>
  );
}

export default App;
