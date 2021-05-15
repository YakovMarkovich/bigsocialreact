import React, {Component} from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {getAuthUserData, logout, setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends Component {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state)=> ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {logout})(HeaderContainer);