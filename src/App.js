import './App.css';
import React from 'react';
import  {Component} from 'react';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import Users from "./components/users/UsersFC";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import LoginPage from "./components/login/Login";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "./redux/auth-reducer";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

/*


ссылка на git-репозиторий: https://github.com/it-kamasutra/react-way-of-samurai

gitk --all&     (открыть графическую оболочку гита, чтобы позырить все коммиты)
ctrl + insert (копировать в буфер обмена)
shift + insert (вставить из буфера обмена)
git checkout commit-number (переключится на нужный коммит)

*/


class App extends Component {

    componentDidMount() {
        /*authAPI.me()
             .then(response => {
                 if(response.data.resultCode===0){
                     let {id, email, login} = response.data.data;
                     this.props.setAuthUserData(id, email, login);
                 }
             })*/
        this.props.initializeApp();
    }
    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>*/}
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer store={this.props.store}/> }/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/login'
                           render={() => <LoginPage/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);


