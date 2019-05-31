import DOM from "./dom.mjs"

const searchRestaurants = async query => {
    const baseURL = "https://developers.zomato.com/api/v2.1/search"
    const city = "entity_id=1138"
    const sort = "sort=rating"
    const type = "entity_type=city"

    const request = await fetch(`${baseURL}?${city}&${type}&start=first&${sort}&q=${query}`, {
        headers: {
            "Accept": "application/json",
            "user-key": "6f84aef0ac528e0cb5e716e3465de3f9"
        }
    })
    const results = await request.json()
    return results.restaurants
}

export default searchRestaurants