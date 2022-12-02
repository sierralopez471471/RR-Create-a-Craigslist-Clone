import React from 'react'
import Posting from './Posting'
import {postings} from './postings.js'

function Gallery(props) {
    console.log(postings)
    return (
        <div>
            <h1>Gallery</h1>
            {postings.map((e, i) => {
                return <Posting data={e} key={i}/>
            })}
        </div> 
    )
}

export default Gallery