$(document).ready(() => {
    const burgerButton = $(".btn")
    const createBurger = $("#createBurger")

    // console.log(burgerButton)

    burgerButton.on("click", (event) => {
        event.preventDefault()
        const newBurger = createBurger.val().trim()
        makeBurger()
        // console.log(newBurger)
        function makeBurger(){
            $.post("/api/burgers", {
                newBurger: newBurger
            }).then( function (){
                console.log("new burger added!");
                location.reload()
            }).catch((err) => {
                console.log(err);
                throw err;
            });
        }
    })

})