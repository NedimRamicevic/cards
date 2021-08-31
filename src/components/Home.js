import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Card from '../card'

const Home = () => {
    const [posts, setPosts] = useState()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setPosts(json.slice(0,6)) )
    }, [])
    return (
        <div className="container ">
            <h4 className="center ">Home</h4>
            <div className="row row-cols-2">
            {posts ? posts.map(post =>(
                <div className="card col px-2 bg-white rounded" style={{backgroundColor: "#eee"}}>
                <div className="card-body shadow">
                  <Link to={`/posts/${post.id}`}> 
                    <h5 className="card-title">{post.title}</h5>
                  </Link>
                  <p className="card-text">{post.body}</p>
                </div>
                </div>
            ) ):null}
            </div>
        </div>
        
    )
}

export default Home
