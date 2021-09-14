import { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router"
import { Preloader } from "../components/Preloader"
import { getMealById } from "../api"

function Recipe() {

    const [recipe, setRecipe] = useState({})

    const {goBack} = useHistory()

    const {id} = useParams()

    useEffect(() => {
        getMealById(id)
        .then((data) => {
            return setRecipe(data.meals[0])
        })
    }, [id])


    return (
        <div>
            {
                !recipe.idMeal
                ? <Preloader />
                : (
                    <div className="recipe">
                        <div className="name">
                            <h3>{recipe.strMeal}</h3>
                       </div>
                       <div className="img">
                        <img className="img" src={recipe.strMealThumb} alt={recipe.strMeal} />
                       </div>
                      {
                          recipe.strArea 
                          ? (
                            <div className="block">
                            <div className="category">
                                 Category: <h4>{recipe.strCategory}</h4>
                             </div>
                             <div className="area">
                                 Area: <h4>{recipe.strArea}</h4>
                             </div>
                            </div>
                          ) : (
                            <div className="category category__only">
                            Category: <h4>{recipe.strCategory}</h4>
                        </div>
                          )

                      }
                       <h3 className="word"> Instructions:</h3>
                       <div className="text">
                           {recipe.strInstructions}
                       </div>
                       <table className="table centered">
        <thead>
          <tr>
              <th>Ingredient</th>
              <th>Measure</th>
          </tr>
        </thead>

        <tbody>
         {
             Object.keys(recipe).map((key) => {
                 if(key.includes('Ingredient') && recipe[key]) {
                    return (
                        <tr key={key}>
                            <td>
                                {
                                    recipe[key]
                                }
                            </td>
                            <td>
                                {
                                    recipe[`strMeasure${key.slice(13)}`]
                                }
                            </td>
                        </tr>
                    )
                 }

                 return null

             })
         }
        </tbody>
      </table>
                      {
                          recipe.strYoutube
                          ? (
                             <div className="video">
                                 <h3>Video Recipe</h3>
                                 <iframe className="frame" src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} title="YouTube video player" allowFullScreen></iframe>
                             </div> 
                            ) : null
                      }
                    </div>
                )
            }
            <button onClick={goBack} className="btn">Back</button>
        </div>
    )
}

export {Recipe}