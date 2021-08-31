import faker from 'faker'
import React from 'react'

const Home = () => {
    return (
        <div className="container">
            <h4 className="center">Home</h4>
            <p>{faker.lorem.paragraph()}</p>
        </div>
    )
}

export default Home
