import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

function Profiles() {

    let match = useRouteMatch('/profile/:name')
    console.log("match",match)
    return match ? <p>{match.params.name}'s Profile</p> : <p>My own profile</p>;
}

export default Profiles
