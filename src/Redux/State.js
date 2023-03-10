import mainReducer from "./Main-reducer";
import contactsReducer from "./Contacts-reducer";

let store = {

    //данные
    _state: {
        Contacts: {
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
        },
        Main: {
            newsData: [
                {
                    id: 1,
                    text: 'BBC Radio is an operational business division[1] and service of the British Broadcasting Corporation (which has operated in the United Kingdom under the terms of a royal charter since 1927). The service provides national radio stations covering the majority of musical genres, as well as local radio stations covering local news, affairs and interests. It also oversees online audio content',
                    likesCount: 12,
                },
                {
                    id: 2,
                    text: 'Of the national radio stations, BBC Radio 1, 2, 3, 4 and 5 Live are all available through analogue radio (AM or FM (with BBC Radio 4 LW on longwave[3]) as well as on DAB Digital Radio and BBC Sounds. The Asian Network broadcasts on DAB and selected AM frequencies in the English Midlands. BBC Radio 1Xtra, 4 Extra, 5 Sports Extra, 6 Music and the World Service broadcast only on DAB and BBC Sounds, while Radio 1 Dance and Relax streams are available only online.',
                    likesCount: 47,
                },
                {
                    id: 3,
                    text: 'All of the BBC\'s national radio stations broadcast from bases in London and Manchester, usually in or near to Broadcasting House or MediaCityUK. However, the BBC\'s network production units located in Belfast, Birmingham, Bristol, Cardiff and Glasgow also make radio programmes.',
                    likesCount: 3,
                },
            ],
            newPostText: 'Vantage',
        },
    },
    _callSubscriber() {
        console.log('state was changed!');
    },

    //общие методы
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        this._state.Main = mainReducer(this._state.Main, action)
        this._state.Contacts = contactsReducer(this._state.Contacts, action)

        this._callSubscriber(this._state)

    }
}


export default store
window.store = store;