import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from 'react-google-maps';
import logoText from '../../assets/logo/StraightLineBlack.png';
import facebook from '../../assets/icon/facebook.png';
import instagram from '../../assets/icon/instagram.png';
import youtube from '../../assets/icon/youtube.png';

class Footer extends Component {
  infoComponent = (param1, param2) => (
      <React.Fragment>
          <Col xs="3" sm="3" md="3" lg="3" xl="3" className="footer__leftInfo">
              {param1}
          </Col>
          <Col xs="9" sm="9" md="9" lg="9" xl="9" className="footer__rightInfo">
              {param2}
          </Col>
      </React.Fragment>
  );

  render() {
      const MyMapComponent = withScriptjs(withGoogleMap(props => (
          <GoogleMap
              defaultZoom={18}
              defaultCenter={{ lat: 10.789276, lng: 106.668176 }}
          >
              {props.isMarkerShown && (<Marker position={{ lat: 10.789276, lng: 106.668176 }} />)}
          </GoogleMap>
      )));
      return (
          <React.Fragment>
              <footer className="footer">
                  <Row>
                      <Col xs="12" sm="12" md="6" lg="6" xl="6" className="footer__leftComponent">
                          <Col xs="12" sm="12" md="12" lg="12" xl="12" className="footer__logo">
                              <img src={logoText} alt="404 Not Found" />
                          </Col>
                          <Col xs="12" sm="12" md="12" lg="12" xl="12" className="footer__info">
                              <Row>
                                  {this.infoComponent('Address', '491/106 Huỳnh Văn Bánh, Phường 14, Phú Nhuận, Hồ Chí Minh.')}
                                  {this.infoComponent('Hotline', '0977 500 500')}
                                  {this.infoComponent('Email', 'oanh6000@gmail.com')}
                              </Row>
                          </Col>
                          <Col>
                              <div className="footer__icons">
                                  <a href="#fb">
                                      <img src={facebook} alt="404 Not Found" />
                                  </a>
                                  <a href="#ins">
                                      <img src={instagram} alt="404 Not Found" />
                                  </a>
                                  <a href="#yb">
                                      <img src={youtube} alt="404 Not Found" />
                                  </a>
                              </div>
                          </Col>
                          <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
                              <i>Designed by Xukashop</i>
                          </div>
                      </Col>
                      <Col xs="12" sm="12" md="6" lg="6" xl="6" className="footer__rightComponent">
                          <MyMapComponent
                              isMarkerShown
                              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDWsoCN8yFg1C16EG0bFAresTUZcqOahTo&v=3.exp&libraries=geometry,drawing,places"
                              loadingElement={<div style={{ height: '100%' }} />}
                              containerElement={<div style={{ height: '300px' }} />}
                              mapElement={<div style={{ height: '100%' }} />}
                          />
                      </Col>
                  </Row>
              </footer>
          </React.Fragment>
      );
  }
}

export default Footer;
