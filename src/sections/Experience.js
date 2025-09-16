import React from "react";
import experienceData from "../data/experienceData";

const Experience = () => {
  const boldStyle = {
    textDecoration: "bold",
    fontWeight: "20px",
  };

  // Color scheme for different experience types
  const getRowStyle = (type) => {
    switch (type) {
      case "research":
        return {
          borderLeft: "3px solid #2196f3",
        }; // Blue accent
      case "internship":
        return {
          borderLeft: "3px solid #9c27b0",
        }; // Purple accent
      case "teaching":
        return {
          borderLeft: "3px solid #4caf50",
        }; // Green accent
      default:
        return {
          borderLeft: "3px solid #757575",
        }; // Gray accent
    }
  };

  const getTextColor = (type) => {
    switch (type) {
      case "research":
        return "#1976d2"; // Blue text
      case "internship":
        return "#7b1fa2"; // Purple text
      case "teaching":
        return "#388e3c"; // Green text
      default:
        return "#424242"; // Dark gray text
    }
  };

  return (
    <>
      <h1 style={{ alignSelf: "flex-start" }}>Experience</h1>
      <table
        style={{
          margin: "40px 90px",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th style={{ padding: "8px 12px", textAlign: "left" }}></th>
            <th style={{ padding: "8px 12px", textAlign: "left" }}>Company</th>
            <th style={{ padding: "8px 12px", textAlign: "left" }}>Role</th>
            <th style={{ padding: "8px 12px", textAlign: "left" }}>Dates</th>
            <th style={{ padding: "8px 12px", textAlign: "left" }}>
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {experienceData.internships.map((item, index) => (
            <tr
              key={index}
              style={{
                ...getRowStyle(item.type),
                borderBottom:
                  index !== experienceData.internships.length - 1
                    ? "1px solid #e0e0e0"
                    : "none",
                transition: "all 0.2s ease",
              }}
            >
              <td style={{ padding: "8px 12px" }}>{item.emoji}</td>
              <td
                style={{
                  padding: "8px 12px",
                  fontWeight: "bold",
                  color: getTextColor(item.type),
                }}
              >
                {item.company}
              </td>
              <td
                style={{
                  padding: "8px 12px",
                  color: getTextColor(item.type),
                }}
              >
                {item.role}
              </td>
              <td
                style={{
                  padding: "8px 12px",
                  fontStyle: "italic",
                  color: "#666",
                }}
              >
                {item.dates}
              </td>
              <td style={{ padding: "8px 12px" }}>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <h1 style={{ fontSize: "50px", textAlign: "center" }}>
        Currently working on ideas in data science automation and conversational
        AI. <span style={{ color: "blue" }}>Happy to chat!</span>
      </h1>
    </>
  );
};

export default Experience;
