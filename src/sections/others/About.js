import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Span } from "../../components/Core";
import imgPhoto from "../../assets/image/jpg/photo/AshnaWalking.jpg";
import imgSignLight from "../../assets/image/png/signature.png";

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

const About = ({ hero = true, bg = "dark", ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <div>
                <img src={imgPhoto} alt="folio" className="img-fluid" />
              </div>
            </Col>
            <Col lg="6">
              <div className="pl-lg-4 pt-5 pt-lg-0">
                <Title color="light" variant="secSm">
                  Ashna Khetan
                </Title>
                <Text
                  color="light"
                  className="mt-3 mt-lg-5"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  Sophomore studying Computer Science @ Stanford. I am from Northville, Michigan.
                </Text>
                <Text color="light" className="mt-4">
                  Whenever I go to a new place, I try to visit every major restaurant before eating the same cuisine twice.
                  Similarly, I've dabbled in many areas of CS, from SWE to AI to VR to Security to ethics. I'm most interested
                  in using AI in social impact tech, where it can be used to augment human purpose and connection.
                </Text>
                <div className="mt-4">
                  <Text color="light">Email me at</Text>

                  <Text variant="p">
                    <a
                      href="mailto:ashnak@stanford.edu"
                      className="font-weight-bold"
                    >
                      <Span color="light">ashnak@stanford.edu</Span>
                    </a>
                  </Text>
                </div>
                {/* <div className="mt-5">
                  <img src={imgSignLight} alt="sign" className="img-fluid" />
                </div> */}
                {/* <Text color="light" className="mt-3 font-weight-bold">
                  Bruce Ryan
                </Text> */}
                {/* <Text color="light" variant="small">
                  Founder of Folio Digital
                </Text> */}
                <div className="mt-5 d-flex">
                  <LinkSocial
                    href="https://www.linkedin.com/in/ashna-khetan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    LinkedIn
                  </LinkSocial>
                  <LinkSocial
                    href="https://www.twitter.com/ashna-khetan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" mr-3"
                  >
                    Twitter
                  </LinkSocial>
                  <LinkSocial
                    href="https://devpost.com/ashnakhetan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    DevPost
                  </LinkSocial>
                  <LinkSocial
                    href="https://github.com/ashnakhetan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-weight-bold"
                  >
                    Github
                  </LinkSocial>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default About;
