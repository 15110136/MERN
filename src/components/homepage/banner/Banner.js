import React, { Component } from 'react';
import Slider from 'react-slick';
import uid from 'uid';

class Banner extends Component {
    slideComponent = () => this.props.items.map(item => (
        <div key={uid()}><img src={item.src} alt={item.altText} /></div>
    ));

    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            arrows: false,
            autoplaySpeed: 3000,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: 'ondemand',
        };

        return (
            <section className="banner">
                <Slider {...settings}>
                    {this.slideComponent()}
                </Slider>
            </section>
        );
    }
}

export default Banner;
