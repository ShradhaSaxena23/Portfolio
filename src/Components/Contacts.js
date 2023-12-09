import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

function Contacts() {
  return (
    <div >
    <div >
    <Container>
     
      <Row className="justify-content-center" style={{ marginTop: '50px'}}>
        <Col md={8} lg={6}>
          <div className="card" style={{ width: '100%' }}>
            <div className="card-header" style={{ height: '50px', background: 'gray', color: 'white' }}>
              CONTACT VIA
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item" style={{ height: '50px' }}>
                <FontAwesomeIcon icon={faEnvelope} />
                <span style={{ margin: '5px' }}>
                  <a href="mailto:shradhaofficial22@gmail.com">shradhaofficial22@gmail.com</a>
                </span>
              </li>
              <li className="list-group-item" style={{ height: '50px' }}>
                <FontAwesomeIcon icon={faPhone} />
                <span style={{ margin: '5px' }}>+91-956798xxxxxx4</span>
              </li>
              <li className="list-group-item" style={{ height: '50px' }}>
                <FontAwesomeIcon icon={faLinkedin} />
                <span style={{ margin: '5px' }}>
                  <a  href="https://www.linkedin.com/in/shradha-saxena-875743224" target="_blank" rel="noopener noreferrer">
                    https://www.linkedin.com/in/shradha-saxena-875743224
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
     
    </Container>
    </div>
    </div>
  );
}

export default Contacts;
