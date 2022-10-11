// set initial count value
let count = 0

/* look at dom and select count and buttons (instead of selecting buttons one by one via their class,
we select all buttons at once as an array and loop a function over that array) */
//let countValue = document.querySelector("#countText")   <<--don't need this line i guess lol
let btns = document.querySelectorAll('.click')


//for each item in the btns array, run the function orange(placeholder for btn, works)
btns.forEach(function(orange){
//function orange adds a smurf to itself that listens for a click and runs function(event) when clicked
    orange.addEventListener('click', function(e){
//the thing my click event happens on, get that class list and put it in a styles variable
        let styles = e.currentTarget.classList;
//if styles contains a class for decrease, decrement the count
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        }else {
            count = 0;
        }
//update the count value        
        countText.innerText = count;

        //conditional formatting for positive/negative
        if(count < 0){
            countText.style.color = "#D22B2B";
        } else if (count > 0){
            countText.style.color = "#4CBB17";
        } else {
            countText.style.color = "black";
        }


    })
})