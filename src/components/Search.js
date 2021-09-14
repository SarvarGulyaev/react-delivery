import React from 'react'
import { useState } from "react"


function Search({cb}) {

    const [value, setValue] = useState('')
    
    const handleKey = (e) => {
        if(e.key === 'Enter') {
            btnSearch()
        }
    }

    const btnSearch = () => {
        cb(value)
    }

    return (
        <div className="row">
           <div className="input-field col s12">
            <input type="text"
                placeholder="Search"
                onKeyDown={handleKey}
                onChange={(e) => setValue(e.target.value)}
                value={value}
                />
                <button style={{
                    position: 'absolute',
                    top: 0,
                    right: 10
                }} onClick={btnSearch} className="btn">Search</button>
           </div>
        </div>
    )
} 

export {Search}