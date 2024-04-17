import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { repoProps } from '../../Types/RepoSchema';
import RepoUser from '../../Componentes/RepoUser/RepoUser';

const User = () => {

  const { login } = useParams();
  const [repo, setRepo] = useState<repoProps[] | null>(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}/repos`)
      .then((res) => { return res.json() })
      .then((data) => {

        console.log(data);
        const repos: repoProps[] = data.map((item: any) => ({
          language: item.language,
          forks: item.forks,
          name:item.name,
          svn_url:item.svn_url,
          homepage:item.homepage,
        }));
        setRepo(repos);
      })
      .catch((error) => {
        console.error('Error fetching repos:', error);
      });
  }, [])

  return (
    <div>
      {repo && <RepoUser repo={repo} login = {login}></RepoUser>}
    </div>
  )
}

export default User;