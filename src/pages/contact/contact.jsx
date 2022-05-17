import Container from "react-bootstrap/Container"
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './contact.css'
import mail from '../../assets/email.png'
import Image from 'react-bootstrap/Image'
import { useNavigate } from "react-router-dom";
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import { Link } from "react-router-dom"


function Contact() {

    const navigate = useNavigate()

    return <Container fluid className='container'>
        <Row>
            <Card className="p-0 align-items-end me-5 home_link" style={{ "width": "100%" }} bg="transparent">
                <Card.Text onClick={() => navigate("/")} className=" fs-4 stack_list m-5">HOME</Card.Text>
            </Card>
        </Row>
        <Row className="contact_bg m-0">
            <Col
                className='m-0 p-0'
                xs={12}
                sm={12}
                md={8}
                lg={8}
                xl={6}>
                <Card className='contact_card pt-5'>
                    <Row className="contact_bg">
                        <Image className="mail_image" src={mail}></Image>
                        <Card.Text className="fs-1 mt-5 text-center">info.larom@gmail.com</Card.Text>
                    </Row>
                    <Row className="m-0 p-0 link_bg">
                        <a className="link" target={'_blank'} href="https://github.com/ccrolo"><Image  className='icons_contact mt-5 mb-5 m-0' src={github} ></Image></a>
                        <a className="link" target={'_blank'} href="https://www.linkedin.com/in/cristina-romero-lopez/"><Image className='icons_contact mt-5 mb-5' src={linkedin} /></a>
                    </Row>
                </Card>
            </Col>
        </Row>
    </Container>
}

export default Contact