import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import Product from '../../components/product/Product';
import { getProduct } from './ProductAction';
import leftArrow from '../../assets/icon/left-arrow-nav.svg';
import rightArrow from '../../assets/icon/right-arrow-nav.svg';

class ProductContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameProduct: this.props.match.params.nameProduct,
        };
    }

    componentDidMount() {
        this.props.getProduct(this.state.nameProduct);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.nameProduct !== nextProps.match.params.nameProduct) {
            let value = nextProps.match.params.nameProduct;
            if (value === 'makeup') {
                value = 'Trang điểm';
            } else if (value === 'brand') {
                value = 'Thương hiệu';
            } else if (value === 'brand') {
                value = 'Thương hiệu';
            } else if (value === 'brand') {
                value = 'Thương hiệu';
            } else if (value === 'brand') {
                value = 'Thương hiệu';
            } else if (value === 'brand') {
                value = 'Thương hiệu';
            } else if (value === 'brand') {
                value = 'Thương hiệu';
            }
            this.props.getProduct(nextProps.match.params.nameProduct);
            this.setState({
                nameProduct: value,
            });
        }
    }

    handlePageClick = (data) => {
        const { selected } = data;
        console.log('>>>>>>>>>>> page', selected);
    };

    render() {
        return (
            <React.Fragment>
                <Product
                    nameProduct={this.state.nameProduct}
                    items={this.props.dataProducts}
                    isLoading={this.props.isLoading}
                    priceDown={() => this.props.getProduct('brand')}
                    // priceUp={() => this.props.getProduct(this.state.nameProduct)}
                    // ratingDown={() => this.props.getProduct(this.state.nameProduct)}
                    // ratingUp={() => this.props.getProduct(this.state.nameProduct)}
                />
                <ReactPaginate
                    pageCount={10}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    previousLabel={<img src={leftArrow} alt="404 Not Found" />}
                    nextLabel={<img src={rightArrow} alt="404 Not Found" />}
                    containerClassName="pagination"
                    previousClassName="pagination__previous"
                    nextClassName="pagination__next"
                    activeClassName="pagination__active"
                    onPageChange={this.handlePageClick}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    dataProducts: state.ProductReducer.dataProducts,
    isLoading: state.ProductReducer.isLoading,
});

const mapDispatchToProps = {
    push,
    getProduct,
};


export default (connect(mapStateToProps, mapDispatchToProps)(ProductContainer));
