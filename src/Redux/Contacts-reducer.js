let SEND_MESSAGE = 'SEND-MESSAGE';

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
};

export const contactsReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {

        case SEND_MESSAGE:
            return  {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: action.newMessageText}],
            };
        default:
            return state;
    }
}

export function createMessageActionCreator(newMessageText) {
    return {type: SEND_MESSAGE, newMessageText}
}

export default contactsReducer;