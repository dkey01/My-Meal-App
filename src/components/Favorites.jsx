import { useGlobalContext } from "../context"

const Favorites = () => {
    const {favorites, selectMeal, removeFromFavorites} = useGlobalContext()
    return <section className="favorites">
      <div className="favorite-content">
        <h5>Favorites</h5>
        <div className="favorite-container">
            {favorites.map((item)=>{
                const {idMeal, strMeal:title, strMealThumb:image} = item;

        return <div key={idMeal} className="favorite-item">
            <img src={image} alt={title}className="favorite-img img"onClick={()=>selectMeal(idMeal, true)}/>
            <button className="remove-btn" onClick={()=>removeFromFavorites(idMeal)}>remove</button>
            
            </div>
            })}
        </div>
      </div>
    </section>
}

export default Favorites