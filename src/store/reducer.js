
const initialState = {
    trainingList : [],
    chatList: [],
    isSaved: false,
    isLoading: true,
    sessionId: null
}

const reducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case 'FETCHED_TRAINING_LIST' :
        return {...state, trainingList:action.payload};

        case 'Loading' :
            return {...state,isLoading: true};
    
        case 'FETCHED_CHAT_LIST' :
            return {...state, chatList:action.payload,isLoading: false};

        case 'SET_SESSION_ID':
            return {...state, sessionId: action.payload}
    
        default: return state;
    }
}

export default reducer;