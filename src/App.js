import logo from "./logo.svg";
import lottie from "lottie-web";
import axios from "axios";
import { Skeleton } from "antd";

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

  const container = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.formBasicEmail.value;
    let pass = e.target.elements.formBasicPassword.value;
    let name = e.target.elements.formBasicName.value;
    localStorage.setItem("email", email);
    localStorage.setItem("password", pass);
    localStorage.setItem("name", name);
    const obj = { email, pass, name };

    setData([...data, obj]);
    // setData([]);
    e.target.elements.formBasicEmail.value = "";
    e.target.elements.formBasicPassword.value = "";
    e.target.elements.formBasicName.value = "";
    // console.log(data, "data");
    // setData(e.target.elements.formBasicEmail.value);
    // e.map((i) => {
    //   setData(e.target.elements.formBasicPassword.value);
    // });
    /*How to get name value?*/
  };
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

  const Delete = () => {
    alert("osama");
  };
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
            {data?.map((i, index) => {
              return (
                <>
                  <tr>
                    <td>{index} </td>
                    <td>{i?.email}</td>
                    <td>{i?.pass}</td>
                    <td>{i?.name}</td>
                    <td>
                      <Button onClick={(e) => setId(index)}>Update</Button>
                      <Button onClick={Delete}>Delete</Button>
                      <Button>Edit</Button>
                    </td>
                  </tr>
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
