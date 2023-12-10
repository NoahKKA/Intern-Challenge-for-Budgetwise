import React, { useState } from "react";

export default function LeftColumn() {
  const [selectedText, setSelectedText] = useState(null);

  const handleTextClick = (index) => {
    setSelectedText(index);
  };

  const leftColumnArray = ["Overview", "Budget", "Transactions", "Trends", "Savings Goals", "Alerts"]

  const getTextStyle = (index) => {
    return {
      cursor: "pointer",
      padding: "8px 4px",
      marginLeft: "4px",
      display: "flex",
      alignItems:"left"
    };
  };

  const getBorderStyle = (index) => {
    return {
      borderLeft:
        index === selectedText ? "2px solid black" : "2px solid transparent",
        paddingLeft: "4px"
    };
  };

  return (
    <div className="left-column">
    <div className="mt-5">
      {leftColumnArray.map((_, index) => (
        <div
          key={index}
          style={getTextStyle(index)}
          onClick={() => handleTextClick(index)}
        >
          <div style={getBorderStyle(index)}>{leftColumnArray[index]}</div>
        </div>
      ))}
    </div>
    </div>
  );
}
