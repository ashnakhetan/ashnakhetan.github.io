/* Currently unused */
import React, { useRef } from 'react';

import EmailCopy from '../components/EmailCopy';

/* Icons + Images */
import LinkedInIcon from '../icons/LinkedInIcon';
import GithubIcon from '../icons/GithubIcon';

import colors from '../themes/colors';

const Header = () => {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);

    const scrollToSection = (sectionRef) => {
        window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: 'smooth'
        });
    };

    return (
        <header style={{backgroundColor: colors.header}}>
        <div className="navButtons">
          <button onClick={() => scrollToSection(section1Ref)}>Me</button>
          <button onClick={() => scrollToSection(section2Ref)}>Projects</button>
          <button onClick={() => scrollToSection(section3Ref)}>Experience</button>
        </div>

        <div className="contactButtons">
          <p style={{ color: colors.green }}>all my contacts/socials</p>
          <a href="https://www.linkedin.com/in/ashna-khetan/" target="_blank" className="linkedin-button">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/ashnakhetan/" target="_blank" className="linkedin-button">
            <GithubIcon />
          </a>
          <EmailCopy text="ashnak@stanford.edu" />
        </div>
      </header>
    )
};

export default Header;
