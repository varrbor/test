import * as actionTypes from '../actions/actionTypes';

const initialState = {
    userInfo: {
        login: "",
        id: null,
        node_id: "",
        avatar_url: "",
        gravatar_id: "",
        url: "",
        html_url: "",
        followers_url: "",
        following_url: "",
        gists_url: "",
        starred_url: "",
        subscriptions_url: "",
        organizations_url: "",
        repos_url: "",
        events_url: "",
        received_events_url: "",
        type: "User",
        site_admin: false,
        name: null,
        company: null,
        blog: "",
        location: null,
        email: null,
        hireable: null,
        bio: null,
        public_repos: 1,
        public_gists: 0,
        followers: 0,
        following: 0,
        created_at: "",
        updated_at: "",
    },
    loading: false,
    err: {}
};

const searchUsersStart = ( state, action ) => {
    return {
        ...state,
        ...{ loading: true }
    }
};

const fetchUsersSuccess = ( state, action ) => {
    return {
        ...state,
        ...{ userInfo: action.userInfo, loading: false }
    }
};

const searchUsersFail = ( state, action ) => {
    return {
        ...state,
        ...{ err: action.err, loading: false }
    }
};

const userReducer = (state = initialState, action) => {
    switch ( (action.type)) {
        case actionTypes.FETCH_USER_START: return searchUsersStart(state, action);
        case actionTypes.FETCH_USER_SUCCESS: return fetchUsersSuccess(state, action);
        case actionTypes.SEARCH_USERS_FAIL: return searchUsersFail(state, action);
        default:
            return state;
    }
};

export default userReducer;