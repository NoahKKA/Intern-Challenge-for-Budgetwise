import React, { useState } from "react";
import Data from "../data/mockuserdata";
import {
  Circle,
  PlusCircleFill,
  ThreeDotsVertical,
  Share,
} from "react-bootstrap-icons";
import { Row, Col } from "react-bootstrap";
import ProgressBar from "@ramonak/react-progress-bar";

export default function MainColumn() {
  const userData = Data[0]?.user1?.categories || [];
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    amount: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const submittedCategory = formData.category.toLowerCase();
    const matchingCategory = Data[0]?.user1?.categories.find(
      (category) => category.category.toLowerCase() === submittedCategory
    );

    if (matchingCategory) {
      matchingCategory.spent += parseFloat(formData.amount) || 0;
    }

    console.log("Form submitted:", formData);
    setFormData({
      category: "",
      amount: "",
    });
    setShowForm(false);
  };

  const iconButtonStyle = {
    border: "none",
    background: "none",
    padding: 0,
    cursor: "pointer",
  };

  const openModal = () => setShowForm(true);
  const closeModal = () => setShowForm(false);

  return (
    <div className="main-column" style={{ borderLeft: "1px solid #dbdbdb" }}>
      <Row className="top-row">
        <Col xs={12} md={6}>
          <div
            className="monthly-budget"
            style={{ paddingLeft: "80px", textAlign: "start" }}
          >
            <h5 style={{ fontWeight: "bold" }}>Monthly Budget </h5>
            <select
              id="monthSelector"
              className="form-select"
              style={{
                width: "65%",
                backgroundColor: "#E7F4EA",
                borderRadius: "10px",
                border: "1px solid #9CD6AB",
                height: "2rem",
                lineHeight: "1rem",
                color: "#53BC70",
                fontWeight: "bold",
              }}
            >
              <option value="January">Jan 2023</option>
              <option value="February">Feb 2023</option>
              <option value="March">Feb 2023</option>
              <option value="April">Feb 2023</option>
              <option value="May">Feb 2023</option>
              <option value="June">Feb 2023</option>
              <option value="July">Feb 2023</option>
            </select>
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-end"
        >
          <button style={iconButtonStyle}>
            <Share size={20} style={{ marginRight: "10px" }} />
          </button>
          <button style={iconButtonStyle}>
            <ThreeDotsVertical size={16} style={{ marginRight: "10px" }} />
          </button>
          <div>
            <button
              style={iconButtonStyle}
              onClick={() => setShowForm(!showForm)}
            >
              <PlusCircleFill color="#5057BE" size={44} />
            </button>
            {showForm && (
              <div className="modal-overlay">
                <div className="modal-content">
                  <button style={iconButtonStyle} onClick={closeModal}>
                    Close
                  </button>
                  <form onSubmit={handleFormSubmit}>
                    <label>
                      Category:
                      <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                      />
                    </label>
                    <br />
                    <label>
                      Amount:
                      <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                      />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                  </form>
                </div>
              </div>
            )}
          </div>
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
      <div className="mt-4" style={{ width: "120%" }}>
        {userData.map((item, index) => {
          let completed;
          if (item.spent !== 0) {
            completed = (item.spent / item.max) * 100;
          } else {
            completed = 1;
          }

          return (
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
                    <div style={{ color: "#53BC70", fontWeight: "600" }}>
                      ${item.max - item.spent}
                    </div>
                    <div>left</div>
                  </div>
                </Col>
              </Row>
              <div
                style={{
                  borderBottom: "1px solid #DDDCDC",
                  width: "72%",
                  marginLeft: "80px",
                  marginTop: "10px",
                  paddingBottom: "8px",
                }}
                className="d-flex justify-content-center"
              >
                <ProgressBar
                  completed={completed}
                  width="552px"
                  borderRadius="0"
                  height="9px"
                  bgColor={item.color}
                  baseBgColor="#DDDCDC"
                  labelColor={item.color}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
