import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';
import I001 from "../Image/001.png";
import I002 from "../Image/002.png";
import I003 from "../Image/003.png";
import I004 from "../Image/004.png";
import I005 from "../Image/005.png";
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Home extends Component {
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div>
        <div className="container">
          <Slider {...settings}>
            <div><img src={I001} alt="Credit to Joshua Earle on Unsplash" /></div>
            <div><img src={I002} alt="Credit to Alisa Anton on Unsplash" /></div>
            <div><img src={I003} alt="Credit to Igor Ovsyannykov on Unsplash" /></div>
            <div><img src={I004} alt="Credit to Pierre Châtel-Innocenti on Unsplash" /></div>
            <div><img src={I005} alt="Credit to Richard Nolan on Unsplash" /></div>
          </Slider>
        </div>
        <Container
          fluid="md">
          <h1 style={{ textAlign: "center" }}>APLIKASI BELAJAR BUAT SISWA AGAR LEBIH MUDAH BELAJAR DI ERA PANDEMI</h1>
          <Row style={{ margin: 10 }}>
            <Col className="column1" xs={8}>
              <img src={I001} style={{ width: "100%" }} class="img-responsive" alt=""></img>
            </Col>
            <Col className="column2">
              <h4>hello mau belajar gk</h4>
            </Col>
          </Row>
          <Row style={{ margin: 10 }}>
            <Col className="column2" >1 of 3</Col>
            <Col className="column1" xs={8}>
              <img src={I001} style={{ width: "100%" }} class="img-responsive" alt=""></img>
            </Col>
          </Row>
          <Row style={{ margin: 10 }}>
            <Col className="column1" xs={8}>
              <img src={I001} style={{ width: "100%" }} class="img-responsive" alt=""></img>
            </Col>
            <Col className="column2">2 of 3</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;