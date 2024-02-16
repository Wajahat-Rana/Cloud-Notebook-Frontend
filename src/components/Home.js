import React from 'react'
import Notes from './Notes'


const Home = () => {

    return (
        <div className='container my-3'>
            <h1 style={{ fontSize: "35px" }}>Add A Note</h1>
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                    <div id="emailHelp" className="form-text">We'll never share your notes with anyone else.</div>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Add Note</button>
            </form>
            <Notes />
        </div>
    )
}

export default Home