// As variable can change so we are using let here
let cart = []

// Over here we are selecting all the add to cart buttons 
const button = document.querySelectorAll(".add-to-cart")

// we are using loop to add event listener to all the buttons, so that we can handle each items
button.forEach((btn) =>{
    btn.addEventListener("click", function(){

        const itemsCards = btn.closest(".item")
        
    })
} )