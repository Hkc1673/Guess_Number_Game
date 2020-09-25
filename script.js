let  btn  = document.getElementById("btn");
let output = document.getElementById("outputtext");

let number = [Math.floor(Math.random() * 101)];     
let counter = 0
btn.addEventListener("click", function(){
    let input = document.getElementById("userinput").value;
    counter += 1;
    if (input == number){
        output.innerHTML = `You guessed right, your number was: ${number}`
        document.getElementById("counter").innerHTML = "This is your test number:" + counter;
        document.getElementById("userinput").value='';
        counter = 0
    } else if (input < number){
        output.innerHTML = "You guessed too low!"
        document.getElementById("counter").innerHTML = "This is your test number:" + counter;
    };
    if (input > number){
        output.innerHTML = "You guessed too high!"
        document.getElementById("counter").innerHTML = "This is your test number:" + counter;
    }
    if (counter == 10){
        output.innerHTML = "Game Over! Try again..."
        document.getElementById("userinput").value='';
        counter = 0
    }

});