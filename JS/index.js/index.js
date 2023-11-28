function addition() {
    var res = 5 + 6;
    alert(res);
}

document.querySelector("h1").addEventListener("click",callAction);

function callAction(){
    document.getElementsByTagName("h1")[0].
    innerHTML = "goodbye pals.";

    var specials = document.getElementsByClassName("special");
    for (i = 0; i < specials.length; i++)
        specials[i].innerHTML = "<b>Have a wonderful day!! </b>";
    document.getElementById("first").
    innerHTML = "Im the one";

    var liElements = document.querySelectorAll(".list li");
    for (i = 0; i < liElements.length; i++){
        liElements[i].style.color ="green";
    } 

    document.querySelector(".list #first").classList.add("highlight");

    document.querySelector("a").setAttribute("href", "https://www.google.com");
    $("h1").text("JQuery rocks");
    $(".special").addClass("highlight");
    $("a").attr("http://up.edu.mx");
    $("li").click((e));



}