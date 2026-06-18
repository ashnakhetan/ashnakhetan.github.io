import React from "react";
import profilePhoto from "../assets/profile-grad-crop.jpg";
import QuestionCard from "../components/Question";

const Intro = () => {
  return (
    <div className="intro_section">
      <div className="hero-copy">
        <h1 className="intro">Hi, I'm Ashna.</h1>
        <p className="hero-lede">
          I make machines smarter so I don't have to be. Just graduated from
          Stanford; now working on world models, robotics, and agents.
        </p>
        <div className="hero-links">
          <a
            className="hero-link-world"
            href="https://build.nvidia.com/nvidia/cosmos-predict1-7b"
            target="_blank"
            rel="noreferrer"
          >
            world models
          </a>
          <a
            className="hero-link-good"
            href="https://cs4good.com/"
            target="_blank"
            rel="noreferrer"
          >
            social good
          </a>
          <a
            className="hero-link-dance"
            href="https://basmatiraas.wixsite.com/stanford"
            target="_blank"
            rel="noreferrer"
          >
            dance
          </a>
          <a
            className="hero-link-writing"
            href="https://ashnak03.substack.com/"
            target="_blank"
            rel="noreferrer"
          >
            writing
          </a>
        </div>
      </div>
      <div className="hero-media">
        <div className="profile-frame">
          <img
            className="profile_pic"
            src={profilePhoto}
            alt="Ashna at graduation"
          />
          <div className="profile-caption">
            <p>💭 currently musing about robot evals & agentic data collection</p>
            <a
              className="profile-caption-link"
              href="https://x.com/ashna_khetan"
              target="_blank"
              rel="noreferrer"
            >
              let's talk
            </a>
          </div>
        </div>
        <div className="question-wrap">
          <QuestionCard />
        </div>
      </div>
    </div>
  );
};

export default Intro;
