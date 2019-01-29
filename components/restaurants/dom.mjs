const restaurantOutputEl = document.querySelector("#output")

const restaurantDom = {
    clear: () => restaurantOutputEl.innerHTML = "",
    create: rest => `
        <section class="restaurant" id="restaurant--${rest.id}">
            <header class="restaurant__header">
                <h1 class="restaurant__name--${rest.id}">${rest.name}</h1>
            </header>
            <main class="restaurant__details">
                <div class="restaurant__cuisines">${rest.cuisines}</div>
                <div class="restaurant__address">${rest.location.address}</div>
                <button class="button button--restaurant" id="addRestaurant--${rest.id}">Add to itinerary</button>
            </main>
        </section>
    `,
    render: html => restaurantOutputEl.innerHTML += html,
    renderAll: restaurantArray => {
        for (const item of restaurantArray) {
            const html = restaurantDom.create(item.restaurant)
            restaurantDom.render(html)
        }
    }
}

export default restaurantDom
