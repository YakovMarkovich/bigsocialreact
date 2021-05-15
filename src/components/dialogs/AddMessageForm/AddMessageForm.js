import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/Validators";
import React from "react";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="newMessageBody"
                   validate={[required, maxLength50]}
                   placeholder="Enter your message"/>
            {/*<div><textarea value={newMessageBody}
                           onChange={onNewMessageChange}
                           placeholder="Enter your message"></textarea></div>*/}
            <div>
                {/*<button onClick={onSendMessageClick}>Send</button>*/}
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);