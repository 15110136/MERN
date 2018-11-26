import React, { Component } from 'react';
import {
    Row, Col,
} from 'reactstrap';
import Rating from 'react-rating';
import uid from 'uid';
import starInit from '../../assets/icon/star.svg';
import starYellow from '../../assets/icon/starYellow.svg';
import user from '../../assets/icon/user.svg';

class Review extends Component {
    renderOverall = () => {
        if (this.props.rating === 0) { return ''; }
        if (this.props.rating < 2) { return 'RẤT TỆ'; }
        if (this.props.rating < 3) { return 'TỆ'; }
        if (this.props.rating < 4) { return 'BÌNH THƯỜNG'; }
        if (this.props.rating < 5) { return 'TỐT'; }
        if (this.props.rating === 5) { return 'RẤT TỐT'; }
        return '';
    }

    renderReviewer = data => data.map(review => (
        <Col xs="12" sm="12" md="12" lg="12" xl="12" className="review__item" key={uid()}>
            <Row>
                <Col xs="3" sm="3" md="3" lg="3" xl="3">
                    <Row>
                        <img src={user} alt="404 Not Found" className="review__img-user" />
                        <span className="review__userName">{review.userName}</span>
                    </Row>
                </Col>
                <Col xs="9" sm="9" md="9" lg="9" xl="9">
                    <Col xs="12" sm="12" md="12" lg="12" xl="12">
                        <Rating
                            className="review__starContainer col-md-4 col-lg-2"
                            initialRating={review.rating}
                            readonly
                            emptySymbol={<img src={starInit} alt="404 Not Found" className="review__star" />}
                            fullSymbol={<img src={starYellow} alt="404 Not Found" className="review__star" />}
                        />
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="12" xl="12">
                        <h5>{review.overall}</h5>
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="12" xl="12">
                        <p>{review.description}</p>
                    </Col>
                </Col>
            </Row>
        </Col>
    ));

    render() {
        return (
            <section className="review">
                <h4>ĐÁNH GIÁ</h4>
                <Row>
                    <Col xs="7" sm="7" md="7" lg="7" xl="7" className="review__overall">
                        <Rating
                            className="review__starContainer col-md-8 col-lg-6"
                            initialRating={this.props.rating}
                            readonly
                            emptySymbol={<img src={starInit} alt="404 Not Found" className="review__star" />}
                            fullSymbol={<img src={starYellow} alt="404 Not Found" className="review__star" />}
                        />
                    </Col>
                    <Col xs="5" sm="5" md="5" lg="5" xl="5" className="review__text-overall">
                        <span>{this.renderOverall()}</span>
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="12" xl="12" className="review__description">
                        {/* <Row> */}
                        {this.renderReviewer(this.props.review)}
                        {/* </Row> */}
                    </Col>
                </Row>
            </section>
        );
    }
}

export default Review;
