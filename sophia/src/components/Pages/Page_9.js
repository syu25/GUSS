import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_9.JPG";
import { Link } from "react-router-dom";
class Page9 extends Component {
  handleKeyPress = e => {
    let buttonName = e.target.className;
    let buttonNameSplit = buttonName.split(" ");
    if (e.keyCode === 39) {
      if (buttonNameSplit[0] === "leftBtn") {
        this.refs.sound.focus();
      }
      if (buttonNameSplit[0] === "sound") {
        this.refs.rightBtn.focus();
      }
    } else if (e.keyCode === 37) {
      if (buttonNameSplit[0] === "rightBtn") {
        this.refs.sound.focus();
      }
      if (buttonNameSplit[0] === "sound") {
        this.refs.leftBtn.focus();
      }
    }
  };
  render() {
    return (
      <div className="Page9">
        <div className="text">
          Sofia's dad had some questions for Dr. Q too. “Are there different
          kinds of research?” he asked. “Yep! There are many types of research!”
          Dr. Q said, “Sometimes we ask people to take a survey. This means you
          answer questions on a piece of paper or a computer about yourself.
          Other times we ask people to try doing something new or different to
          see if it makes them feel better. This may mean taking a different
          medicine or eating different foods, or many other types of things.
          Scientists or researchers may watch people and take notes. This is
          called observation. They also might read what people write on a
          survey. This helps them learn about the people in their study.
          Scientists might ask you to take some notes about what you are doing
          each week that you are in a study. All of this information is called
          data.”
        </div>
        <img src={Image} alt="image" />
        <div className="alt_text">
        Dr.Q, Sofia and her dad and brother looking up into a vortex of numbers and research words, graphs, tools, etc.
        </div>
        <Link to="/page8" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            ref="leftBtn"
            className="leftBtn"
          >
            Prev Page
          </Button>
        </Link>
        <Link to="/page10" style={{ textDecoration: "none" }}>
          <Button
            autoFocus
            ref="rightBtn"
            onKeyDown={this.handleKeyPress}
            className="rightBtn"
          >
            Next Page
          </Button>
        </Link>
        <Button onKeyDown={this.handleKeyPress} ref="sound" className="sound">
          sound
        </Button>
      </div>
    );
  }
}

export default Page9;
