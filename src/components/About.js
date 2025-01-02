import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("about constructor");
  }
  componentDidMount() {
    console.log("about didmount");
  }
  render() {
    return (
      <div>
        <h2>About</h2>
        <div>
          LoggedIn User
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          <UserContext.Consumer></UserContext.Consumer>
        </div>
        <h5>This is about react series</h5>

        <UserClass name={"Rachana Patil   (Class)"} />
      </div>
    );
  }
}
export default About;
