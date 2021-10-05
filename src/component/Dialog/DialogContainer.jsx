import React from "react";
import name from './Dialog.module.css';
import { addNewMessageCreator, getNewMessageCreator } from "../../redux/dialog-reducer";
import Dialog from "./Dialog";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsData: state.DialogPage.dialogsData,
        message: state.DialogPage.message,
        newMessage: state.DialogPage.newMessage
    }
}

let mapDispatcToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            dispatch(addNewMessageCreator())
        },

        getNewMessage: (text) => {
            dispatch(getNewMessageCreator(text));
        }
    }
}

const DialogContainer = connect(mapStateToProps, mapDispatcToProps)(Dialog);

export default DialogContainer;