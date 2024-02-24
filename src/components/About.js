// import React,{ useContext }  from 'react'
// import NoteContext from '../context/notes/NoteContext'

// const About = () => {
//     const about = useContext(NoteContext)
//   return (
//     <>   
//     <div>About</div>
//     <div>Name: {about.name}</div>
//     <div>Gender: {about.gender}</div>
//     </>

//   )
// }

// export default About

import React from 'react';
import './About.css'; // Import CSS file for styling

function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1>About MemoMind</h1>
                <p>Welcome to MemoMind, your ultimate destination for organizing and managing your notes with ease. Whether you're a student, professional, or just someone who loves jotting down thoughts, MemoMind has got you covered.</p>
                <p>With MemoMind, you can:</p>
                <ul>
                    <li>Create and store unlimited notes securely</li>
                    <li>Edit and update your notes anytime, anywhere</li>
                    <li>Access your notes from any device</li>
                    <li>Enjoy a seamless and intuitive user experience</li>
                </ul>
                <p>Join MemoMind today and take your note-taking experience to the next level!</p>
            </div>
            <footer className="footer">
                <p>&copy; 2024 MemoMind | All rights reserved | Developed by Rana Wajahat Saleem</p>
            </footer>
        </div>
    );
}

export default About;
