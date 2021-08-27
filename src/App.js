import logo from "./logo.svg";
import lottie from "lottie-web";

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
  // const [state, setState] = useState("custom logo design");
  // const [state, setState] = useState([]);
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
    e.target.elements.formBasicEmail.value = "";
    e.target.elements.formBasicPassword.value = "";
    e.target.elements.formBasicName.value = "";
    console.log(data, "data");
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

  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: document.getElementsByClassName("container"), // the dom element that will contain the animation
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     path: "https://assets1.lottiefiles.com/temporary_files/wxTfCl.json", // the path to the animation json
  //   });
  // }, []);

  return (
    <section className="service">
      <div className="service__container">
        <h1>osama</h1>
        {/* <div className="container" style={{ height: "500px" }}></div> */}
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
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {/* {data?.map((i) => {
          return (
            <>
              
              <ListGroup variant="flush">
                <ListGroup.Item>{i.email}</ListGroup.Item>
                <ListGroup.Item>{i.pass}</ListGroup.Item>
                <ListGroup.Item>{i.name}</ListGroup.Item>
              </ListGroup>
            </>
          );
        })} */}

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Password</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i, index) => {
              console.log(index, "==");
              return (
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{i.email}}</td>
                    <td>{i.pass}}</td>
                    <td>{i.name}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>

        {/* <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner> */}
        {/* <h1>Our Services For Startups, SME & Entrepreneurs</h1>
        <p>
          Digitaloid is a full-service creative design, brand, web and digital
          agency that helps brands move forward. Over the years, our agency has
          helped brands and companies redefine their purpose and unleash their
          full potential. In addition, we provide our clients with customized
          marketing solutions according to their target market to expand their
          businesses.
        </p>

        <div className="tab">
          {tabarr.map(({ img, title }) => {
            console.log(title, "==");
            return (
              <div className="tab__wrapper" onClick={() => setState(title)}>
                <img src={img} width="35px" height="35px" />
                <p>{title}</p>
              </div>
            );
          })}
          
        </div>

        <div className="features__container">
          {arr.map(({ heading, description, buttontext, img }) => {
            if (state == heading) {
              return (
                <>
                  <div className="features__container__content">
                    <h2>{heading}</h2>
                    <p>{description}</p>
                    <button>{buttontext}</button>
                  </div>
                  <div className="features__container__image">
                    <img src={img} />
                  </div>
                </>
              );
            } else {
            }
          })}
       
        </div> */}
      </div>
    </section>
  );
}

export default App;
