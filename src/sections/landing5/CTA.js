import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import { Section, Title, ButtonIcon } from "../../components/Core";
import bgFooter from "../../assets/image/png/subscribe-pattern.png";

const SectionStyled = styled(Section)`
  &::before {
    position: absolute;
    bottom: -150px;
    content: "";
    width: 120%;
    height: 150%;
    background: url(${bgFooter}) bottom center no-repeat;
    background-size: cover;
  }
`;

const LinkSocial = styled.a`
  color: ${({ theme }) => theme.colors.light} !important;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 1.63px;
  transition: 0.4s;
  &:hover {
    color: ${({ theme }) => theme.colors.light} !important;
    transform: translateY(-5px);
  }
`;

const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      <SectionStyled className="position-relative">
        <Container>
          <Row className="text-center justify-content-center">
            <Col lg="11" xl="10">
              <div className="text-center mb-5">
                <Title color="light" variant="secSm">
                  Please reach out with any questions or ideas! I love to talk tech.
                </Title>
                <br></br>
                <LinkSocial
                    href="https://www.linkedin.com/in/ashna-khetan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    LinkedIn
                  </LinkSocial>
                  <LinkSocial
                    href="mailto:ashnak@stanford.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    ashnak@stanford.edu
                  </LinkSocial>
              </div>
              {/* <div className="text-center">
                <ButtonIcon
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleContact();
                  }}
                >
                  Contact me
                </ButtonIcon>
              </div> */}
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;
