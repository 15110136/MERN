import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from './ListAction';

class List extends Component {
    componentWillMount() {
        this.props.getUsers();
    }

    render() {
        return (
            this.props.dataUsers.map((item) => <div>name: {item.name}</div>)
        );
    }
}

const mapStateToProps = state => ({
    dataUsers: state.listUsers.dataUsers,
});

const mapDispatchToProps = { getUsers };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(List);
