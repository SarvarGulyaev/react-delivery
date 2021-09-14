import { Link } from "react-router-dom"

function MealList(props) {

    const {strMeal, strMealThumb, idMeal} = props

    return (
        <div className="card">
        <div className="card-image">
          <img src={strMealThumb} alt={strMeal} />
        </div>
        <Link className="btn" to={`/meal/${idMeal}`}>Watch recipe</Link>

        <div className="card-action">
          <span className="card-title">
            <h5>{strMeal}</h5>
          </span>
        </div>
      </div>
    )
}

export {MealList}