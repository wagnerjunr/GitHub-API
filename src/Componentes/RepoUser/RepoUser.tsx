import React from 'react'
import { repoProps } from '../../Types/RepoSchema';
import './repouser.css'
import { FaCodeFork } from "react-icons/fa6";
import { RiCodeSSlashFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

type repoPropsProps = {
    repo: repoProps[];
    login: string | undefined;
}

const RepoUser = ({ repo, login }: repoPropsProps) => {
    return (
        <div>
            <Link to={"/"}><button className='btn-repo btn-homepage'>Voltar</button></Link>

            <p style={{margin:"20px 0 20px",fontSize:"20px",textTransform:"capitalize"}}>Reposítorio GitHub: {login}</p>
            <div className='container-repo'>
                {repo.map((item, index: any) => {
                    return (
                        <div key={index} className='repo-user'>
                            <div className='repo-name'>
                                <p>{item.name}</p>
                            </div>
                            <div className='repo-language'>
                                <RiCodeSSlashFill />
                                <p>{item.language}</p>
                            </div>
                            <div className='repo-fork'>
                                <section><FaCodeFork /></section>
                                <section style={{margin:"auto"}}> <p>{item.forks}</p></section>
                            </div>
                            <div>
                                <a href={item.homepage} style={{textDecoration:"none"}} target='_blanked'  ><button className='btn-repo code'>Ver Projeto</button> </a>
                                <a href={item.svn_url} style={{textDecoration:"none"}} target='_blanked' ><button className='btn-repo project'>Ver Código</button> </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RepoUser;
