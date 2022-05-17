import './landing.css'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import projects2 from '../../assets/projects2.png'
import projects from '../../assets/projects.png'
import about from '../../assets/about_me.png'
import about2 from '../../assets/about_me2.png'
import contact from '../../assets/contact.png'
import contact2 from '../../assets/contact2.png'
import Image from 'react-bootstrap/Image'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import CV from "../../assets/CV.pdf"




function Landing() {
    const [imageProjects, setImageProjects] = useState(false)
    const [imageAbout, setImageAbout] = useState(false)
    const [imageContact, setImageContact] = useState(false)

    const navigate = useNavigate()



    return <Container fluid className='container'>
        <Row>
            <Card className='card'>
                <Card.Text className='text-center'>CRISTINA ROMERO</Card.Text>
                <Card.Text className='secondary_text text-center'>Fullstack Web Developer</Card.Text>
            </Card>
        </Row>

        <Row>
            <Col
                className=' m-0 p-0'
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}>
                <Card className='card'>
                    <Row className='images_bg'>
                        {imageProjects === true ?
                            <Image
                                onClick={() => navigate('/projects')}
                                onMouseEnter={() => setImageProjects(true)}
                                onMouseOut={() => setImageProjects(false)}
                                className='images'
                                src={projects2} /> :
                            <Image
                                onClick={() => navigate('/projects')}
                                onMouseEnter={() => setImageProjects(true)}
                                onMouseOut={() => setImageProjects(false)}
                                className='images'
                                src={projects} />}

                        {imageAbout === true ?
                            <Image
                                onClick={() => navigate('/about')}
                                onMouseEnter={() => setImageAbout(true)}
                                onMouseOut={() => setImageAbout(false)}
                                className='images'
                                src={about2} /> :
                            <Image
                                onClick={() => navigate('/about')}
                                onMouseEnter={() => setImageAbout(true)}
                                onMouseOut={() => setImageAbout(false)}
                                className='images'
                                src={about} />}

                        {imageContact === true ?
                            <Image
                                onClick={() => navigate('/contact')}
                                onMouseEnter={() => setImageContact(true)}
                                onMouseOut={() => setImageContact(false)}
                                className='images'
                                src={contact2} /> :
                            <Image
                                onClick={() => navigate('/contact')}
                                onMouseEnter={() => setImageContact(true)}
                                onMouseOut={() => setImageContact(false)}
                                className='images'
                                src={contact} />}
                    </Row>
                </Card>

            </Col>
            <Col className='p-0' xl={12}>
                <Card className='card p-0 text-center card_links'>
                    <Row className='pt-1 mt-5'>
                        <a className='cv px-5 py-2 mt-5' href={CV} download="Cristina_Romero_CV">Download CV</a>
                    </Row>
                    <Row>
                        <Col className='link_bg' xl={12}>
                            <a className="link" target={'_blank'} href="https://github.com/ccrolo"><Image className='icons' src={github} /></a>
                            <a className="link" target={'_blank'} href="https://www.linkedin.com/in/cristina-romero-lopez/"><Image className='icons' src={linkedin} /></a>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    </Container>
}

export default Landing