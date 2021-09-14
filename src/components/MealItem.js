import { MealList } from "./MealList"

function MealItem(props) {

    const {meal} = props

    return (
        <div className="cards">
           {
                meal.map((item) => {
                    return <MealList key={item.idMeal} {...item} />
                })
           }
        </div>
    )
}

export {MealItem}