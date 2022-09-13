//COUNTDOWN EXERCISE

// function countDown(time) {
//     let timer = setInterval(function() {
//         time--; 
//         if(time <= 0) {
//             clearInterval(timer);
//             console.log("DONE!");
//         }
//         else {
//             console.log(time);
//         }
//     }, 1000)
// }

//RANDOM GAME


function randomGame() {
    //selects random number between 0 and 1

    //Counter increases by 1 when a random number is picked
    let counter = 0;
    let timer = setInterval(function() {
        let num = Math.random(); 
        counter++;
        if(num > 0.75) {
            clearInterval(timer);
            console.log("It took " + counter + " times before we found a number above 0.75")
        }
    }, 1000)
}

 