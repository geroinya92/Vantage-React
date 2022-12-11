let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
}

const mainReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                newsData: [...state.newsData, {id: 5, text: state.newPostText, likesCount: 0}],
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
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