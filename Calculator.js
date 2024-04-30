let screen = document.getElementById("screen");

// screen.value = ;
// let button = document.getElementsByTagName("input")[1].addEventListener("click", function(){
// screen.value += document.getElementsByTagName("input")[1].value
// });




for (let i = 3; i <= 19; i++){
    let button = document.getElementsByTagName("input")[i].addEventListener("click", function(){
        screen.value += document.getElementsByTagName("input")[i].value
        });
}

    // Code for Equal button

document.getElementsByTagName("input")[20].addEventListener("click", function(){
    screen.value = eval(screen.value);
    });


    // Code for AC button

document.getElementsByTagName("input")[1].addEventListener("click", function(){
        screen.value = "";
        });

    // code for DEL Button
document.getElementsByTagName("input")[2].addEventListener("click", function(){
        screen.value = screen.value.toString().slice(0, -1);
        });
