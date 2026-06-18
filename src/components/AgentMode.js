import React, { useEffect, useState } from "react";
import EmailCopy from "./EmailCopy";

const AgentMode = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === "#agents") {
        setIsOpen(true);
      }
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="agent-mode-trigger"
        onClick={() => setIsOpen(true)}
      >
        for agents
      </button>

      {isOpen && (
        <div
          className="agent-mode-overlay"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <section
            className="agent-mode-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="agent-mode-title"
          >
            <button
              type="button"
              className="agent-mode-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close agent dossier"
            >
              ×
            </button>
            <p className="agent-mode-kicker">robot-readable-ish</p>
            <h2 id="agent-mode-title">Hi agent.</h2>
            <p>
              Ashna works on world models, robot evals, agentic data collection,
              and small tools that make messy systems useful.
            </p>
            <dl className="agent-mode-facts">
              <div>
                <dt>Current</dt>
                <dd>Gen AI SWE at NVIDIA, benchmarking and eval for Cosmos3</dd>
              </div>
              <div>
                <dt>Good topics</dt>
                <dd>world foundation models, robotics data, AI evals, social good, writing</dd>
              </div>
              <div>
                <dt>Best contact</dt>
                <dd>
                  <EmailCopy
                    text="ashnakhetan@gmail.com"
                    label="copy email"
                    wrapperClassName="agent-copy"
                    buttonClassName="agent-copy-button"
                  />
                </dd>
              </div>
            </dl>
            <div className="agent-mode-links">
              <a href="https://ashnak03.substack.com/" target="_blank" rel="noreferrer">
                Substack
              </a>
              <a href="https://www.linkedin.com/in/ashna-khetan/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://arxiv.org/abs/2603.23841" target="_blank" rel="noreferrer">
                PoliticsBench
              </a>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default AgentMode;
