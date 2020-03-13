import React, { Component } from 'react';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-api';
import { connect } from "react-redux";
import * as actions from '../../store/actions/index';
import style from './userInformation.module.css';


class User extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount () {
        this.props.onGetUser(this.props.userLogin);
    }

    goToRepos = () => {
        this.props.history.push('repoListView');
    }

    render () {
        return (
            <div className={style.user__information}>
                <div className={style.user__head}>
                    <h1>{this.props.user.login}</h1>

                    <div className={style.module_border_wrap}>
                        <img className={style.user_photo} src={this.props.user.avatar_url} alr="user photo" />
                    </div>
                </div>

                <div className={style.user__shortInfo}>
                    <div className={style.user__shortInfo_element}>
                        <img className={style.user__shortInfo_icon} src="dist/img/followers.png" alt="folowers" />
                        <span>Company: <b>{this.props.user.company}</b></span>
                    </div>
                    <div className={style.user__shortInfo_element}>
                        <img className={style.user__shortInfo_icon} src="dist/img/organization.png" alt="organization" />
                        <span>Email: <b>{this.props.user.email}</b></span>
                    </div>
                    <div className={style.user__shortInfo_element}>
                        <img className={style.user__shortInfo_icon} src="dist/img/repos.png" alt="repositories" />
                        <span>Followers: <b>{this.props.user.followers}</b></span>
                    </div>
                    <div className={style.user__shortInfo_element}>
                        <img className={style.user__shortInfo_icon} src="dist/img/subscriptions.png" alt="rubscriptions" />
                        <span>Updated at: <b>{this.props.user.updated_at}</b></span>
                    </div>
                </div>
                <div onClick={() => this.goToRepos()}>
                    <h3>Go to Repos</h3>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        userLogin: state.searchUsers.userLogin,
        user: state.fetchUser.userInfo,
        loading: state.searchUsers.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetUser: (val) => dispatch(actions.onGetUser(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( User, axios ));

