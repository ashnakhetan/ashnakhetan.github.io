import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../components/Core";
import YouTubePlayer from "react-player/youtube";
import PageWrapper from "../components/PageWrapper";
import Contact from "../sections/common/Contact";
import imgWorkCover from "../assets/image/jpg/details/details-1.jpg";
import trashTalkImg from "../assets/image/png/TrashTalkImage.png";
import PlanIt1 from "../assets/image/png/PlanIt1.jpg";
import PlanIt2 from "../assets/image/png/PlanIt2.jpg";
import AggreVision from "../assets/image/png/AggreVision.png"
import Dashboard from "../assets/image/png/Dashboard.png"
import Dashboard2 from "../assets/image/png/Dashboard2.png"
import imgS1 from "../assets/image/jpg/details/details-6.jpg";
import imgS2 from "../assets/image/jpg/details/details-5.jpg";
import imgS3 from "../assets/image/jpg/details/details-4.jpg";
import imgS4 from "../assets/image/jpg/details/details-3.jpg";
import imgS5 from "../assets/image/jpg/details/details-8.jpg";
import imgS6 from "../assets/image/jpg/details/details-7.jpg";
import { device } from "../utils";
import ProjectDetails from "../components/ProjectDetails";
// import ProjectDetails from "../components/ProjectDetails/ProjectDetails";

const WorkSingle = () => {
  return (
    <>
      <PageWrapper>
        <Container
          fluid
          className="px-sm-5"
          css={`
            margin-top: 92px;
          `}
        >
          {/* <img src={imgWorkCover} alt="" className="img-fluid w-100" /> */}
        </Container>
        <Section className="mt-lg-5">
          <Container>
            <Row>
              <Col lg="8">
                <Text variant="tag">CHATBOT</Text>
                <Title variant="secSm" className="my-4">
                  TrashTalk- the chatbot that guides your waste disposal.{" "}
                </Title>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                  TrashTalk is a chatbot that gives a user advice on where to dispose of their 
                  waste. It provides educated & educational responses that not only give you an 
                  immediate answer but also enough information to learn why. And, it's self-aware. 
                  On the site itself, you can explore resources, classification charts, and more!
                </Text>
                <Text variant="h3"
                >Technologies: Node.js, React.js, Google Dialogflow
                </Text>
                <a href="https://devpost.com/software/trashtalk-cbq3rz" target="_blank"> Link to DevPost 
                </a>
                <br></br>
                <a href="https://ashnakhetan.github.io/trashtalk/" target="_blank"> Link to Web App 
                </a>
              </Col>
              <Col>
              <img src={trashTalkImg} width={300}></img>
              </Col>
            </Row>
          </Container>
        </Section>
        
        <Section id="section-1" className="mt-lg-5">
          <Container>
            <Row>
              <Col>
              {/* <img src={trashTalkImg} width={300}></img> */}
              <YouTubePlayer url="https://www.youtube.com/watch?v=jizdJsr8PCw"></YouTubePlayer>
              </Col>
              <Col >
                <Text variant="tag">OBJECT-RECOGNITION</Text>
                <Title variant="secSm" className="my-4">
                  PlastiClass{" "}
                </Title>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                  An object-recognition web app that classifies any items you hold in front of the camera into 8 different categories of plastic. It then provides you with an educated answer as to where it can be recycled, if recyclable!
                </Text>
                <Text variant="h3"
                >Technologies: React.js, ML5, HTML
                </Text>
                <a href="https://devpost.com/software/plasticlass-gidasn" target="_blank"> Link to DevPost 
                </a>
                <br></br>
                <a href="https://ashnakhetan.github.io/plasticlass/" target="_blank"> Link to Web App 
                </a>
              </Col>
            </Row>
          </Container>
        </Section>

        <Section id="section-2" className="mt-lg-5">
          <Container>
            <Row>
              <Col>
              <img src={PlanIt1} width={200}></img>
              </Col>
              <Col class="px-0">
              <img src={PlanIt2} width={200}></img>
              </Col>
              <Col>
                <Text variant="tag">MOBILE</Text>
                <Title variant="secSm" className="my-4">
                  PlanItStudent{" "}
                </Title>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
Time management— we all struggle with it. All we need is something to hold us accountable for the time it should take to complete our tasks… and something that helps us realize when we're spending more.
Planit Student doesn't just organize your day… it creates good habits and teaches time accountability… so that one day, you won't need the app any longer.</Text>
                <Text variant="h3"
                >Technologies: React Native, Google Firebase
                </Text>
                <a href="https://planitapp2020.wordpress.com/" target="_blank"> Link to Site 
                </a>
              </Col>
            </Row>
          </Container>
        </Section>

        <Section id="section-3" className="mt-lg-5">
          <Container>
            <Row>
              <Col>
              <img src={AggreVision} width={400}></img>
              </Col>
              <Col >
                <Text variant="tag">EMOTION-DETECTION</Text>
                <Title variant="secSm" className="my-4">
                AggreVision- Affectiva EMPath Intern 2020{" "}
                </Title>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
Through surveys, we found that aggression comes in three forms: anger, surprise, and fear, all three of which can cause aggressive driving. Our product uses computer vision to detect those aggressive expressions in a driver's face and immediately stops the driver from acting on their destructive emotion.
</Text>
                <Text variant="h3"
                >Technologies: PyTorch, CNNs, OpenCV
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>

        <Section id="section-4" className="mt-lg-5">
          <Container>
            <Row>
              <Col >
                <Text variant="tag">EMOTION-DETECTION</Text>
                <Title variant="secSm" className="my-4">
                Traffic Control Dashboard for Connected Vehicles{" "}
                </Title>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
(University of Michigan Next-Gen Mobility Systems Lab 2020):
Anticipating a future of connected cars, I was tasked with implementing a dashboard for Traffic Control Centers to visualize the aggression of cars approaching intersections through a real-time animated map and 3D bar graphs. In addition, due to the inaccuracies of GPS technologies, I derived a coordinate-correcting algorithm to adjust cars into lanes.</Text>
                <Text variant="h3"
                >Technologies: Javascript, Python, MatPlotLib, Dash
                </Text>
              </Col>
              <Col>
              <Row><img src={Dashboard} width={550}></img></Row>
              <Row><img src={Dashboard2} width={550}></img></Row>
              </Col>
            </Row>
          </Container>
        </Section>

        <Section id="section-5">
          <Container>
            <Row>
              <h2>Other projects available on my <span><a href="https://devpost.com/ashnakhetan">Devpost</a></span> or <span><a href="https://github.com/ashnakhetan/" >Github</a></span>. Check them out!</h2>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default WorkSingle;
