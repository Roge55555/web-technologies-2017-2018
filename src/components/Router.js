import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"
import Repositories from "./Repositories"
import Followers from  "./Followers"

const history = createBrowserHistory();

export default function Router(props) {

    const repos = () => {
        return <Repositories user={props.user}/>
    };

    const followers = () => {
        return <Followers user={props.user}/>
    };

    return(
        <BrowserRouter history={history}>
            <div>
                <ul>
                    <li><Link to="/followers">followers</Link></li>
                    <li><Link to="/repositories">repositories</Link></li>
                </ul>

                <Route path="/followers" component={followers}/>
                <Route path="/repositories" component={repos}/>
            </div>
        </BrowserRouter>
    )
}