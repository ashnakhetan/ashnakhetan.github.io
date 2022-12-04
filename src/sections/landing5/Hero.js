import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";
import RotateImg from "../../components/RotateImg";

import { Title, Section, Box, Button } from "../../components/Core";
// import GlobalContext from "src/context/GlobalContext.js";

import bgHeroPattern from "../../assets/image/webp/hero-pattern-2.webp";
import profPic from "../../assets/image/jpg/ProfilePic.jpg";


const SectionStyled = styled(Section)`
  &::before {
    position: absolute;
    top: -80px;
    content: "";
    width: 100%;
    height: 100%;
    background: url(${bgHeroPattern}) top center no-repeat;
    background-size: cover;
  }
`;

const Hero = () => {
  // const gContext = useContext(GlobalContext);
  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled hero className="position-relative">
        <Container>
          <Box
            pt={["60px", null, "80px", "10px"]}
            pb={["40px", null, "60px", "25px"]}
          >
            <Box className="d-flex flex-column align-items-center text-center">
              <img src={profPic} width={100}/>
              {/* <RotateImg imgSrc={profPic} imgWidth={100}/> */}
              {/* width={100} */}
              <Box
              pt={["60px", null, "80px", "40px"]}
              />
              <Title
                color="light"
                variant="card"
                mb="2.5rem"
                css={`
                  font-size: 1.3125rem;
                  line-height: 1.5;
                  font-weight: 400;
                `}
              >
                Hi, i'm Ashna ☺️
              </Title>

              <Title color="light" variant="hero" mb="3.75rem">
                i'm a full-stack developer & <br /> ai enthusiast
              </Title>
              <Link
                to="works"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
              >
                <Button variant="success" arrowRight>
                  Explore projects
                </Button>
                
              </Link>
                    {/* <Button
                      className="nav-link"
                      href="/#"
                      onClick={(e) => {
                        e.preventDefault();
                        gContext.toggleAbout();
                      }}
                    >
                      Learn about me
                    </Button> */}
              {/* <Link
                href="/#"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
              >
                <Button variant="success" arrowRight>
                  Learn about me
                </Button>
                </Link> */}
            </Box>
          </Box>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;
