import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
// import logo from '../../assets/logo/CircleLineWhite.png';
import logo from '../../assets/logo/CircleLineBlack.png';
import phone from '../../assets/icon/phone-call.svg';
import cart from '../../assets/icon/shopping-cart.svg';
import user from '../../assets/icon/user.svg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSticky: '',
            isOpenSidebar: false,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

  handleScroll = () => {
      if (window.scrollY === 0) {
          this.setState({ isSticky: '' });
      } else if (window.scrollY !== 0) {
          this.setState({ isSticky: 'sticky' });
      }
  };

  preventClickDefault = e => {
      e.preventDefault();
  };


  handleSearch = () => {
      console.log('>>>>>>>>>>> search');
  }

  renderSearch = () => (
      <div className="wrap">
          <div className="search">
              <input type="text" className="searchTerm" placeholder="Tên sản phẩm bạn cần tìm ..." />
              <button type="button" onClick={() => this.handleSearch()} className="searchButton">
                  <i className="fa fa-search" />
              </button>
          </div>
      </div>
  );

  renderSidebar = () => (
      <Menu
          className="header__sidebar"
          isOpen={this.state.isOpenSidebar}
      >
          <Link id="home" className="menu-item" to="/">Home</Link>
          <Link id="about" className="menu-item" to="/about">About</Link>
          <Link id="contact" className="menu-item" to="/contact">Contact</Link>
          <Link className="menu-item--small" to="/">Settings</Link>
      </Menu>
  )

  render() {
      return (
          <React.Fragment>
              <header className={`${this.state.isSticky}`}>
                  <Row>
                      <Col xs="12" sm="12" md="12" lg="12" xl="12" className="header__logo">
                          <div className="container">
                              <Row className="justify-content-center header__logo-img">
                                  <Col xs="12" sm="12" md="1" lg="1" xl="1" className="header__bar">
                                      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                                      <i className="fas fa-bars" />
                                      {this.renderSidebar()}
                                  </Col>
                                  <Col xs="12" sm="12" md="2" lg="1" xl="1" className="header__logoBlock">
                                      <Link to="/">
                                          <img src={logo} alt="404 Not Found" />
                                      </Link>
                                  </Col>
                                  <Col xs="10" sm="10" md="10" lg="10" xl="10" className="header__container">
                                      <Row className="justify-content-center">
                                          <Col xs="2" sm="2" md="3" lg="2" xl="2" className="header__phone">
                                              <img src={phone} alt="404 Not Found" />
                                              <span>Hotline: 0977 500 500</span>
                                          </Col>
                                          <Col xs="6" sm="6" md="5" lg="6" xl="6" className="header__search-bar">
                                              {this.renderSearch()}
                                          </Col>
                                          <Col xs="2" sm="2" md="3" lg="2" xl="2" className="header__user">
                                              <Link to="/login">
                                                  <img src={user} alt="404 Not Found" />
                                                  <span><i>Đăng nhập/Đăng kí</i></span>
                                              </Link>
                                          </Col>
                                          <Col xs="1" sm="1" md="1" lg="1" xl="1" className="header__cart">
                                              <Link to="/cart">
                                                  <img src={cart} alt="404 Not Found" />
                                                  <span><i>Giỏ hàng</i></span>
                                              </Link>
                                          </Col>
                                      </Row>
                                  </Col>
                              </Row>
                          </div>
                      </Col>
                      <Col xs="12" sm="12" md="12" lg="12" xl="12" className="header__menu justify-content-center">
                          <ul>
                              <li>
                                  <Link to="/brand">THƯƠNG HIỆU</Link>
                              </li>
                              <li>
                                  <Link to="/makeup">TRANG ĐIỂM</Link>
                              </li>
                              <li>
                                  <Link to="/body">DƯỠNG THỂ</Link>
                                  <ul className="sub-menu">
                                      <li>
                                          <Link to="/">WordPress</Link>
                                      </li>
                                      <li>
                                          <Link to="/">Test</Link>
                                      </li>
                                      <li>
                                          <Link to="/">Hosting</Link>
                                      </li>
                                  </ul>
                              </li>
                              <li>
                                  <Link to="perfume">NƯỚC HOA</Link>
                              </li>
                              <li>
                                  <Link to="skincare" onClick={this.preventClickDefault}>
                                        CHĂM SÓC DA
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/hair">CHĂM SÓC TÓC</Link>
                              </li>
                              <li>
                                  <Link to="/accessories">PHỤ KIỆN</Link>
                              </li>
                              <li>
                                  <Link to="/functionalFood">THỰC PHẨM CHỨC NĂNG</Link>
                              </li>
                              <li>
                                  <Link to="/contact">LIÊN HỆ</Link>
                              </li>
                          </ul>
                      </Col>
                  </Row>
              </header>
          </React.Fragment>
      );
  }
}

export default Header;
