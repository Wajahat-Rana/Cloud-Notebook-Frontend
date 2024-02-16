import React from 'react'

const NoteItem = (props) => {
    const note = props.note
    return (
        <div class="card col-md-3 my-3 mx-3" >
            {/* <img src="..." class="card-img-top" alt="..." /> */}
            <div class="card-body">
                <h5 class="card-title">{note.title}</h5>
                <p class="card-text">{note.description}</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    )
}

export default NoteItem