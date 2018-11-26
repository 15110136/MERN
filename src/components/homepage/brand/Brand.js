import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Slider from 'react-slick';
import uid from 'uid';
import { ReactComponent as Elf } from '../../../assets/brand/elf.svg';
import { ReactComponent as Makeupforever } from '../../../assets/brand/makeupforever.svg';
import { ReactComponent as Mac } from '../../../assets/brand/mac.svg';
import { ReactComponent as Chanel } from '../../../assets/brand/ChanelLogo.svg';
import { ReactComponent as Lancome } from '../../../assets/brand/lancome.svg';
import { ReactComponent as Dior } from '../../../assets/brand/dior.svg';
import { ReactComponent as Nyx } from '../../../assets/brand/nyx.svg';

class Brand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brands: [
                {
                    brandName: 'elf',
                    href: '/elf',
                    src: Elf,
                },
                {
                    brandName: 'makeupforever',
                    href: '/makeupforever',
                    src: Makeupforever,
                },
                {
                    brandName: 'mac',
                    href: '/mac',
                    src: Mac,
                },
                {
                    brandName: 'chanel',
                    href: '/chanel',
                    src: Chanel,
                },
                {
                    brandName: 'lancome',
                    href: '/lancome',
                    src: Lancome,
                },
                {
                    brandName: 'dior',
                    href: '/dior',
                    src: Dior,
                },
                {
                    brandName: 'nyx',
                    href: '/nyx',
                    src: Nyx,
                },
            ],
        };
    }

    renderBrand = () => {
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            arrows: false,
            autoplaySpeed: 3000,
            speed: 2000,
            slidesToShow: 4,
            rtl: true,
            slidesToScroll: 1,
        };
        const slideComponent = this.state.brands.map(item => (
            <Row className="justify-content-center" key={uid()}>
                <Col xs="12" sm="12" md="12" lg="12" xl="12" className={`brand__${item.brandName}`}>
                    <a href={item.href} key={uid()}>
                        <item.src />
                    </a>
                </Col>
            </Row>
        ));
        return (
            <Slider {...settings}>{slideComponent}</Slider>
        );
    };

    render() {
        return (
            <section className="brand">
                <h2>thương hiệu</h2>
                {this.renderBrand()}
            </section>
        );
    }
}

export default Brand;
