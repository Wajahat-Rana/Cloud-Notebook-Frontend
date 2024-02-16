import { useContext }  from 'react'
import NoteContext from '../context/notes/NoteContext'

const About = () => {
    const about = useContext(NoteContext)
  return (
    <>   
    <div>About</div>
    <div>Name: {about.name}</div>
    <div>Gender: {about.gender}</div>
    </>

  )
}

export default About