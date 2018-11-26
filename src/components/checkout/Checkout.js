import React, { Component } from 'react';
import {
    Breadcrumb, BreadcrumbItem, Row, Col, Form, FormGroup, Label, Input,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import uid from 'uid';
import logoInfo from '../../assets/icon/information.svg';

class Checkout extends Component {
    state = {
        totalTemp: '1230000',
        totalShip: '33000',
        totalPrice: '15600000',
        inputNameTop: '',
        inputMobileTop: '',
        inputAddressTop: '',
        inputDistrictTop: '',
        inputCityTop: '',
        inputNameBot: '',
        inputMobileBot: '',
        inputAddressBot: '',
        inputDistrictBot: '',
        inputCityBot: '',
        cbOrder: false,
        errorMessages: {},
        isChecking: false,
    };

    infoName = [
        {
            name: 'Họ và tên',
            titleName: 'inputName',
        },
        {
            name: 'Số điện thoại',
            titleName: 'inputMobile',
        },
        {
            name: 'Địa chỉ',
            titleName: 'inputAddress',
        },
        {
            name: 'Quận/Huyện',
            titleName: 'inputDistrict',
        },
        {
            name: 'Tỉnh/Thành phố',
            titleName: 'inputCity',
        },
    ];

    dataMock = [
        {
            imgUrl: 'http://placehold.it/200x200',
            name: 'test',
            quantity: 1,
            price: 1200000,
        },
        {
            imgUrl: 'http://placehold.it/200x200',
            name: 'test',
            quantity: 1,
            price: 1200000,
        },
        {
            imgUrl: 'http://placehold.it/200x200',
            name: 'test',
            quantity: 1,
            price: 1200000,
        },
        {
            imgUrl: 'http://placehold.it/200x200',
            name: 'test',
            quantity: 1,
            price: 1200000,
        },
        {
            imgUrl: 'http://placehold.it/200x200',
            name: 'test',
            quantity: 1,
            price: 1200000,
        },
        {
            imgUrl: 'http://placehold.it/200x200',
            name: 'test',
            quantity: 1,
            price: 1200000,
        },
        {
            imgUrl: 'http://placehold.it/200x200',
            name: 'test',
            quantity: 1,
            price: 1200000,
        },
    ];

    toggleChange = () => {
        const {
            inputNameTop, inputMobileTop, inputAddressTop, inputDistrictTop, inputCityTop,
        } = this.state;
        this.setState(prevState => ({ cbOrder: !prevState.cbOrder }));
        if (!this.state.cbOrder) {
            this.setState({
                inputNameBot: inputNameTop,
                inputMobileBot: inputMobileTop,
                inputAddressBot: inputAddressTop,
                inputDistrictBot: inputDistrictTop,
                inputCityBot: inputCityTop,
            });
            this.checkInput();
        }
    }

    checkInput = () => {
        const {
            inputNameTop, inputMobileTop, inputAddressTop, inputDistrictTop, inputCityTop, inputNameBot, inputMobileBot, inputAddressBot, inputDistrictBot, inputCityBot, errorMessages,
        } = this.state;
        inputNameTop === '' ? (errorMessages.inputNameTop = 'Vui lòng điền tên người đặt hàng !!!') : (errorMessages.inputNameTop = '');
        inputMobileTop === '' ? (errorMessages.inputMobileTop = 'Vui lòng điền số điện thoại người đặt hàng !!!') : (errorMessages.inputMobileTop = '');
        inputAddressTop === '' ? (errorMessages.inputAddressTop = 'Vui lòng điền địa chỉ người đặt hàng !!!') : (errorMessages.inputAddressTop = '');
        inputDistrictTop === '' ? (errorMessages.inputDistrictTop = 'Vui lòng điền quận/huyện người đặt hàng !!!') : (errorMessages.inputDistrictTop = '');
        inputCityTop === '' ? (errorMessages.inputCityTop = 'Vui lòng điền thành phố/tỉnh người đặt hàng !!!') : (errorMessages.inputCityTop = '');
        inputNameBot === '' ? (errorMessages.inputNameBot = 'Vui lòng điền tên người nhận !!!') : (errorMessages.inputNameBot = '');
        inputMobileBot === '' ? (errorMessages.inputMobileBot = 'Vui lòng điền số điện thoại người nhận !!!') : (errorMessages.inputMobileBot = '');
        inputAddressBot === '' ? (errorMessages.inputAddressBot = 'Vui lòng điền địa chỉ người nhận !!!') : (errorMessages.inputAddressBot = '');
        inputDistrictBot === '' ? (errorMessages.inputDistrictBot = 'Vui lòng điền quận/huyện người nhận !!!') : (errorMessages.inputDistrictBot = '');
        inputCityBot === '' ? (errorMessages.inputCityBot = 'Vui lòng điền thành phố/tỉnh người nhận !!!') : (errorMessages.inputCityBot = '');
    }

    // eslint-disable-next-line react/sort-comp
    handleInputChange(event) {
        const { name, value } = event.target;
        const stateChange = this.state;
        stateChange[name] = value;
        const {
            isChecking,
        } = stateChange;

        if (isChecking) {
            this.checkInput();
        }
        this.setState({ ...stateChange });
    }

    checkValidation = () => {
        this.checkInput();
        this.setState({
            isChecking: true,
        });
    };

    renderInfoComponent = titleName => this.infoName.map(item => (
        <Col xs="12" sm="12" md="12" lg="12" xl="12" className="checkout__items">
            <Row>
                <Col xs="5" sm="5" md="4" lg="3" xl="3">
                    <Label for={`${item.titleName} ${titleName}`}>{item.name}</Label>
                </Col>
                <Col xs="7" sm="7" md="8" lg="9" xl="9">
                    <Input
                        type="text"
                        id={`${item.titleName} ${titleName}`}
                        name={item.titleName + titleName}
                        onChange={e => this.handleInputChange(e)}
                        value={this.state[item.titleName + titleName]}
                    />
                    <span>{this.state.errorMessages[item.titleName + titleName]}</span>
                </Col>
            </Row>
        </Col>
    ));

    renderItemOrder = () => this.dataMock.map(item => (
        <Row key={uid()}>
            <Col xs="4" sm="4" md="4" lg="4" xl="4">
                <img src={item.imgUrl} alt="404 Not Found" />
            </Col>
            <Col xs="8" sm="8" md="8" lg="8" xl="8">
                <span>{item.name}</span>
                <span>Số lượng: {item.quantity}</span>
                <span>{item.price}</span>
            </Col>
        </Row>
    ));

    orderInfo = (title, titleName) => (
        <Col xs="12" sm="12" md="12" lg="12" xl="12" className="checkout__info">
            <div className="checkout__title">
                <Row className="justify-content-center">
                    <Col xs="3" sm="3" md="3" lg="3" xl="3" className="checkout__img">
                        <img src={logoInfo} alt="404 Not Found" />
                    </Col>
                    <Col xs="9" sm="9" md="9" lg="9" xl="9">
                        <h6>{title}</h6>
                    </Col>
                </Row>
            </div>
            <div className="checkout__info">
                <Form>
                    <FormGroup>
                        <Row>
                            {this.renderInfoComponent(titleName)}
                            <Col xs="12" sm="12" md="12" lg="12" xl="12" className="checkout__textarea">
                                <Row>
                                    <Col xs="5" sm="5" md="4" lg="3" xl="3">
                                        <Label for={`inputNote ${titleName}`}>Ghi chú</Label>
                                    </Col>
                                    <Col xs="7" sm="7" md="8" lg="9" xl="9">
                                        <Input type="textarea" name="text" id={`inputNote ${titleName}`} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </FormGroup>
                </Form>
            </div>
        </Col>
    );

    orderItem = () => (
        <React.Fragment>
            <Col xs="12" sm="12" md="12" lg="12" xl="12" className="checkout__productBill">
                <Label>THÔNG TIN ĐẶT HÀNG</Label>
            </Col>
            <Col xs="12" sm="12" md="12" lg="12" xl="12" className="checkout__billTitle">
                <Row>
                    <Col xs="8" sm="8" md="8" lg="7" xl="7">
                        <Label>Sản phẩm</Label>
                    </Col>
                    <Col xs="4" sm="4" md="4" lg="5" xl="5">
                        <Link to="/cart">Chỉnh sửa</Link>
                    </Col>
                </Row>
            </Col>
        </React.Fragment>
    );

    renderPrice = (titleName, price) => (
        <Row>
            <Col xs="7" sm="7" md="7" lg="7" xl="6">
                <strong>{titleName}</strong>
            </Col>
            <Col xs="5" sm="5" md="5" lg="5" xl="6" style={{ padding: 0 }}>
                <strong>{price} VND</strong>
            </Col>
        </Row>
    );

    render() {
        console.log('>>>>>>>>>>> state', this.state);
        return (
            <section className="checkout">
                <div className="checkout__headline" />
                <Breadcrumb className="checkout__breadcrumb">
                    <BreadcrumbItem>
                        <Link to="/">Trang chủ</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Thanh toán</BreadcrumbItem>
                </Breadcrumb>
                <h2>THANH TOÁN</h2>
                <Row className="justify-content-center checkout__content">
                    <Col xs="12" sm="12" md="7" lg="7" xl="7">
                        {this.orderInfo('THÔNG TIN NGƯỜI ĐẶT', 'Top')}
                        <Col xs="12" sm="12" md="12" lg="12" xl="12" className="checkout__checkbox-order">
                            <Label check>
                                <Input
                                    type="checkbox"
                                    name="cbOrder"
                                    onChange={this.toggleChange}
                                />
                                    Người nhận cũng là người đặt hàng
                            </Label>
                        </Col>
                        {this.orderInfo('THÔNG TIN NGƯỜI NHẬN', 'Bot')}
                    </Col>
                    <Col xs="12" sm="12" md="5" lg="3" xl="3" className="checkout__bill">
                        <Col xs="12" sm="12" md="12" lg="12" xl="12" className="checkout__billItem">
                            {this.orderItem()}
                            <Col xs="12" sm="12" md="12" lg="12" xl="12" className="checkout__itemOrder">
                                {this.renderItemOrder()}
                            </Col>
                            <Col xs="12" sm="12" md="12" lg="12" xl="12" className="checkout__total">
                                {this.renderPrice('THÀNH TIỀN', this.state.totalTemp)}
                                {this.renderPrice('TIỀN VẬN CHUYỂN', this.state.totalShip)}
                                {this.renderPrice('TỔNG TIỀN', this.state.totalPrice)}
                            </Col>
                        </Col>
                        <Col xs="12" sm="12" md="12" lg="12" xl="12" className="checkout__btn">
                            <button type="button" onClick={() => this.checkValidation()}>
                                THANH TOÁN
                            </button>
                        </Col>
                    </Col>
                    <Row />
                </Row>
            </section>
        );
    }
}

export default Checkout;
