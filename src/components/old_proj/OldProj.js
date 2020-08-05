import React from "react";

import Comment from "./Comment";
import ApprovalCard from "./ApprovalCard";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

export default class OldProj extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  getDisplay() {
    const { lat, errorMessage } = this.state;

    if (lat && !errorMessage) {
      return <SeasonDisplay lat={lat} />;
    }

    if (!lat && errorMessage) {
      return <h4>Error: {errorMessage}</h4>;
    }
    return <Spinner message="Please accept location request" />;
  }

  render() {
    return (
      <section className="ui container comments">
        {this.getDisplay()}
        <ApprovalCard>
          <Comment
            author="Sam Snubbs"
            meta="Yesterday at 02:31"
            comment="I love this, lol"
          />
        </ApprovalCard>
      </section>
    );
  }
}
