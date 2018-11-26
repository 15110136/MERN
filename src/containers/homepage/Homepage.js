import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import uid from 'uid';
import Slider from 'react-slick';
import Banner from '../../components/homepage/banner/Banner';
import Category from '../../components/homepage/category/Category';
import Search from '../../components/homepage/search/Search';
import Tabs from '../../components/homepage/tabProduct/Tabs';
import Brand from '../../components/homepage/brand/Brand';
import demo1 from '../../assets/slideImg/demo1.jpg';
import demo2 from '../../assets/slideImg/demo2.jpg';
import demo3 from '../../assets/slideImg/demo3.jpg';
import face1 from '../../assets/review/face1.jpg';
import face2 from '../../assets/review/face2.jpg';
import face3 from '../../assets/review/face3.jpg';
import face4 from '../../assets/review/face4.jpg';
import face5 from '../../assets/review/face5.jpg';
import face6 from '../../assets/review/face6.jpg';
import { ReactComponent as ShoppingBag } from '../../assets/icon/shoppingbag.svg';
import { ReactComponent as Delivery } from '../../assets/icon/delivery.svg';
import { ReactComponent as Quality } from '../../assets/icon/quality.svg';
import { getNewProduct } from './HomepageAction';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    src: demo1,
                    altText: 'Slide 1',
                },
                {
                    src: demo2,
                    altText: 'Slide 2',
                },
                {
                    src: demo3,
                    altText: 'Slide 3',
                },
            ],
            mockItems: [
                {
                    src: demo1,
                    productName: 'demo1',
                    productPrice: 123123,
                    rate: 3,
                },
                {
                    src: demo2,
                    productName: 'demo2',
                    productPrice: 123123,
                    rate: 3,
                },
                {
                    src: demo3,
                    productName: 'demo3',
                    productPrice: 123123,
                    rate: 3,
                },
                {
                    src: demo1,
                    productName: 'demo4',
                    productPrice: 123123,
                    rate: 3,
                },
                {
                    src: demo2,
                    productName: 'demo5',
                    productPrice: 123123,
                    rate: 3,
                },
                {
                    src: demo3,
                    productName: 'demo6',
                    productPrice: 123123,
                    rate: 2,
                },
                {
                    src: demo1,
                    productName: 'demo7',
                    productPrice: 123123,
                    rate: 1,
                },
                {
                    src: demo2,
                    productName: 'demo8',
                    productPrice: 123123,
                    rate: 3,
                },
                {
                    src: demo3,
                    productName: 'demo9',
                    productPrice: 123123,
                    rate: 5,
                },
            ],
            features: [
                {
                    component: ShoppingBag,
                    title: 'Thỏa thích mua sắm',
                    content: 'Sẵn sàng tư vấn về các sản phẩm mà Xukashop bán.',
                },
                {
                    component: Delivery,
                    title: 'Theo dõi đơn hàng',
                    content: 'Theo dõi và cập nhật trạng thái đơn hàng của bạn.',
                },
                {
                    component: Quality,
                    title: 'Đảm bảo chất lượng',
                    content: 'Cam kết không bán hàng giả, hàng kém chất lượng.',
                },
            ],
            reviews: [
                {
                    imgSrc: face1,
                    comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
                },
                {
                    imgSrc: face2,
                    comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
                },
                {
                    imgSrc: face3,
                    comment: 'Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
                },
                {
                    imgSrc: face4,
                    comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
                },
                {
                    imgSrc: face5,
                    comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
                },
                {
                    imgSrc: face6,
                    comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
                },
            ],
        };
    }

    componentDidMount() {
        this.props.getNewProduct();
    }

  feature = () => this.state.features.map(item => (
      <Col xs="4" sm="4" md="4" lg="4" xl="4" key={uid()}>
          <Row>
              <Col xs="12" sm="12" md="12" lg="4" xl="12" className="feature__item">
                  <item.component />
              </Col>
              <Col xs="12" sm="12" md="12" lg="7" xl="12" className="feature__text">
                  <h5>{item.title}</h5>
                  <p>
                      {item.content}
                  </p>
              </Col>
          </Row>
      </Col>
  ));

  renderReview = () => {
      const settings = {
          dots: true,
          infinite: true,
          autoplay: true,
          arrows: false,
          autoplaySpeed: 5000,
          speed: 2000,
          slidesToShow: window.innerWidth < 765 ? 1 : 3,
          slidesToScroll: window.innerWidth < 765 ? 1 : 2,
      };
      const slideComponent = this.state.reviews.map(item => (
          <Row className="justify-content-center" key={uid()}>
              <Col xs="12" sm="12" md="11" lg="11" xl="11">
                  <img src={item.imgSrc} alt="404 Not Found" />
                  <p>{item.comment}</p>
              </Col>
          </Row>
      ));
      return (
          <React.Fragment>
              <Slider {...settings}>{slideComponent}</Slider>
          </React.Fragment>
      );
  };

  render() {
      console.log('>>>>>>>>> ', this.props.dataNewProducts);
      return (
          <React.Fragment>
              <Banner {...this.state} />
              <Category />
              <Search />
              <Tabs {...this.props} title="SẢN PHẨM MỚI" link="new-product" isLoading={this.props.isLoading} />
              <section className="feature">
                  <Row>
                      {this.feature()}
                  </Row>
              </section>
              <Tabs {...this.props} title="SẢN PHẨM NỔI BẬT" link="new-arrival" isLoading={this.props.isLoading} />
              <Brand />
              <section className="feedback">
                  <h2>ĐÁNH GIÁ TỪ KHÁCH HÀNG</h2>
                  <Col xs="12" sm="12" md="12" lg="12" xl="12">
                      {this.renderReview()}
                  </Col>
              </section>
          </React.Fragment>
      );
  }
}

const mapStateToProps = state => ({
    dataNewProducts: state.HomepageReducer.dataNewProducts,
    isLoading: state.HomepageReducer.isLoading,
});

const mapDispatchToProps = {
    push,
    getNewProduct,
};


export default (connect(mapStateToProps, mapDispatchToProps)(Homepage));
