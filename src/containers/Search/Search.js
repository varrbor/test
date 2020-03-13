import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Aux from '../../hoc/Auxiliary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-api';
import { connect } from "react-redux";
import * as actions from '../../store/actions/index';
import styles from './search.module.css';

class Search extends Component {
    constructor(props) {
        super(props);
    }

    getUserName = (event) => {
        this.props.updateUserList(event.target.value, this.props.users);
    }

    showInformation = user => {
        this.props.setUser(user);
        this.props.history.push('userInfo');
    }

    render () {
        let orders = [];
        if ( this.props.searchUsers.usersList ) {

            orders = (
                <ul>
                    {this.props.searchUsers.usersList.items.map(item => (
                        <li key={item.id} onClick={() => { this.showInformation(item.login) }}>
                            {item.login}
                        </li>
                    ))}
                </ul>
            )
        }

        return (
            <Aux>
                <div className={styles.search__panel}>
                    <img className={styles.search__icon} src="dist/img/search.png" alt="Search icon" />
                    <input className={styles.search__field} type="text" onChange={this.getUserName} />
                </div>
                {orders}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchUsers: state.searchUsers,
        loading: state.searchUsers.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUserList: (val) => dispatch(actions.updateUsersList(val)),
        setUser: (user) => dispatch(actions.setUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( Search, axios ));