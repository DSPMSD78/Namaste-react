import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/DSPMSD78");

    const json = await data.json();

    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="m-4 p-4 grid grid-cols-2 justify-items-center mx-auto w-1/2">
        <img className="rounded-lg w-48 h-48" src={avatar_url} />
        <div className="text-center my-auto">
          <h1>Name : {name}</h1>
          <h3>Location : {location}</h3>
          <h3>Contact - @msdDsp</h3>
        </div>
      </div>
    );
  }
}

export default UserClass;
