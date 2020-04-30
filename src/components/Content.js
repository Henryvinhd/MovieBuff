import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { Message } from 'semantic-ui-react'

import contentData from "../utils/contentData";

class Content extends Component {
  render() {
    return (
      <div className="next-steps my-5">
        <h2 className="my-5 text-center">Welcome to MovieBuff!</h2>
        <Row className="d-flex justify-content-between">
          {contentData.map((col, i) => (
            <Col key={i}>
                  <Message header ={col.title}
                  content={col.description}></Message>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Content;