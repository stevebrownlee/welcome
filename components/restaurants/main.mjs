import DOMManager from "./dom.mjs"
import searchRestaurants from "./api.mjs"
import itineraryManager from "../itinerary/dom.mjs"

const searchEl = document.querySelector("#zomato")

const EventsManager = {
    init: () => {
        document.querySelector("#output").addEventListener("click", event => {
            const eventId = event.target.id
            if (eventId.startsWith("addRestaurant--")) {
                const restId = eventId.split("--")[1]
                itineraryManager.restaurant.render(restId)
            }
        })

        document.querySelector("#searchZomato").addEventListener("click",
            event => {
                DOMManager.clear()
                searchRestaurants(searchEl.value).then(DOMManager.renderAll)
           }
       )
   }
}

export default EventsManager