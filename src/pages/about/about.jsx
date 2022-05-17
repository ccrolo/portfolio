import Container from "react-bootstrap/Container"
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button"
import "./about.css"
import me from "../../assets/me.png"
import Image from "react-bootstrap/Image"
import React from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom";

function About() {
    const [t, i18n] = useTranslation("global")
    const navigate = useNavigate()

    return (

        <Container fluid className='container '>
            <Row>

                <Card className='about_card m-0 pt-0'>
                    <Card className="p-0 align-items-end me-5 mt-3 home_link" style={{ "width": "100%" }} bg="transparent">
                        <Card.Text onClick={() => navigate("/")} className=" fs-4 stack_list">HOME</Card.Text>
                    </Card>
                    <Col className="bg_card"
                        xs={10}
                        sm={12}
                        md={10}
                        lg={8}
                        xl={8}>

                        <Image className="me pt-0 mt-0" src={me}></Image>
                        <Card bg="transparent" className="fs-5 stack m-0 p-0 mb-3">
                            <Card.Text className="stack_list">JavaScript</Card.Text>
                            <Card.Text className="stack_list">React.js</Card.Text>
                            <Card.Text className="stack_list">Angular.js</Card.Text>
                            <Card.Text className="stack_list">TypeScript</Card.Text>
                            <Card.Text className="stack_list">Bootstrap</Card.Text>
                            <Card.Text className="stack_list">MUI</Card.Text>
                            <Card.Text className="stack_list">CSS3</Card.Text>
                            <Card.Text className="stack_list">HTML5</Card.Text>
                            <Card.Text className="stack_list">SASS</Card.Text>
                            <Card.Text className="stack_list">Express.js</Card.Text>
                            <Card.Text className="stack_list">Node.js</Card.Text>
                            <Card.Text className="mt-0 stack_list">MongoDb</Card.Text>
                        </Card>
                        <Card className="buttons_bg   pt-5 mt-0">
                            <Button className="buttons" variant="secondary" onClick={() => i18n.changeLanguage("es")}>ES</Button>
                            <Button className="buttons" variant="secondary" onClick={() => i18n.changeLanguage("en")}>EN</Button>
                        </Card>

                        <Card bg="transparent" className="mt-0 pt-5 fs-4" >
                            <Card.Text className="mb-5 px-3">
                                {t("aboutMe.aboutMe1")}

                            </Card.Text>
                            <Card.Text className="mb-5 px-3">
                                {t("aboutMe.aboutMe2")}

                            </Card.Text>
                            <Card.Text className="mb-5 px-3">
                                {t("aboutMe.aboutMe3")}

                            </Card.Text>
                            <Card.Text className="mb-5 pb-5 px-3" style={{ "padding-bottom": "500px" }}>
                                {t("aboutMe.aboutMe4")}

                            </Card.Text>
                        </Card>
                    </Col>
                </Card>
            </Row>
        </Container>
    )
}

export default About