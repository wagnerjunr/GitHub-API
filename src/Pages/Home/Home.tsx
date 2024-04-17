import React, { useState } from 'react';
import Search from '../../Componentes/Search/Search';
import { userProps } from '../../Types/UserSchema';
import UserInfo from '../../Componentes/UserInfo/UserInfo';
import './home.css'

const Home = () => {

    const [user, setUser] = useState<userProps | null>(null)

    const loadUser = async (username: string) => {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();
        console.log(data);
        if(res.status === 404){
            setUser(null);
            alert ("Usuário não encontrado");
            return;
        }
        const {avatar_url,login,name,location,followers,following} = data;
        
        const userData:userProps = {
            avatar_url,
            login,
            name,
            location,
            followers,
            following
        }
        if(userData.name){
            setUser(userData);
        }
    }

    return (
        <div className='home-page'>
            <Search loadUser={loadUser}></Search>
            {user && <UserInfo user={user}/>}
        </div>
  )
}

export default Home;
