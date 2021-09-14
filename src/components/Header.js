import React from 'react'
import { Link } from "react-router-dom"


function Header() {
    return (
        <nav className="blue header darken-1">
            
                <div>
                    <h4> <Link to="/">Home</Link></h4>
                </div>
               
                <div >
                   <a href="https://yandex.ru" target="_blank" rel="noreferrer"><h4>SarvarGulyaev</h4></a>
                </div>
            
        </nav>
    )
}

export { Header }