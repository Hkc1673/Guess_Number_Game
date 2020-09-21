let  btn  = document.getElementById("btn");
let output = document.getElementById("outputtext");

let number = [Math.floor(Math.random() * 101)];     // returns a random integer from 0 to 100
let counter = 0
btn.addEventListener("click", function(){
    let input = document.getElementById("userinput").value;
    counter += 1;
    if (input == number){
        output.innerHTML = `You guessed right, your number was: ${number}`
        document.getElementById("counter").innerHTML = "This is your test number:" + counter;
    } else if (input < number){
        output.innerHTML = "You guessed too low!"
        document.getElementById("counter").innerHTML = "This is your test number:" + counter;
    };
    if (input > number){
        output.innerHTML = "You guessed too high!"
        document.getElementById("counter").innerHTML = "This is your test number:" + counter;
    }
    if (counter == 5){
        output.innerHTML = "Game Over! Try again..."
        counter = 0
        document.getElementById("counter").innerHTML = "This is your test number:" + counter;
    }
    return
});
