import Container from "react-bootstrap/Container"
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import "./projects.css"
import bitacora from '../../assets/bitacora.png'
import weather from '../../assets/weather.png'
import kanban from '../../assets/kanban.png'
import responsive from '../../assets/responsive.png'
import { useNavigate } from "react-router-dom";

function Projects() {

    const navigate = useNavigate()

    return <Container fluid className='container'>

        <Row>
            <Col
                className='m-0 p-0'
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}>

                <Card className='card m-0 pt-5'>
                    <Card className="p-0 align-items-end me-5 home_link" style={{ "width": "100%" }} bg="transparent">
                        <Card.Text onClick={() => navigate("/")} className=" fs-4 stack_list">HOME</Card.Text>
                    </Card>
                    <Image className="mt-5" style={{ "width": "50%" }} src={weather}></Image>
                    <a className="links_project" href="https://nikonweatheradvisor.netlify.app/">Nikon Weather App</a>

                    <Image style={{ "width": "50%" }} src={bitacora}></Image>
                    <a className="links_project" href="https://www.youtube.com/watch?v=MsYBx4DeBvE">Bitácora Trips</a>

                    <Image style={{ "width": "50%" }} src={kanban}></Image>
                    <a className="links_project" href="https://tablerokanban.netlify.app/">Kanban Board</a>

                    <Image style={{ "width": "50%" }} src={responsive}></Image>
                    <a className="links_project" href="https://www.youtube.com/watch?v=49VEX1Ee_L4">Web Responsive</a>
                </Card>

            </Col>
        </Row>
    </Container>
}

export default Projects