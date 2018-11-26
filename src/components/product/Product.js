import React, { Component } from 'react';
import {
    Breadcrumb, BreadcrumbItem, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import uid from 'uid';
import starInit from '../../assets/icon/star.svg';
import starYellow from '../../assets/icon/starYellow.svg';
import loadingIcon from '../../assets/icon/loading.svg';

class Product extends Component {
    constructor() {
        super();
        this.state = {
            dropdownOpen: false,
            // data: [],
        };
        this.toggle = this.toggle.bind(this);
    }

    // shouldComponentUpdate(nextProps) {
    //     console.log('>>>>>>>>> nextProps', nextProps);
    //     if (this.state.data !== nextProps.items) {
    //         this.setState({ data: nextProps.items });
    //         return true;
    //     }
    //     return false;
    // }

    // componentWillReceiveProps(nextProps) {
    //     if (this.state.data.length !== nextProps.items.length) {
    //         this.setState({ data: nextProps.items });
    //     }
    // }

    // static getDerivedStateFromProps(nextProps, state) {
    //     // console.log('>>>>>>>>>> current state', this.state);
    //     console.log('>>>>>>>>>> State', state);
    //     // console.log('>>>>>>>>>> current props', this.props);
    //     console.log('>>>>>>>>>> nextProps', nextProps);
    //     if (state.data === nextProps.items) {
    //         return null;
    //     }
    //     return { data: nextProps.items };
    // }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen,
        }));
    }

    renderSort = () => (
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
          Sắp sếp
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={this.props.priceDown}>Giá: cao &rarr; thấp</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={this.props.priceUp}>Giá: thấp &rarr; cao</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={this.props.ratingDown}>Đánh giá: cao &rarr; thấp </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={this.props.ratingUp}>Đánh giá: thấp &rarr; cao</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );

    renderProduct = mockItems => mockItems.map(item => (
        <Col xs="10" sm="10" md="3" lg="3" xl="3" className="product__item" key={uid()}>
            <Link to={`/product/${item.id}`} key={uid()}>
                <img src={item.image} alt={item.productName} className="product__image" />
                <p>{item.productName}</p>
                <p>{item.productPrice}</p>
                <p>
                    <Rating
                        className="product__starContainer"
                        initialRating={item.rating}
                        readonly
                        emptySymbol={<img src={starInit} alt="404 Not Found" className="product__star" />}
                        fullSymbol={<img src={starYellow} alt="404 Not Found" className="product__star" />}
                    />
                </p>
            </Link>
        </Col>
    ));

    render() {
        return (
            <section className="product">
                <div className="product__headline" />
                <Breadcrumb className="product__breadcrumb">
                    <BreadcrumbItem>
                        <Link to="/">Trang chủ</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>{this.props.nameProduct}</BreadcrumbItem>
                </Breadcrumb>
                <h2>{this.props.nameProduct}</h2>
                <Row className="justify-content-center" key={uid()}>
                    {this.props.isLoading && <img src={loadingIcon} alt="404 Not Found" />}
                    {(this.props.items.length > 0) && <Col xs="12" sm="12" md="12" lg="12" xl="12">{this.renderSort()}</Col>}
                    {(this.props.items.length > 0) && this.renderProduct(this.props.items)}
                </Row>
            </section>
        );
    }
}

export default Product;
