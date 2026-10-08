import React from "react";
import { ArrowUpRight } from "lucide-react";
import EmailCopy from "../components/EmailCopy";
import profilePhoto from "../assets/profile-240.webp";
import profilePhoto480 from "../assets/profile-480.webp";
import profilePhoto720 from "../assets/profile-720.webp";

const Intro = () => (
  <>
    <div className="intro-grid">
      <div className="intro-copy">
        <h1 id="intro-title">Ashna Khetan</h1>
        <p className="intro-role">
          AI Engineer <span aria-hidden="true">/</span> NVIDIA
        </p>
        <p className="intro-lede">
          I work on world models, robotics, and agents, with a focus on how
          intelligent systems understand and interact with the physical world.
        </p>
        <p className="intro-bio">
          At{" "}
          <a
            href="https://research.nvidia.com/labs/cosmos-lab/cosmos3/"
            target="_blank"
            rel="noreferrer"
          >
            NVIDIA
          </a>
          , I help build world foundation models with Cosmos3. I studied
          Computer Science (B.S./M.S.) at{" "}
          <a
            href="https://www.cs.stanford.edu/"
            target="_blank"
            rel="noreferrer"
          >
            Stanford
          </a>
          , where my research spanned long-context reasoning and conversational
          AI.
        </p>
        <div className="intro-links">
          <EmailCopy text="ashnakhetan@gmail.com" label="Email" />
          <a
            href="https://scholar.google.com/citations?user=-OxZajQAAAAJ&hl=en"
            target="_blank"
            rel="noreferrer"
          >
            Google Scholar <ArrowUpRight size={14} />
          </a>
          <a
            href="https://github.com/ashnakhetan/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight size={14} />
          </a>
          <a
            href="https://www.linkedin.com/in/ashna-khetan/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight size={14} />
          </a>
          <a
            href="https://ashnak03.substack.com/"
            target="_blank"
            rel="noreferrer"
          >
            Writing <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
      <figure className="portrait">
        <img
          src={profilePhoto}
          srcSet={`${profilePhoto} 240w, ${profilePhoto480} 480w, ${profilePhoto720} 720w`}
          sizes="(max-width: 520px) 96px, (max-width: 700px) 150px, (max-width: 900px) 190px, 224px"
          alt="Ashna Khetan at her Stanford graduation"
          width="240"
          height="300"
          fetchpriority="high"
          loading="eager"
          decoding="async"
        />
        <figcaption>Stanford University</figcaption>
      </figure>
    </div>
    <div className="research-focus" aria-label="Research interests">
      <div>
        <span className="focus-index">01</span>
        <h2>World models</h2>
        <p>Physical understanding &amp; generation</p>
      </div>
      <div>
        <span className="focus-index">02</span>
        <h2>Robot evaluation</h2>
        <p>Measuring embodied intelligence</p>
      </div>
      <div>
        <span className="focus-index">03</span>
        <h2>Conversational AI</h2>
        <p>Grounding &amp; human-AI interaction</p>
      </div>
    </div>
  </>
);

export default Intro;
