import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { X } from "lucide-react";
import EmailCopy from "./EmailCopy";

const AgentMode = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === "#agents") setIsOpen(true);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return (
    <>
      <button
        type="button"
        className="agent-mode-trigger"
        onClick={() => setIsOpen(true)}
      >
        For agents
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="agent-mode-title"
        maxWidth="sm"
        fullWidth
        PaperProps={{ className: "agent-mode-dialog" }}
      >
        <DialogTitle id="agent-mode-title">
          Research profile
          <button
            type="button"
            className="agent-mode-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close research profile"
          >
            <X size={20} />
          </button>
        </DialogTitle>
        <DialogContent>
          <p className="agent-intro">
            Ashna Khetan works on world models, robotics evaluation, and agentic
            data collection.
          </p>
          <dl className="agent-mode-facts">
            <div>
              <dt>Current role</dt>
              <dd>
                Generative AI Software Engineer at NVIDIA, working on world
                foundation models with Cosmos3
              </dd>
            </div>
            <div>
              <dt>Education</dt>
              <dd>Computer Science, B.S./M.S., Stanford University</dd>
            </div>
            <div>
              <dt>Research interests</dt>
              <dd>
                World models, embodied intelligence, robot evaluation, agentic
                data collection, and conversational AI
              </dd>
            </div>
            <div>
              <dt>Contact</dt>
              <dd>
                <EmailCopy
                  text="ashnakhetan@gmail.com"
                  label="ashnakhetan@gmail.com"
                />
              </dd>
            </div>
          </dl>
          <div className="agent-mode-links">
            <a
              href="https://ashnak03.substack.com/"
              target="_blank"
              rel="noreferrer"
            >
              Writing
            </a>
            <a
              href="https://www.linkedin.com/in/ashna-khetan/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://arxiv.org/abs/2603.23841"
              target="_blank"
              rel="noreferrer"
            >
              PoliticsBench
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AgentMode;
