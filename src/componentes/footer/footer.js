import React from "react";
import "./footer.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai"

const Footer = () => {

    return(
    <footer> 
    <Container className="footerContainer">
    <Row>
        <Col sm className="textoPosicion"><h6 className="copyright">MercadoGamer® Todos los derechos reservados. Para consultas, debe comunicarse al numero 0800-127-7428</h6></Col>
        <Col sm className="textoPosicion2"><h5>Proyecto Final FrontEnd </h5></Col>
        <Col sm className="links"><h5>Enlaces Utiles</h5>
        <h6>
        </h6>
        <h6>
        <a className="color" href="/">Inicio</a>
        </h6>
        <h6>
        <a className="color" href='/contact'>Contacto</a>
        </h6>
        <h6>
        <a className="color" href="/aboutUs">Nosotros</a>
        </h6>
        <h6>
        <a className="color" href="/frequentQuestions">Preguntas Frecuentes</a>
        </h6>
        </Col>
    </Row>
    </Container>
    
    <div className="iconosPosicion">
        <a href="https://twitter.com" rel="twitter"><h3 className="iconos"><AiOutlineTwitter /></h3></a>
        <a href="https://facebook.com" rel="facebook"><h3 className="iconos"><FaFacebook/></h3></a>
        <a href="https://instagram.com" rel="instagram"><h3 className="iconos"><FaInstagram/></h3></a>
        <a href="https://youtube.com" rel="youtube"><h3 className="iconos"><AiFillYoutube /></h3></a>
        <a href="https://ar.linkedin.com" rel="linkedIn"><h3 className="iconos"><AiFillLinkedin /></h3></a>
    </div>

    </footer>
    );
}


export default Footer;