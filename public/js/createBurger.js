$(document).ready(() => {
    const burgerButton = $(".btn")
    const createBurger = $("#createBurger")

    console.log(burgerButton)

    burgerButton.on("submit", (event) => {
        event.preventDefault()
        const newBurger = createBurger.html().trim()
        console.log(newBurger)
    })

})