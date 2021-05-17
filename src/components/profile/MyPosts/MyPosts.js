import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/Validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {
    console.log("RENDER YO")
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    /* let onPostChange = () => {
         let text = newPostElement.current.value;
         props.updateNewPostText(text);
     }*/

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            {/*  <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>*/}
            <AddNewPostFormWrapped onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPostText"} placeholder={"Post message"}
                validate={[required, maxLength10 ]}
                />
                    {/*<textarea onChange={onPostChange}
                              ref={newPostElement} value={props.newPostText}/>*/}
            </div>
            <div>
                {/*<button onClick={onAddPost}>Add post</button>*/}
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormWrapped = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;