import React from 'react';
import { Col, Row } from "react-bootstrap";
import { Container } from "@mui/material";
import JobMainPage from './Sections/JobMainPage';
import JobLeftPage from './Sections/JobLeftPage';

const JobPage = () => {
  return (
    <div style={{ backgroundColor: "#f4f2ee" }}>
      <Container className=" mt-4">
        <Row className="gy-4">
          <Col
            lg={3}
            className="d-none d-lg-block"
            style={{
              position: "sticky",
              top: "0",
              height: "100vh",
              overflow: "hidden",
            }}
          >
            <JobLeftPage />
          </Col>

          <Col lg={6}>
            <JobMainPage />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default JobPage