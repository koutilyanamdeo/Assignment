import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Alert, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="container">
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>Student DashBoard</Navbar.Brand>
        </Container>
      </Navbar>
      <br />

      <div className="marks">
        <div className="disp-marks">
          <p>Minimum Marks</p>
          <p>Maximum Marks</p>
          <p>Average Marks</p>
        </div>

        <br />

        <div className="add-student">
          <p>Add New Student</p>
          <input
            type="text"
            name="student-name"
            placeholder="Student Name"
          ></input>
          <input
            type="number"
            name="student-marks"
            placeholder="Student Marks"
          ></input>
          <button className="register-btn">Register</button>
        </div>
        <br />

        <div className="information-container">
          <table className="tb">
            <thead>
              <tr className="table-heading">
                <th>Roll Number</th>
                <th>Student Name</th>
                <th>Marks</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              <Alert />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
