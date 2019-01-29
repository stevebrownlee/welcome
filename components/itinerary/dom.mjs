const restEl = document.querySelector("#itinerary__restaurant")

const itineraryManager = {
    restaurant: {
        render: id => {
            const restName = document.querySelector(`.restaurant__name--${id}`).textContent
            restEl.textContent = restName
        }
    }
}

export default itineraryManager