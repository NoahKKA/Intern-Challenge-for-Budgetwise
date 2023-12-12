import { Col, ProgressBar, Row } from "react-bootstrap";
import {
  Circle,
  ArrowRightShort,
  ArrowUpShort,
  Plus,
} from "react-bootstrap-icons";
import Data from "../data/mockuserdata";
import { useEffect, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

export default function RightColumn() {
  const [totalSpent, setTotalSpent] = useState(0);
  const [totalMax, setTotalMax] = useState(0);
  const userDataCategories = Data[0]?.user1?.categories || [];
  const userDataTransactions = Data[0]?.user1.recentTransactions || [];
  const userDataAvailableCards = Data[0]?.user1.availableCards || [];
  const userDataSavingGoals = Data[0]?.user1.savingGoals || [];

  function getUserSpent() {
    const totalSpent = userDataCategories.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.spent;
    }, 0);

    setTotalSpent(totalSpent);
  }

  function getUserMax() {
    const totalMax = userDataCategories.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.max;
    }, 0);

    setTotalMax(totalMax);
  }

  useEffect(() => {
    getUserSpent();
  }, [totalSpent]);

  useEffect(() => {
    getUserMax();
  }, [totalMax]);

  console.log(userDataCategories);

  return (
    <div className="right-column">
      <Col className="justify-content-center d-flex">
        <div
          style={{
            border: "1px solid #DDDCDC",
            borderRadius: "15px",
            height: "9rem",
            width: "85%",
          }}
        >
          <Row className="mt-4 d-flex justify-content-center">
            <Col>
              <div style={{borderRight: "2px solid #B7B6B6"}}>
                <div style={{color:'#707171', fontSize:'.9rem'}}>Spent</div>
                <div style={{fontSize:'1.1rem', color:'#FF5D5C', fontWeight:'bold'}}>${totalSpent}</div>
              </div>
            </Col>
            <Col>
              <div style={{ padding:'0'}}>
                <div style={{color:'#707171', fontSize:'.9rem'}}>Available</div>
                <div style={{fontSize:'1.2rem', color:'#52BC71', fontWeight:'bold'}}>${totalMax - totalSpent}</div>
              </div>
            </Col>
            <Col>
              <div style={{borderLeft: "2px solid #B7B6B6"}}>
                <div style={{color:'#707171', fontSize:'.9rem'}}>Budget</div>
                <div style={{fontSize:'1.1rem', fontWeight:'bold', color:'#2B2B2A'}}>${totalMax}</div>
              </div>
            </Col>
            <div className="mt-4" style={{ width: "90%", height: "80px" }}>
              <ProgressBar
                style={{ height: "1.5rem", backgroundColor: "#DDDCDC" }}
                now={(totalSpent / totalMax) * 100}
                label={`%${(totalSpent / totalMax) * 100}`}
                visuallyHidden
              ></ProgressBar>
            </div>
          </Row>
        </div>
      </Col>
      <div className="month-spapshot-row mt-4 ">
        <div
          style={{
            textAlign: "start",
            paddingLeft: "37px",
            fontSize: "1.3rem",
            fontWeight: "bold",
          }}
        >
          6 Month Snapshot
        </div>
        <div className="d-flex justify-content-center mt-3">
          <div
            style={{
              width: "85%",
              height: "18rem",
              border: "1px solid #DDDCDC",
              borderRadius: "15px",
            }}
          >
            {/* <BudgetBarChart categories={userDataCategories}/> */}
          </div>
        </div>
      </div>
      <div className="recent-transactions-row d-flex justify-content-center mt-4">
        <div
          className="d-flex justify-content-between align-items-center "
          style={{ width: "86%" }}
        >
          <div style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
            Recent Transactions
          </div>
          <button style={{ border: "none", backgroundColor: "#fff" }}>
            See all
          </button>
        </div>
      </div>
      <div className="recent-transactions-cards mt-4 main-div">
        {userDataTransactions.map((item, index) => (
          <div
            key={index}
            className="mx-auto my-2 py-2"
            style={{
              width: "86%",
              border: "1px solid #DDDCDC",
              borderRadius: "15px",
            }}
          >
            <Row className="align-items-center justify-content-center ">
              <Col xs="auto" style={{}}>
                <Circle color={item.color} size={32} />
              </Col>

              <Col xs={4} style={{ padding: "0" }}>
                <div style={{ textAlign: "start" }}>
                  <div style={{ color: "#2A2B2B", fontWeight: "bold" }}>
                    {item.name}
                  </div>
                  <div>{item.category}</div>
                </div>
              </Col>

              <Col xs={3} style={{ width: "25%", paddingRight: "0" }}>
                <div>
                  <div className="text-end fw-bold">${item.price}</div>
                  <div className="text-end">{item.date}</div>
                </div>
              </Col>
              <Col xs="auto">
                <ArrowRightShort size={24} />
              </Col>
            </Row>
          </div>
        ))}
      </div>
      <div className="bank-and-credit-cards recent-transactions-row d-flex justify-content-center mt-4">
        <div
          className="d-flex justify-content-between align-items-center "
          style={{ width: "86%" }}
        >
          <div style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
            Bank & Credit Cards
          </div>
        </div>
      </div>
      <div className="bank-and-credit-cards-card">
        {userDataAvailableCards.map((item, index) => (
          <div
            key={index}
            className="mx-auto my-2 py-2"
            style={{
              width: "86%",
              border: "1px solid #DDDCDC",
              borderRadius: "15px",
            }}
          >
            <Row className="align-items-center justify-content-center ">
              <Col xs="auto" style={{}}>
                <Circle color="red" size={32} />
              </Col>

              <Col xs={4} style={{ padding: "0" }}>
                <div style={{ textAlign: "start" }}>
                  <div style={{ color: "#2A2B2B", fontWeight: "bold" }}>
                    {item.bankCompany}
                  </div>
                  <div>... {item.lastFourDigits}</div>
                </div>
              </Col>

              <Col xs={3} style={{ width: "25%", paddingRight: "0" }}>
                <div>
                  <div className="text-end" style={{color:'#5156Be'}}>Balance</div>
                  <div className="text-end fw-bold" style={{color:'#5156Be'}}>${item.intBalance}</div>
                </div>
              </Col>
              <Col xs="auto">
                <ArrowUpShort size={24} />
              </Col>
            </Row>
          </div>
        ))}
      </div>
      <div className="saving-goals recent-transactions-row d-flex justify-content-center mt-4">
        <div
          className="d-flex justify-content-between align-items-center "
          style={{ width: "86%" }}
        >
          <div style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
            Saving Goals
          </div>
          <button style={{ border: "none", backgroundColor: "#fff" }}>
            <Plus size={28} />
          </button>
        </div>
      </div>
      <div
        className="saving-goals-chart mt-3 mx-auto"
        style={{
          width: "86%",
          height: "220px",
          border: "1px solid #DDDCDC",
          borderRadius: "15px",
        }}
      >
        <Row className="d-flex justify-content-between">
          <Col className="mt-3" style={{ marginLeft: "23px" }}>
            <div className="text-start">{userDataSavingGoals.name}</div>
            <div style={{ width: "120px", marginTop: "23px" }}>
              <CircularProgressbarWithChildren
                value={
                  (userDataSavingGoals.savedThisMonth /
                    userDataSavingGoals.toBeSavedPerMonth) *
                  100
                }
                strokeWidth={19}
                styles={buildStyles({
                  pathColor: "#52BC71",
                })}
              >
                {" "}
                <div
                  style={{
                    fontSize: "12px",
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  <div style={{fontWeight:'600', color:'#53BC70', fontSize:'16px'}}>${userDataSavingGoals.savedThisMonth}</div>
                  <div style={{ fontSize: "10px" }}>
                    of ${userDataSavingGoals.toBeSavedPerMonth} saved
                  </div>
                  <div style={{ fontSize: "10px" }}>this month</div>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </Col>
          <Col className="mt-3" style={{ marginRight: "23px" }}>
            <div className="fw-bold text-end" style={{color:'#5156Be'}}>See Details</div>
            <div className="mt-5">
              Total Savings: ${userDataSavingGoals.savedThisMonth} of $
              {userDataSavingGoals.totalSavings} by{" "}
              {userDataSavingGoals.dueDate}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
