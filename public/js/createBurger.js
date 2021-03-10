$(document).ready(() => {
    const burgerButton = $(".btn")
    const createBurger = $("#createBurger")
    const changeButton = $(".changeButton")

    // console.log(burgerButton)

    changeButton.on("click", (event) => {
        console.log(event.target)
        // event.preventDefault()
        // console.log("Change button works!")
        const id = event.target.getAttribute("data-id")
        const devour = event.target.getAttribute("data-newdevoured");
        // console.log(devour)
    
        const newDevourState = {
        devoured: devour === "0" ? 1: 0
        };
        changeBurger()
        location.reload()
        // console.log(newDevourState)
    
        // Send the PUT request.
        function changeBurger (){
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: newDevourState
            }).then(function(data) {
                // console.log(data)
                // console.log("changed devoured to", devour);
                // Reload the page to get the updated list
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
        // console.log(newBurger)
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