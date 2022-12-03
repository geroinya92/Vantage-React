let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const mainReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                text: state.newPostText,
                likesCount: 0,
            };
            state.newsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export function AddPostActionCreator() {
    return {type: ADD_POST}
}

export function UpdateNewPostTextActionCreator(text) {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export default mainReducer;