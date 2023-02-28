import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram , faWhatsapp , faTwitter} from "@fortawesome/free-brands-svg-icons";
import "./css/footer.css";


export const Footer = () => {
  return (
    <div className="footerSection"> 
      <Container fluid >
        <Row >
          <Col>
          <ul className="footerItems">
            <li>
                <Link to={"https://www.facebook.com/"}>
                    <FontAwesomeIcon icon={faInstagram} className="faBrands instagramIcon"/>
                
                </Link>
            </li>
            <li>
                <Link to={"https://www.facebook.com/"}>
                <FontAwesomeIcon icon={faWhatsapp} className="faBrands whatsappIcon"/>
                </Link>
            </li>
            <li>
                <Link to={"https://twitter.com/?lang=es"}>
                <FontAwesomeIcon icon={faTwitter} className="faBrands twitterIcon"/>
                </Link>
            </li>
          </ul>
          
          </Col>
          <Col xs={5} className="secondCol">
          <img
              src="https://png.pngtree.com/png-vector/20220727/ourmid/pngtree-food-logo-png-image_6089719.png"
              alt=""
              className="w-25"
            />
          </Col>
          <Col className="thirdCol"> 
            <div className="mt-1">Medios de pago</div>
            <div className="mt-1">Suscribite a nuestro newsletter y enterate nuestras promociones</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
