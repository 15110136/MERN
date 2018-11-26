import React, { Component } from 'react';
import {
    TabContent, TabPane, Nav, NavItem, NavLink, Row, Col,
} from 'reactstrap';
import Rating from 'react-rating';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import uid from 'uid';
import starInit from '../../assets/icon/star.svg';
import starYellow from '../../assets/icon/starYellow.svg';
import loadingIcon from '../../assets/icon/loading.svg';

class Recommendation extends Component {
    // eslint-disable-next-line react/sort-comp
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
        };
        this.toggle = this.toggle.bind(this);
    }

    dataMock = [
        {
            id: '1',
            createdAt: '2018-11-11T22:50:03.994Z',
            productName: 'Unbranded Soft Ball',
            productPrice: '573.00',
            rating: 2,
            image: 'https://via.placeholder.com/640/480',
        },
        {
            id: '2',
            createdAt: '2018-11-12T04:25:00.741Z',
            productName: 'Ergonomic Soft Bacon',
            productPrice: '609.00',
            rating: 3,
            image: 'https://via.placeholder.com/640/480',
        },
        {
            id: '3',
            createdAt: '2018-11-11T17:25:09.086Z',
            productName: 'Incredible Steel Keyboard',
            productPrice: '142.00',
            rating: 1,
            image: 'https://via.placeholder.com/640/480',
        },
        {
            id: '4',
            createdAt: '2018-11-12T08:29:35.440Z',
            productName: 'Sleek Wooden Car',
            productPrice: '701.00',
            rating: 31155,
            image: 'https://via.placeholder.com/640/480',
        },
        {
            id: '5',
            createdAt: '2018-11-11T14:51:08.510Z',
            productName: 'Licensed Rubber Fish',
            productPrice: '367.00',
            rating: 5,
            image: 'https://via.placeholder.com/640/480',
        },
        {
            id: '6',
            createdAt: '2018-11-11T17:12:50.528Z',
            productName: 'Handmade Concrete Salad',
            productPrice: '182.00',
            rating: 2,
            image: 'https://via.placeholder.com/640/480',
        },
        {
            id: '7',
            createdAt: '2018-11-11T15:48:08.155Z',
            productName: 'Incredible Rubber Hat',
            productPrice: '591.00',
            rating: 4,
            image: 'https://via.placeholder.com/640/480',
        },
        {
            id: '8',
            createdAt: '2018-11-12T09:54:50.720Z',
            productName: 'Refined Steel Pizza',
            productPrice: '477.00',
            rating: 58958,
            image: 'https://via.placeholder.com/640/480',
        },
        {
            id: '9',
            createdAt: '2018-11-12T07:45:12.297Z',
            productName: 'Refined Fresh Chair',
            productPrice: '459.00',
            rating: 83201,
            image: 'https://via.placeholder.com/640/480',
        },
        {
            id: '10',
            createdAt: '2018-11-12T04:05:25.072Z',
            productName: 'Unbranded Rubber Table',
            productPrice: '328.00',
            rating: 59582,
            image: 'https://via.placeholder.com/640/480',
        },
    ]

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

    renderTitle = () => (
        <Nav tabs className="recommendation__title">
            <NavItem>
                <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => this.toggle('1')}>
                    <h4>Kết hợp</h4>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => this.toggle('2')}>
                    <h4>Bạn có thể thích</h4>
                </NavLink>
            </NavItem>
        </Nav>
    );

    renderProduct = data => {
        const settings = {
            dots: true,
            infinite: true,
            //   autoplay: true,
            arrows: false,
            autoplaySpeed: 3000,
            speed: 2000,
            slidesToShow: this.renderShowSlide(),
            slidesToScroll: window.innerWidth < 767 ? 1 : 4,
            lazyLoad: 'ondemand',
        };
        const slideComponent = this.dataMock.map(item => (
            <Row className="justify-content-center" key={uid()}>
                <Col xs="11" sm="11" md="11" lg="11" xl="11" className="recommendation__product">
                    <Link to={`/product/${item.id}`} key={uid()}>
                        <img src={item.image} alt={item.productName} />
                        <p>{item.productName}</p>
                        <p>{item.productPrice}</p>
                        <p className="recommendation__starContainer">
                            <Rating
                                initialRating={item.rating}
                                readonly
                                emptySymbol={<img src={starInit} alt="404 Not Found" className="recommendation__star" />}
                                fullSymbol={<img src={starYellow} alt="404 Not Found" className="recommendation__star" />}
                            />
                        </p>
                    </Link>
                </Col>
            </Row>
        ));
        if (this.props.isLoading) { return <img src={loadingIcon} alt="404 Not Found" />; }
        return (
            <Slider {...settings}>{slideComponent}</Slider>
        );
    };

    renderItems = () => (
        <TabContent activeTab={this.state.activeTab} className="recommendation__content">
            <TabPane tabId="1">
                <Row>
                    <Col xs="12" sm="12" md="12" lg="12" xl="12">
                        {this.renderProduct(this.props.data)}
                    </Col>
                </Row>
            </TabPane>
            <TabPane tabId="2">
                <Row>
                    <Col sm="12">{this.renderProduct(this.props.data)}</Col>
                </Row>
            </TabPane>
        </TabContent>
    );

    render() {
        return (
            <section className="recommendation">
                {this.renderTitle()}
                {this.renderItems()}
            </section>
        );
    }
}

export default Recommendation;
