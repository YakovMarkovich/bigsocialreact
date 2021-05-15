import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {WithAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


/*let AuthRedirectComponent = WithAuthRedirect(Dialogs);*/

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
       /* updateNewMessageBody: (body)=>{dispatch(updateNewMessageBodyCreator(body))},*/
        /*sendMessage: ()=>{dispatch(sendMessageCreator())}*/
        sendMessage: (newMessageBody)=>{dispatch(sendMessageCreator(newMessageBody))}
    }
}

/*const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;*/

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);

