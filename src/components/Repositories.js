import React from 'react';
import git from '../API/index';


export default function Repositories(props){
    let data = [];
    git.getRepos(props.user)
        .then(res => res.forEach( (item, i) => data[i] = item.name ));

    data.map( item => <li>{item}</li>);

    const reactElementsArray = data.map((data) => {
        return (
            <p>{data}</p>
        );
    });

    return(
        <div>{reactElementsArray}</div>
    );
}
