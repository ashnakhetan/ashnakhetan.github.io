import React from "react";
import profilePhoto from "../assets/profile2.png";
import QuestionCard from "../components/Question";

const Intro = () => {
  return (
    <div className="intro_section">
      <div className="left_side">
        <h1 className="intro">Hi, I'm Ashna.</h1>
        <img
          className="profile_pic"
          src={profilePhoto}
          alt="photo of me at Grace Hopper Celebration next to a Mickey Mouse statue!"
        ></img>
      </div>
      <div className="right_side" style={{ marginRight: "40px" }}>
        <p className="intro">
          I enjoy building things for others to enjoy. I'm a computer science ai
          bs & ms student @ Stanford. I also{" "}
          <a
            href="https://web.stanford.edu/class/cs106b/about_staff"
            target="_blank"
            className="teach"
          >
            teach cs
          </a>
          , research{" "}
          <a
            href="https://arxiv.org/abs/2311.09144"
            target="_blank"
            className="nlp"
          >
            conversational nlp
          </a>
          , lead an effort to spread{" "}
          <a href="https://cs4good.com/" target="_blank" className="cssg">
            cs for social good
          </a>
          , and{" "}
          <a
            href="https://basmatiraas.wixsite.com/stanford"
            target="_blank"
            className="dance"
          >
            dance
          </a>
          !<br />
          <br />
          I want to share some of my projects and experiences with you.
          <br />
          <br />
          But first, answer this! (To view u a cool non-professional thing i've
          done in the past).
        </p>
        <br></br>
        <QuestionCard />
      </div>
    </div>
  );
};

export default Intro;
