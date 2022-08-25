import React, { useEffect } from "react";
import Footer from "../Component/Footer";
import Form from "react-bootstrap/Form";
import Row from "../Component/Row";
import { Button } from "react-bootstrap";
import ScrollProp from "../Utils/ScrollProp";

function Contact(props) {
  useEffect(() => {
    ScrollProp();
  }, []);
  return (
    <>
      <div className="container">
        <Row>
          <div className="col-sm-6 py-5" data-aos="fade-right">
            <Form>
              <Form.Group className="mb-3">
                <Form.Select aria-label="Default select example">
                  <option>Choisissez un bureau</option>
                  <option value="1">Bureau 1</option>
                  <option value="2">Bureau 2</option>
                  <option value="3">Bureau 3</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Votre prénom" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Votre nom" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Société" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Votre email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="tel" placeholder="Votre téléphone" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={3} placeholder="Message" />
              </Form.Group>
              <Form.Group className="mb-3 d-flex justify-content-center align-items-center">
                <Button variant="primary" type="submit">
                  Envoyer
                </Button>
              </Form.Group>
            </Form>
          </div>
          <div className="col-sm-6  py-5" data-aos="fade-left">
            <div>
              <h6>FICADEX</h6>
              <br />
              <span>TOUR CIT 3, Rue de l'Arrivée 75749 PARIS Cedex 15 </span>
              <br />
              <span>Tél : 04 92 60 77 10</span>
              <br />
              <span>contact@ficadex.com</span>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d168049.71673002295!2d2.1195600233951026!3d48.84339551880674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671cce64211f3%3A0x8c632f6801083448!2sFicadex!5e0!3m2!1sfr!2suk!4v1661464844624!5m2!1sfr!2suk"
              width="400"
              height="300"
            ></iframe>
          </div>
        </Row>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
