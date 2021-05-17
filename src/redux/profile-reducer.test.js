import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";
let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ]
}

test('length of post should be incremented', () => {
    let action = addPostActionCreator("It kamasutra.com");
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5);
});

test('message of post should be correct', () => {
    let action = addPostActionCreator("It kamasutra.com");
    let newState = profileReducer(state, action);
    expect(newState.posts[4].message).toBe("It kamasutra.com");
});

test('after deleting length of message should be decremented', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});

test('after deleting length shouldnt be decremented if id is not correct', () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});


