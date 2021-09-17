import lottie from "lottie-web";
import axios from "axios";
import { Skeleton, Modal } from "antd";
import { v4 as uuidv4 } from "uuid";
import "./index.scss";
import React, { useState, useEffect, useRef } from "react";
import {
  Form,
  Button,
  Alert,
  Table,
  ListGroup,
  Spinner,
} from "react-bootstrap";

export default function Index() {
  return (
    <section className="blog-section">
      <div className="box">
        <div className="id">70797097097</div>

        <div className="title">osama</div>
        <div className="description"></div>
      </div>
    </section>
  );
}
