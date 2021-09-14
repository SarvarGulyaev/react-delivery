import { useParams, useHistory } from "react-router"
import { useState, useEffect } from "react"
import { Preloader } from "../components/Preloader"
import { getFilteredCategory } from "../api"
import { MealItem } from "../components/MealItem"


function Category(props) {

    const {goBack} = useHistory()

    const [meals, setMeals] = useState([])
    const {name} = useParams()


    useEffect(() => {
        getFilteredCategory(name)
        .then(data => setMeals(data.meals))
    }, [name])

    return (
        <div>
            <button onClick={goBack} className="btn">Back</button>
            {
                !meals.length ? <Preloader /> : <MealItem meal={meals} />
            }
        </div>
    )
}

export {Category}