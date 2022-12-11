let SEND_MESSAGE = 'SEND-MESSAGE';
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {id: 1, user: 'Mary',},
        {id: 2, user: 'Harry',},
        {id: 3, user: 'Sam',},
        {id: 4, user: 'Jack',},
        {id: 5, user: 'John',},
    ],
    messagesData: [
        {id: 1, message: 'Hello!',},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'My name is Mary!'},
        {id: 4, message: 'What about meeting?!'},
        {id: 5, message: 'You very interesting!'},
    ],
    newMessageText: 'Hello!',
};

export const contactsReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return  {
                ...state,
                newMessageText: action.newText,
            };

        case SEND_MESSAGE:
            return  {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, {id: 6, message: state.newMessageText}],
            };
        default:
            return state;
    }
}

export function createMessageActionCreator() {
    return {type: SEND_MESSAGE}
}

export function updateNewMessageTextActionCreator(text) {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
}

export default contactsReducer;