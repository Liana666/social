import user_img from './userpng.png';
import React, { useEffect } from "react";
import user from './users.module.css';
import * as axios from "axios";

let Users = (props) => {
    let active = { fontWeight: 600 };


    useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        });
    }
    );

    let pages = [];
    let pageNumber = Math.ceil(props.totalCount / props.pageSize);

    for (let i = 1; i <= pageNumber.length; i++) {
        pages.push(i);
        console.log(pages);

    }










    return <div>
        <div>
            {pages.map((p) => {
                return <span>{p}</span>
            })

            }

        </div>

        {
            props.users.map(u => <div className={user.wrapper} key={u.id}>
                <div className={user.item_user}>
                    <div>
                        <img src={u.photos.small || user_img} style={{ width: '100px', height: 100, borderRadius: '50%', marginBottom: 10 }} alt="" />
                    </div>
                    <div>
                        {u.follow
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </div>
                <div className={user.item_info}>
                    <div className={user.info}>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    {/* <div className={user.info}>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </div> */}
                </div>
            </div>
            )
        }

    </div>
}


export default Users;