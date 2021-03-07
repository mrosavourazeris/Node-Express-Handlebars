$(document).ready(() => {
    const burgerButton = $(".btn")
    const createBurger = $("#createBurger")

    // console.log(burgerButton)

    $(function() {
        $(".change-devour").on("click", function(event) {
          var id = $(this).data("id");
          var newDevour = $(this).data("newdevoured");
      
          var newDevourState = {
            devoured: newDevour
          };
      
          // Send the PUT request.
          $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
          }).then(
            function() {
              console.log("changed sleep to", newDevour);
              // Reload the page to get the updated list
              location.reload();
            }
          );
        });

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