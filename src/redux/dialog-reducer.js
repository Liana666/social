let initialState = {
    dialogsData: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Alex' },
        { id: 4, name: 'Crid' },
        { id: 5, name: 'Alecsio' },
        { id: 6, name: 'Fernando' },
    ],
    message: [
        { id: 1, message: 'Hi, how are you?', photo: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png' },
        { id: 2, message: 'I learning react', photo: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png' },
        { id: 3, message: 'Yo', photo: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png' },
        { id: 4, message: 'yo', photo: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png' },
        { id: 5, message: 'yo', photo: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png' }
    ],
    newMessage: "Введите сообщение"

};

const dialogReducer = (state = initialState, action) => {

    if (action.type === 'GET-NEW-MESSAGE') {
        state.newMessage = action.newMessage;

        let newState = { ...state };
        newState.newMessage = state.newMessage;

        return newState;
    }


    else if (action.type === 'ADD-NEW-MESSAGE') {
        let newMessagesObject = {
            id: 6,
            message: state.newMessage,
            photo: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png'
        };
        state.message.push(newMessagesObject);
        state.newMessage = '';

        let newState = { ...state };
        newState.message = [...state.message];

        newState.newMessage = '';


        return newState;
    }

    return state;
}


export const addNewMessageCreator = () => {
    return {
        type: 'ADD-NEW-MESSAGE'
    }

}

export const getNewMessageCreator = (text) => {
    return {
        type: 'GET-NEW-MESSAGE',
        newMessage: text
    }
}



export default dialogReducer;