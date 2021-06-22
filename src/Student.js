import React from "react";
import style from "./student.module.css";

export class Student extends React.Component {
  render() {
    return (
      <>
        <li>
          The name is {this.props.name} and the average grade is{" "}
          {this.props.grade}
        </li>
      </>
    );
  }
}
