import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Breadcrumb, BreadcrumbItem, Row, Col, Button,
} from 'reactstrap';
import Rating from 'react-rating';
import { getDetailProduct } from './DetailProductAction';
import loadingIcon from '../../assets/icon/loading.svg';
import starInit from '../../assets/icon/star.svg';
import starYellow from '../../assets/icon/starYellow.svg';
import Recommendation from '../../components/recommendation/Recommendation';
import Review from '../../components/review/Review';

class DetailProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idProduct: this.props.match.params.id,
            quantity: 1,
        };
    }

    componentDidMount() {
        this.props.getDetailProduct(this.state.idProduct);
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.idProduct !== nextProps.match.params.id) {
            this.props.getDetailProduct(nextProps.match.params.id);
            this.setState({
                idProduct: nextProps.match.params.id,
            });
        }
    }

  increaseQuantity = () => this.setState(prevState => ({
      quantity: prevState.quantity + 1,
  }));

  decreaseQuantity = () => {
      if (this.state.quantity > 0) {
          this.setState(prevState => ({
              quantity: prevState.quantity - 1,
          }));
      }
  };

  renderDetailProduct = () => (
      <Row className="justify-content-center detailProduct__container">
          <Col xs="11" sm="11" md="3" lg="4" xl="4" className="detailProduct__leftComponent">
              <img src={loadingIcon} alt="404 Not Found" />
          </Col>
          <Col xs="12" sm="12" md="7" lg="7" xl="7" className="detailProduct__rightComponent">
              <Col xs="12" sm="12" md="12" lg="12" xl="12" className="detailProduct__title">
                  <h3>{this.props.dataDetailProducts.productName}</h3>
              </Col>
              <Col xs="12" sm="12" md="12" lg="12" xl="12" className="detailProduct__price">
                  <h4>{this.props.dataDetailProducts.productPrice} VND</h4>
              </Col>
              <Col xs="12" sm="12" md="12" lg="12" xl="12" className="detailProduct__rating">
                  <Rating
                      className="detailProduct__starContainer col-md-7 col-lg-5"
                      initialRating={4}
                      readonly
                      emptySymbol={<img src={starInit} alt="404 Not Found" className="detailProduct__star" />}
                      fullSymbol={<img src={starYellow} alt="404 Not Found" className="detailProduct__star" />}
                  />
              </Col>
              <Col xs="12" sm="12" md="12" lg="12" xl="12" className="detailProduct__quantity">
                  <Button onClick={this.decreaseQuantity}> - </Button>
                  <span> {this.state.quantity} </span>
                  <Button onClick={this.increaseQuantity}> + </Button>
              </Col>
              <Col xs="12" sm="12" md="12" lg="12" xl="12" className="detailProduct__button">
                  <Button> Thêm vào giỏ hàng </Button>
                  <Button className="detailProduct__cart"> Thanh toán </Button>
              </Col>
              <Col xs="12" sm="12" md="12" lg="12" xl="12">
                  <h6>Mô tả</h6>
                  <p>{this.props.dataDetailProducts.description}</p>
              </Col>
          </Col>
      </Row>
  );

  render() {
      console.log('>>>>>>>>>>>props ', this.props.dataDetailProducts.review);
      if (this.props.isLoading) return <img src={loadingIcon} alt="404 Not Found" />;
      return (
          <section className="detailProduct">
              <div className="detailProduct__headline" />
              <Breadcrumb className="product__breadcrumb">
                  <BreadcrumbItem>
                      <Link to="/">Trang chủ</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                      <Link to={`/${this.props.dataDetailProducts.productType}`}>{this.props.dataDetailProducts.productType}</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>12321</BreadcrumbItem>
              </Breadcrumb>
              <Col xs="12" sm="12" md="12" lg="12" xl="12">
                  {this.renderDetailProduct()}
              </Col>
              <Col xs="12" sm="12" md="12" lg="12" xl="12">
                  <Recommendation />
              </Col>
              <Col xs="12" sm="12" md="12" lg="12" xl="12">
                  <Review rating={this.props.dataDetailProducts.rating} review={this.props.dataDetailProducts.review} />
              </Col>
          </section>
      );
  }
}

const mapStateToProps = state => ({
    dataDetailProducts: state.DetailProductReducer.dataDetailProducts,
    isLoading: state.DetailProductReducer.isLoading,
});

const mapDispatchToProps = {
    push,
    getDetailProduct,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DetailProduct);
