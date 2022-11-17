import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Box } from "../../components/Core";

import {useState} from 'react';

const BoxStyled = styled(Box)`
  transition: 0.4s;
  &:hover {
    transform: scale(0.8) rotate(-16deg);
    border-radius: 20px;
    box-shadow: 0 32px 74px rgba(68, 77, 136, 0.2);
    overflow: hidden;
    opacity: 0.5;
  }
`;

const RotateImg = ({ link = "/", imgSrc, imgWidth="100px", ...rest }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <div>
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <BoxStyled {...rest}>
         <Link to={link} className="d-block">
           <img src={imgSrc} width={imgWidth} alt="" className="w-100"/>
           {isHovering && <h2>Description Here</h2>}
         </Link>
       </BoxStyled>
        </div>
      </div>
    </div>
  );
};

export default RotateImg;
;




// const RotateImg = ({ link = "/", imgSrc, imgWidth="100px", ...rest }) => {
//   return (
//     <>
//       <BoxStyled {...rest}>
//         <Link to={link} className="d-block">
//           <img src={imgSrc} width={imgWidth} alt="" className="w-100"/>
//         </Link>
//       </BoxStyled>
//     </>
//   );
// };
// export default RotateImg;
