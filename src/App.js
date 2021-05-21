import './App.css';
import React from 'react';
import {Component} from 'react';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter, HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import LoginPage from "./components/login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./components/hoc/withSuspense";


/*


ссылка на git-репозиторий: https://github.com/it-kamasutra/react-way-of-samurai

gitk --all&     (открыть графическую оболочку гита, чтобы позырить все коммиты)
ctrl + insert (копировать в буфер обмена)
shift + insert (вставить из буфера обмена)
git checkout commit-number (переключится на нужный коммит)

*/

const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));

class App extends Component {

    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert("some error occured");
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/'
                               render={() => <Redirect from="/" to="/profile" />}/>

                        <Route path='/dialogs'
                               render={() => <React.Suspense fallback={<Preloader/>}>
                                   <DialogsContainer store={this.props.store}/></React.Suspense>}/>
                        <Route path='/profile/:userId?'
                               render={withSuspense(ProfileContainer)}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/login/facebook'
                               render={() => <div>facebook</div>}/>
                        <Route path='/login'
                               render={() => <LoginPage/>}/>
                        <Route path='*'
                               render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return <BrowserRouter basename={process.env.PUBLIC}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>;
}

export default SamuraiJSApp;


