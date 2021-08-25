var Keys = " "

function Intro(){
 
    alert("Welcome to Keyboard Testing \n Here we can test any kind of key of the english keyboard \n First you need to do is press anykey you like \n Then something like this will appear and sya which type of key you pressed eg numbers, other \n and what the key represent also will appear under the Picture \n\n Thank you")

}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keycode;
    console.log(keyPressed);
    if (keyPressed >= 97 && keyPressed <= 122){
        alphebetkey();
        document.getElementById("Key").innerHTML = "You clicked a lower case alphabet key";
        console.log("alphebet key");
        console.log(keyPressed);
    }
    if (keyPressed >= 65 && keyPressed <= 90){
        alphebetkey();
        document.getElementById("Key").innerHTML = "You clicked an upper case alphabet key";
        console.log("alphebet key");
        console.log(keyPressed);
    }
    if (keyPressed >= 48 && keyPressed <= 57){
        numberkey();
        document.getElementById("Key").innerHTML = "You clicked a Number key";
        console.log("Number key");
        console.log(keyPressed); 
    }
    if (keyPressed >= 37 && keyPressed <= 40){
       arrowkey();
        document.getElementById("Key").innerHTML = "You clicked an arrow key";
        console.log("arrow key");
        console.log(keyPressed); 
    }
    if (keyPressed == 17 && keyPressed == 18 && keyPressed == 27 ){
        specialkey();
        document.getElementById("Key").innerHTML = "You clicked a special key";
        console.log("alphebet key") ;
        console.log(keyPressed);
    }

}
alphebetkey()
{
document.getElementById("keyImg").src = "Alpkey.png";
}
arrowkey()
{
    document.getElementById("keyImg").src = "Arrkey.png";
    }
    numberkey()
    {
        document.getElementById("keyImg").src = "numkey.png";
        }
        specialkey()
        {
            document.getElementById("keyImg").src = "spkey.png";
            }

