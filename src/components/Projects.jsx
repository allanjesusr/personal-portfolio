import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import TrackVisibility from "react-on-screen";
import 'animate.css';

export const Projects = () => {

    const projects = [
        {
            title: "Business Startup",
            description: 'Design & Development',
            img: projImg1
        },
        {
            title: "Business Startup",
            description: 'Design & Development',
            img: projImg2
        },
        {
            title: "Business Startup",
            description: 'Design & Development',
            img: projImg3
        },
        {
            title: "Business Startup",
            description: 'Design & Development',
            img: projImg1
        },
        {
            title: "Business Startup",
            description: 'Design & Development',
            img: projImg2
        },
        {
            title: "Business Startup",
            description: 'Design & Development',
            img: projImg3
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__slideInUp" : ''}>
                                    <h2>Projects</h2>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque aliquam possimus, neque repellendus delectus eum quo, perferendis doloribus ipsa architecto commodi eveniet dolorem accusamus odit libero sequi culpa aliquid quidem.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="thrid">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => (
                                                            <ProjectCard
                                                                key={index}
                                                                title={project.title}
                                                                description={project.description}
                                                                imgUrl={project.img}
                                                            />
                                                        ))
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                                            <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
