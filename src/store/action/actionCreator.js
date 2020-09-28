import axios from "axios";
const fetchTraingListConstant = "FETCHED_TRAINING_LIST";
const fetchChatListConstant = "FETCHED_CHAT_LIST";

const trainignListApi = "https://test-lbadmin-m.enterprisebot.co/api/v3/botsessions?filter=%7B%22limit%22%3A20%2C%22skip%22%3A0%2C%22order%22%3A%22id%20DESC%22%2C%22where%22%3A%7B%22agentId%22%3A%225bcee5bafe751a289f6154cf%22%7D%7D"
const chatListApi = "https://test-lbadmin-m.enterprisebot.co/api/v3/botsessions/"

export const fetchedList = (typeOfFetched,fetchedList) => {
    return {
        type: typeOfFetched,
        payload: fetchedList
    }
}

export const showLoader = (Loading,loaderState) => {
    return {
        type: Loading,
        payload: loaderState
    }
}

export const setSessionID = (sessionId) => {
    return {
        type: "SET_SESSION_ID",
        payload: sessionId
    }
}

export const fetchTrainingList = () => {
    return dispatch => {
        axios({
            method: "GET",
            url: trainignListApi,
            headers: {
                'Authorization': sessionStorage.getItem('auth'),
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })

        .then( response => {
            dispatch(fetchedList(fetchTraingListConstant,response.data))
        })
    }
}


export const fetchChatList = (sessionId) => {
    return dispatch => {
        dispatch(showLoader("Loading", true))

        axios({
            method: "GET",
            url: chatListApi + sessionId + "/botmessage",
            headers: {
                'Authorization': sessionStorage.getItem('auth'),
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })
        .then( response => {
            dispatch(fetchedList(fetchChatListConstant,response.data))
        });
    }
}


