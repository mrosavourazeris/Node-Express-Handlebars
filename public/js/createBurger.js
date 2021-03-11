$(document).ready(() => {
    const burgerButton = $(".btn")
    const createBurger = $("#createBurger")
    const changeButton = $(".changeButton")

    changeButton.on("click", (event) => {
        console.log(event.target)

        const id = event.target.getAttribute("data-id")
        const devour = event.target.getAttribute("data-newdevoured");
    
        const newDevourState = {
        devoured: devour === "0" ? 1: 0
        };
        changeBurger()
        location.reload()
    
        // Send the PUT request.
        function changeBurger (){
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: newDevourState
            }).then(function(data) {

            }).catch((err) => {
                console.log(err)
                throw err
            })
        }

    })

    burgerButton.on("click", (event) => {
        event.preventDefault()
        const newBurger = createBurger.val().trim()
        makeBurger()
        location.reload()
        function makeBurger(){
            $.post("/api/burgers", {
                newBurger: newBurger
            }).then( function (){
                console.log("new burger added!");
            }).catch((err) => {
                console.log(err);
                throw err;
            });
        }
    })

})