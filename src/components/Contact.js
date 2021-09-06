import React,{useEffect,useState} from 'react'
import {useRouteMatch} from 'react-router-dom'

const Contact = () => {
    let match = useRouteMatch('/posts/:id')
    console.log('ben buyums', match)
    const [post, setPost] = useState()
    useEffect(() => {
        async function fetchPostJSON() {
            const response = await fetch(`https://jsonplaceholder.typicode.com${match.url}`);
            const movies = await response.json();
            return movies;
          }
          fetchPostJSON()
          .then(post => setPost(post))
    }, [])
    console.log("naber:",post)
    return (
        <div className="container">
            {post ? 
            <div class="card-body shadow">                 
            <h5 class="card-title">{post.title}</h5>
            <p class="card-text">{post.body}</p>
        </div>:null}
        </div>
    )
}

export default Contact
