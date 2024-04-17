import React from 'react'
import { userProps } from '../../Types/UserSchema';
import { FaMapMarkerAlt } from "react-icons/fa";
import './userinfo.css'
import { Link } from 'react-router-dom';

interface UserPropsProps { user: userProps }

const UserInfo = ({ user }: UserPropsProps) => {
    return (
        <div className='container-user-infos'>
            <div className='user-infos'>
                <div className='user-image'>
                    <img src={user.avatar_url} width={150}></img>
                </div>
                <p style={{ fontSize: "20px" }}>{user.name}</p>
                {user.location ? <p> <FaMapMarkerAlt /> {user.location}</p> : null}
                <div className='user-follow'>
                    <section className='user-followers'>
                        <p style={{ fontSize: "14px" }}>Seguidores:</p>
                        <p style={{ background: "#47B8AD", margin: "5px 0", padding: "3px" }}> {user.followers}</p>
                    </section>
                    <hr></hr>
                    <section >
                        <p style={{ fontSize: "14px" }}>Seguindo:</p>
                        <p style={{ background: "#47B8AD", margin: "5px 0", padding: "3px" }}>{user.following}</p>
                    </section>
                </div>
               <Link to={`/repos/${user.login}`}> <button className='user-repo'>Mostrar Projetos</button></Link>
            </div>
        </div>
    )
}

export default UserInfo;
