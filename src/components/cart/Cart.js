import React, { Component } from 'react';
import {
    Breadcrumb, BreadcrumbItem, Row, Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import leftArrow from '../../assets/icon/left-arrow.svg';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: '21.230.000',
        };
    }

  renderBill = (title, value) => (
      <Row>
          <Col xs="6" sm="6" md="6" lg="6" xl="6" className="cart__titleBill">
              <b>{title}:</b>
          </Col>
          <Col xs="6" sm="6" md="6" lg="6" xl="6" className="cart__valueBill">
              <b>{value} VND</b>
          </Col>
      </Row>
  );

  renderItems = () => {
      if (localStorage.getItem('item') === null || localStorage.getItem('item') === '' || localStorage.getItem('item') === undefined) {
          return null;
      }

      const items = localStorage.getItem('item');
      return items.map(item => (
          <Row>
              <Col xs="12" sm="12" md="12" lg="5" xl="5">
                  <Col lg="5" xl="5">
                      <img alt="404 Not Found" />
                  </Col>
                  <Col lg="5" xl="5">
                      <h4>{item.name}</h4>
                      <h5 onClick={() => {}}> Xoa </h5>
                  </Col>
              </Col>
          </Row>
      ));
  };

  render() {
      return (
          <section className="cart">
              <div className="cart__headline" />
              <Breadcrumb className="cart__breadcrumb">
                  <BreadcrumbItem>
                      <Link to="/">Trang chủ</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>Giỏ hàng</BreadcrumbItem>
              </Breadcrumb>
              <h2>GIỎ HÀNG</h2>
              <Row>
                  <Col xs="12" sm="12" md="12" lg="12" xl="12" className="cart__title">
                      <Row>
                          <Col xs="3" sm="3" md="7" lg="7" xl="7" className="col">
                              <b>SẢN PHẨM</b>
                          </Col>
                          <Col>
                              <b>GIÁ</b>
                          </Col>
                          <Col>
                              <b>SỐ LƯỢNG</b>
                          </Col>
                          <Col>
                              <b>THÀNH TIỀN</b>
                          </Col>
                      </Row>
                  </Col>
                  <Col xs="12" sm="12" md="12" lg="12" xl="12" className="cart__product">
                      {/* cantent */}
                  </Col>
                  <Col xs="12" sm="12" md="12" lg="12" xl="12" className="cart__payment">
                      <Col xs="12" sm="12" md="5" lg="5" xl="3" className="cart__tempFee">
                          {this.renderBill('Thành tiền', this.state.total)}
                      </Col>
                      <Col xs="12" sm="12" md="5" lg="5" xl="3" className="cart__shipFee">
                          {this.renderBill('Tiền vận chuyển', this.state.total)}
                      </Col>
                      <Col xs="12" sm="12" md="5" lg="5" xl="3" className="cart__totalFee">
                          {this.renderBill('Tổng tiền', this.state.total)}
                          <Link to="/checkout" className="cart__checkout">
                              <div className="cart__btn">THANH TOÁN</div>
                          </Link>
                          <Link to="/" className="cart__text-continue">
                              <img src={leftArrow} alt="404 Not Found" />
                              <span>Tiếp tục mua hàng</span>
                          </Link>
                      </Col>
                  </Col>
              </Row>
          </section>
      );
  }
}

export default Cart;
