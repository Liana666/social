import contentReducer from "./content-reducer";
import dialogReducer from "./dialog-reducer";

let store = {
    _state: {

        DialogPage: {
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

        },
        ContentPage: {
            posts: [
                { id: 1, post: 'Hi, how are you?', like: 20 },
                { id: 2, post: 'I learning react', like: 2 },
                { id: 3, post: 'Do you like js?', like: 220 },
                { id: 4, post: 'Yo', like: 120 },
                { id: 5, post: 'yo', like: 20 }
            ],
            newPostText: 'Поделитесь новостью'
        }
    },

    getState() {
        return this._state;
    },

    _rerender() {
        console.log("change state")
    },
    subsribe(observer) {
        this._rerender = observer;
    },

    dispatch(action) {
        this._state.ContentPage = contentReducer(this._state.ContentPage, action);
        this._state.DialogPage = dialogReducer(this._state.DialogPage, action);
        this._rerender(this._state);
    }
}



window.store = store;

export default store;