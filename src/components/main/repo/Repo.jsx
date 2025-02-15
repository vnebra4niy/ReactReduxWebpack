import React from 'react';
import './repo.less'
import { NavLink } from 'react-router-dom';


const Repo = (props) => {
    const repo = props.repo

    return (
        <div className="repo">
            <div className="repo-header">
                <div className="repo-header-name"><NavLink to={`/card/${repo.owner.login}/${repo.name}`}>{repo.name}</NavLink></div>
                <div className="repo-header-stars">Count of stars: {repo.stargazers_count}</div>
            </div>
            <div className="repo-last-commit">Last commit: {repo.updated_at}</div>
            <a href={repo.html_url} className="repo-link">Link ro repository: {repo.html_url}</a>
        </div>
    );
};

export default Repo;