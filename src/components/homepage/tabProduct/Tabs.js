import React, { Component } from 'react';
import {
    TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col,
} from 'reactstrap';
import Rating from 'react-rating';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import uid from 'uid';
import starInit from '../../../assets/icon/star.svg';
import starYellow from '../../../assets/icon/starYellow.svg';
import loadingIcon from '../../../assets/icon/loading.svg';
import newIcon from '../../../assets/icon/new.svg';
import popularityIcon from '../../../assets/icon/popularity.svg';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
            title: this.props.title,
        };
        this.toggle = this.toggle.bind(this);
    }

  renderTitle = title => (
      <Nav tabs className="tabs__title">
          <h5>{title}</h5>
          <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => this.toggle('1')}>
          Trang điểm
              </NavLink>
          </NavItem>
          <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => this.toggle('2')}>
          Dưỡng thể
              </NavLink>
          </NavItem>
          <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '3' })} onClick={() => this.toggle('3')}>
          Nước hoa
              </NavLink>
          </NavItem>
          <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '4' })} onClick={() => this.toggle('4')}>
          Son môi
              </NavLink>
          </NavItem>
          <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '5' })} onClick={() => this.toggle('5')}>
          Khác
              </NavLink>
          </NavItem>
      </Nav>
  );

  handleChange = v => {
      console.log('selected star', v);
  };

  toggle(tab) {
      if (this.state.activeTab !== tab) {
          this.setState({
              activeTab: tab,
          });
      }
  }

  renderShowSlide = () => {
      if (window.innerWidth < 765) {
          return 1;
      }
      if (window.innerWidth > 765 && window.innerWidth < 1024) return 4;
      return 5;
  };

  renderProduct = mockItems => {
      const settings = {
          dots: true,
          infinite: true,
          //   autoplay: true,
          arrows: false,
          autoplaySpeed: 3000,
          speed: 2000,
          slidesToShow: this.renderShowSlide(),
          slidesToScroll: window.innerWidth < 767 ? 1 : 5,
          lazyLoad: 'ondemand',
      };
      const slideComponent = mockItems.map(item => (
          <Row className="justify-content-center" key={uid()}>
              <Col xs="11" sm="11" md="11" lg="11" xl="11" className="tabs__product">
                  <div className="tabs__img-container">
                      <div className="tabs__img">
                          <img src={item.image} alt={item.productName} />
                          <img src={this.props.link === 'new-product' ? newIcon : popularityIcon} alt={item.productName} className="tabs__icon" />
                      </div>
                      <Link to={`/product/${item.id}`} className="tabs__cart">
                          <p>{item.description}</p>
                      </Link>
                  </div>
                  <Link to={`/product/${item.id}`} key={uid()}>
                      <p>{item.productName}</p>
                      <p>{item.productPrice}</p>
                      <p className="tabs__starContainer">
                          <Rating
                              initialRating={item.rating}
                              readonly
                              emptySymbol={<img src={starInit} alt="404 Not Found" className="tabs__star" />}
                              fullSymbol={<img src={starYellow} alt="404 Not Found" className="tabs__star" />}
                          />
                      </p>
                  </Link>
                  <Button className="tabs__addtocart">Thêm giỏ hàng</Button>
              </Col>
          </Row>
      ));
      if (this.props.isLoading) { return <img src={loadingIcon} alt="404 Not Found" />; }
      return (
          <React.Fragment>
              <Slider {...settings}>{slideComponent}</Slider>
              <div className="tabs__btn">
                  <Link to={`/${this.props.link}`} className="tabs__more">
                      <Button className="tabs__btnMore">MORE</Button>
                  </Link>
              </div>
          </React.Fragment>
      );
  };

  renderItems = () => (
      <TabContent activeTab={this.state.activeTab} className="tabs__content">
          <TabPane tabId="1">
              <Row>
                  <Col xs="12" sm="12" md="12" lg="12" xl="12">
                      {this.renderProduct(this.props.dataNewProducts)}
                  </Col>
              </Row>
          </TabPane>
          <TabPane tabId="2">
              <Row>
                  <Col sm="12">{this.renderProduct(this.props.dataNewProducts)}</Col>
              </Row>
          </TabPane>
          <TabPane tabId="3">
              <Row>
                  <Col sm="12">{this.renderProduct(this.props.dataNewProducts)}</Col>
              </Row>
          </TabPane>
          <TabPane tabId="4">
              <Row>
                  <Col sm="12">{this.renderProduct(this.props.dataNewProducts)}</Col>
              </Row>
          </TabPane>
          <TabPane tabId="5">
              <Row>
                  <Col sm="12">{this.renderProduct(this.props.dataNewProducts)}</Col>
              </Row>
          </TabPane>
      </TabContent>
  );

  render() {
      console.log('>>>>>>>>>>>state', this.state.title);
      return (
          <section className="tabs">
              {this.renderTitle(this.props.title)}
              {this.renderItems()}
          </section>
      );
  }
}

export default Tabs;
