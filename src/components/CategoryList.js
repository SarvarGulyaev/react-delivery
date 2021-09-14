import { Link } from "react-router-dom"


function CategoryList(props) {

    const {strCategory, strCategoryThumb, strCategoryDescription} = props


    return (
        <div className="card">
        <div className="card-image">
          <img src={strCategoryThumb} alt={strCategory} />
        </div>
        <div className="card-content">
          {strCategoryDescription.slice(0, 60)}
        </div>
        <Link className="btn" to={`/category/${strCategory}`}>Watch category</Link>

        <div className="card-action">
          <span className="card-title">{strCategory}</span>
        </div>
      </div>
    )
}

export {CategoryList}