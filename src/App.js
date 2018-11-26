import React, { Component } from 'react';
import {
    BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Loadable from 'react-loadable';
import './styles/index.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import LoadingComponent from './components/common/Loading';

function Loading({ error }) {
    if (error) {
        return 'Oh nooess!';
    }
    return <LoadingComponent />;
}

const Homepage = Loadable({
    loader: () => import('./containers/homepage/Homepage'),
    loading: Loading,
    delay: 3000, // 3 seconds
    timeout: 10000,
});

const Login = Loadable({
    loader: () => import('./components/login/Login'),
    loading: Loading,
    delay: 3000, // 3 seconds
    timeout: 10000,
});

const Cart = Loadable({
    loader: () => import('./components/cart/Cart'),
    loading: Loading,
    delay: 3000, // 3 seconds
    timeout: 10000,
});

const Checkout = Loadable({
    loader: () => import('./components/checkout/Checkout'),
    loading: Loading,
    delay: 3000, // 3 seconds
    timeout: 10000,
});

const Product = Loadable({
    loader: () => import('./containers/product/Product'),
    loading: Loading,
    delay: 3000, // 3 seconds
    timeout: 10000,
});

const DetailProduct = Loadable({
    loader: () => import('./containers/detailProduct/DetailProduct'),
    loading: Loading,
    delay: 3000, // 3 seconds
    timeout: 10000,
});

const Recommendation = Loadable({
    loader: () => import('./components/recommendation/Recommendation'),
    loading: Loading,
    delay: 3000, // 3 seconds
    timeout: 10000,
});

class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/cart" component={Cart} />
                        <Route exact path="/checkout" component={Checkout} />
                        <Route exact path="/recommendation" component={Recommendation} />
                        <Route exact path="/:nameProduct" component={Product} />
                        <Route exact path="/product/:id" component={DetailProduct} />
                        <Redirect to="/" />
                    </Switch>
                    <Footer />
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
