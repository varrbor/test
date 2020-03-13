import React, { Component } from 'react';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-api';
import { connect } from "react-redux";
import * as actions from '../../store/actions/index';

class Repos extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        this.props.onGetRepos(this.props.userLogin);
    }

    render () {
        return (
            <ul>
                { this.props.repos.map(item => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {
        repos: state.fetchRepos.repos,
        userLogin: state.searchUsers.userLogin,
        user: state.fetchUser.userInfo,
        loading: state.searchUsers.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetRepos: (val) => dispatch(actions.onGetRepos(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( Repos, axios ));

