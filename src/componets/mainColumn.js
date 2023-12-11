import React from "react";
import { Circle, PlusCircleFill, ThreeDotsVertical } from "react-bootstrap-icons";
import { ProgressBar, Row, Col } from "react-bootstrap";

export default function YourComponent() {
  const data = [
    {
      icon: "Circle",
      category: "Education",
      spent: 50,
      max: 100,
      color: "#47BCC7",
    },
    {
      icon: "icon2",
      category: "Entertainment",
      spent: 30,
      max: 150,
      color: "#FE8300",
    },
  ];

  return (
    <div className="main-column">
      <Row className="top-row">
        <Col xs={12} md={6}>
          <div
            className="monthly-budget"
            style={{ paddingLeft: "80px", textAlign: "start" }}
          >
            <h5 style={{ fontWeight: "bold" }}>Monthly Budget </h5>
            <h6 className="month-selector">Month Selector</h6>
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-end"
        >
          <p>icon</p>
          <ThreeDotsVertical size={16}/>
          <PlusCircleFill color="#5057BE" size={32}/>
        </Col>
      </Row>
      <div
        style={{
          textAlign: "start",
          paddingLeft: "80px",
          marginTop: "2rem",
          fontWeight: "bold",
        }}
      >
        Categories
      </div>
      <div className="mt-4">
        {data.map((item, index) => (
          <div key={index}>
            <Row className="align-items-center mt-3">
              {/* First Column with Icon */}
              <Col xs="auto" style={{ paddingLeft: "90px" }}>
                <Circle color={item.color} size={32} />
              </Col>

              {/* Second Column with Category and Spent */}
              <Col xs={6} style={{ padding: "0" }}>
                <div style={{ textAlign: "start" }}>
                  <div style={{ color: "#2A2B2B", fontWeight: "bold" }}>
                    {item.category}
                  </div>
                  <div style={{ color: "#717170" }}>
                    Spent{" "}
                    <span style={{ color: "#53BC70", fontWeight: "bold" }}>
                      ${item.spent}
                    </span>{" "}
                    of ${item.max}
                  </div>
                </div>
              </Col>

              {/* Third Column with $ and Left */}
              <Col xs={6} style={{ width: "25%" }}>
                <div style={{ paddingLeft: "5px" }}>
                  <div style={{ color: "#53BC70" }}>
                    ${item.max - item.spent}
                  </div>
                  <div>left</div>
                </div>
              </Col>
            </Row>
            <div
              style={{
                borderBottom: "1px solid #DDDCDC",
                width: "75%",
                margin: "0 auto",
                marginTop: "10px",
                paddingBottom: "8px",
              }}
              className="d-flex justify-content-center"
            >
              <ProgressBar
                now={(item.spent / item.max) * 100}
                style={{
                  width: "90%",
                  backgroundColor: "#DDDCDC",
                  height: "10px",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
