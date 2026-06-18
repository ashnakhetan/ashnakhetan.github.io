import React, { useState } from 'react';
import CursorPopup from './Popup';

const EmailCopy = ({
    text,
    label,
    wrapperClassName = '',
    buttonClassName = '',
    popupText = 'email copied to clipboard',
}) => {
    const [showPopup, setShowPopup] = useState(false);

    const copyText = async () => {
      try {
        await navigator.clipboard.writeText(text);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    };
  
    return (
        <div className={`email-copy ${wrapperClassName}`.trim()}>
          <button onClick={copyText} className={`email-button ${buttonClassName}`.trim()} type="button">
              {label || text}
          </button>
          {showPopup && <CursorPopup text={popupText}/>}
        </div>
    );
};

export default EmailCopy;
