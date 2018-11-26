import React, { Component } from 'react';
import { ReactComponent as SearchText } from '../../../assets/header/search-text.svg';

class Search extends Component {
    render() {
        return (
            <section className="search">
                <h2>Tìm kiếm</h2>
                <div className="search__input">
                    <input type="text" placeholder="Tên sản phẩm, loại sản phẩm cần tìm kiếm" />
                    <a href="/"><SearchText /></a>
                </div>
            </section>
        );
    }
}

export default Search;
