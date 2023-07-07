import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="m-4 p-4 border border-solid border-orange-200">
        <h1 className="text-2xl text-center underline">Developer</h1>
        <UserClass name="DSPMSD" location="RCPM" />
      </div>
    );
  }
}

export default About;
