# EDIT-THIS-README
1. load three pokemon
        -make html divs for instructions and images
            -hard code three images to test html setup
    -three new pokemon show up on the page (function)
        -genereate three random pokemon (Math.random)
        -check that they're unique (no ids are the same)(while loop)(logic)
        -if no, generate 3 more until they're unique
    -Incredment the seen property for all three pokemon
        -On load
        -For each of the three pokemon
            -use findItemById funciton
            -grab the object from localStorage and increment the seen property (getItem() function)
            -if they've not seen this pokemon before
            -initialize a new cart with a seen: 1 and caught: 0
            setItem() function
    -Onclick 
        -incredment the caught property of the clicked pokemon(incrementCaught())
        -if the user has done this 10 times, redirect to the results page
        (window.location)
        -otherwise, load 3 more REPEAT
    -Results page
        -clearCart()function