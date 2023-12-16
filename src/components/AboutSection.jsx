import { Card, Row, Col } from 'react-bootstrap';
import hotel from "../assets/hotel-image.png";
import "./style/AboutStyle.css";

export const AboutSection = () => {
  return (
    <div className='card-container'>
      <Card style={{backgroundColor: "#f0fff6"}}>
        <Row>
          <Col md={6}>
            <Card.Img src={hotel} className='img-fluid' alt="Card image" />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>
                <h2>Discover our History</h2>
              </Card.Title>
              <Card.Text>
                <p>
                    Our commitment to excellence is evident in every aspect of your stay. 
                    We take pride in our attention to detail, providing a seamless and memorable experience for all our guests. 
                    From our 24-hour concierge service to personalized room service, we're here to meet your every need.
                </p>
                <button type='button' className='btn btn-success'>Explore More</button>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
