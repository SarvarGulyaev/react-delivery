import React from 'react'
import { useState, useEffect } from "react"
import { useLocation, useHistory } from "react-router"
import { getAllCategories } from "../api"
import { Preloader } from "../components/Preloader"
import {Search} from '../components/Search'

import { CategoryItem } from "../components/CategoryItem"

function Home() {

    const {goForward} = useHistory()

    const [catalog, setCatalog] = useState([])
    const [filterCatalog, setFilterCatalog] = useState([])

    const { pathname, search } = useLocation()
    const { push } = useHistory()

    console.log(search);
    console.log(pathname, 'path');
    const handleSubmit = (str) => {
        setFilterCatalog(
            catalog.filter((item) => {
                return item.strCategory.toLowerCase().includes(str.toLowerCase())
            })
        )
        push({
            pathname,
            search: `?search=${str}`
        })
    }

    useEffect(() => {
        getAllCategories()
        .then((data) => {
            setCatalog(data.categories)
            setFilterCatalog(search ? data.categories.filter(item => item.strCategory.toLowerCase().includes(search.toLowerCase().split('=')[1])) 
            : data.categories
            )
        })
    }, [search])

    return (
        <div>
            <Search cb={handleSubmit} />
            <button onClick={goForward} className="btn">Forward</button>
            
            {
                !catalog.length ? <Preloader /> : <CategoryItem catalog={filterCatalog} />
            }
        </div>
    )
}

export {Home}