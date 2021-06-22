import React from "react";
import { Student } from "./Student";

export class School extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({ date: new Date() });
    }, 5000);
  }
  render() {
    return (
      <>
        <h2 style={{ color: "red" }} id="time">
          It is {this.state.date.toLocaleTimeString()}
        </h2>
        <ul>
          {this.props.school.map((student) => (
            <Student
              name={student.name}
              grade={student.grade}
              key={student.key}
            />
          ))}
        </ul>
      </>
    );
  }
}
