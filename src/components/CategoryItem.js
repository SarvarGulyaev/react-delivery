import { CategoryList } from "./CategoryList"
import React from 'react'

function CategoryItem(props) {
    
    const {catalog} = props
    
    return (
        <div className="cards">
            {
                catalog.map((item) => {
                    return <CategoryList key={item.idCategory} {...item} />
                })
            }
        </div>
    )
}

export {CategoryItem}