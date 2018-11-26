import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import uid from 'uid';
import eye from '../../../assets/category/eye.svg';
import lips from '../../../assets/category/lipstick.svg';
import face from '../../../assets/category/face.svg';
import brush from '../../../assets/category/brush.svg';
import body from '../../../assets/category/body.svg';
import others from '../../../assets/category/tools.svg';

class Category extends Component {
    render() {
        const listItems = [
            {
                src: eye,
                tittle: 'Mắt',
                to: '/eyes',
                className: 'category__eyes',
            },
            {
                src: lips,
                tittle: 'Môi',
                to: '/lips',
                className: 'category__lips',
            },
            {
                src: face,
                tittle: 'Khuôn mặt',
                to: '/face',
                className: 'category__face',
            },
            {
                src: brush,
                tittle: 'Cọ',
                to: '/brush',
                className: 'category__brush',
            },
            {
                src: body,
                tittle: 'Dưỡng thể',
                to: '/skincare',
                className: 'category__skincare',
            },
            {
                src: others,
                tittle: 'Khác',
                to: '/others',
                className: 'category__others',
            },
        ];

        const renderItems = listItems.map(item => (
            // style={{ background: `url(${item.src})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}
            <Col key={uid()} xs="5" sm="5" md="3" lg="3" xl={{ size: 3 }} className={item.className}>
                <Link key={uid()} to={item.to}>
                    <Row>
                        <img src={item.src} alt="404 Not Found" className="category__img" />
                        <span className={item.tittle}>{item.tittle}</span>
                    </Row>
                </Link>
            </Col>
        ));
        return (
            <section className="category">
                <div className="category__headline" />
                <h2>Danh mục sản phẩm</h2>
                <div className="category__items">
                    <Row className="justify-content-center">{renderItems}</Row>
                </div>
            </section>
        );
    }
}

export default Category;
