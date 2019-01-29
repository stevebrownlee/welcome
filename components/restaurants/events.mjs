import DOMManager from "./dom.mjs"
import searchRestaurants from "./api.mjs"

const searchEl = document.querySelector("#zomato")

const EventsManager = {
    init: () => {
        document.querySelector("#searchZomato").addEventListener("click",
            event => {
                DOMManager.clear()
                searchRestaurants(searchEl.value).then(DOMManager.renderAll)
           }
       )
   }
}

export default EventsManager