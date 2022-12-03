let SEND_MESSAGE = 'SEND-MESSAGE';
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const contactsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state
        case SEND_MESSAGE:
            state.messagesData.push({id: 6, message: state.newMessageText});
            state.newMessageText = '';
            return state;
        default:
            return state;
    }
}

export function createMessageActionCreator () {
    return {type: SEND_MESSAGE}
}

export function updateNewMessageTextActionCreator (text) {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
}

export default contactsReducer;