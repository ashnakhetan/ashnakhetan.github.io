import React, { useState } from 'react';
import CursorPopup from './Popup';

const EmailCopy = ({ text }) => {
    const [showPopup, setShowPopup] = useState(false);

    const copyText = async () => {
      try {
        await navigator.clipboard.writeText(text);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    };
  
    return (
        <div className="email-copy">
          <p onClick={copyText} className='email-button'>
              {text}
          </p>
          {showPopup && <CursorPopup text="email copied to clipboard"/>}
        </div>
    );
};

export default EmailCopy;