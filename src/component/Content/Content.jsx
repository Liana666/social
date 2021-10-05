import React from 'react';
import banner from './banner.jpg';
import user from './9.gif';
import './Content.css';
import MyPostContainer from './MyPost/MyPostContainer';

function Content(props) {
    return (
        <>
            <img className='banner' src={banner} alt="banner" />
            <div className="cart-content">
                <img className='user-photo' src={user} alt="user" />
                <div className="content-user">
                    <div className="user-name">Liana N</div>
                    <div className="user-info">
                        <ul>
                            <li>Date of Brith: 09.02.1998</li>
                            <li>City: Kazan</li>
                            <li>Web Site: poka net</li>
                        </ul>
                    </div>
                </div>
            </div>
            <MyPostContainer />

        </>
    )
}

export default Content;