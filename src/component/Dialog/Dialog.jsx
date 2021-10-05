import React from "react";
import name from './Dialog.module.css';
import { NavLink } from 'react-router-dom';
import { Ref, useState } from "react";


const DialogItem = (props) => {
    return (
        <>
            <div className={name.item + ' ' + name.active}>
                <NavLink to={`/dialog/${props.id}`}>{props.name}</NavLink>
            </div>
        </>
    )

}

const Messages = (props) => {
    return (

        <div className={name.message}><img src={props.photo} alt="" /><span>{props.message}</span></div>
    )

}


const Dialog = (props) => {
    const newMessage = React.createRef();

    const getNewMessage = () => {
        let text = newMessage.current.value;
        props.getNewMessage(text);
    }

    const addNewMessage = () => {
        props.addNewMessage();
    }

    return (

        <div className={name.dialogs}>
            <div className={name.dialogItem}>
                {props.dialogsData.map((item) => <DialogItem name={item.name} id={item.id} />)}
            </div>

            <div className={name.messages}>
                {/* {props.message.map((item) => <Messages photo={item.photo} message={item.message} />)} */}
                {props.message.map(item => <Messages message={item.message} photo={item.photo} />)}
                < hr />
                <div className={name.add}>
                    <textarea onChange={getNewMessage} value={props.newMessage} placeholder='new message..' name="message-write" ref={newMessage}></textarea>
                    <button onClick={addNewMessage} >Add message</button>

                </div>
            </div>
        </div>
    )
}


export default Dialog;