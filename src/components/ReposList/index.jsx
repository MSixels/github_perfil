import { useEffect, useState } from "react"

import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);

    useEffect (() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setRepos(resJson);
        })
    }, [nomeUsuario])

    return (
    <div className="container">
    <ul className={styles.list}>
        {repos.map(({id, name, language, html_url}) => (
            <li className={styles.listItem} key={id}>
                <div>
                <b className={styles.itemName}>Nome:</b> 
                {name}
                </div>
                <div>
                <b className={styles.itemLanguage}>Linguagem:</b> 
                {language}
                </div>                
                <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no GitHub</a>
            </li>
        ))}
    </ul>
    </div>
    )
}

export default ReposList