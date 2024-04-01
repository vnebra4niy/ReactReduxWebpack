import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getContributors, getCurrentRepos } from '../actions/repos'
import './card.less'

const Card = () => {
    const { username, reponame } = useParams()
    const [repo, setRepo] = useState({ owner: {} })
    const [contributors, setContributors] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getCurrentRepos(username, reponame, setRepo)
        getContributors(username, reponame, setContributors)
    }, [])

    const handleGoBack = () => {
        navigate(-1)
    };

    return (
        <div>
            <button onClick={handleGoBack} className="back-btn">BACK</button>
            <div className="card">
                <img src={repo.owner.avatar_url} alt=""></img>
                <div className="name">{repo.name}</div>
                <div className="stars">{repo.stargazers_count}</div>
            </div>
            {contributors.map((c, index) => 
                <div key={index}>{index + 1}.{c.login}</div>
            )}
        </div>
    )
}

export default Card