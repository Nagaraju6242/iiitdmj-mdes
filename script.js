/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
var cards = document.querySelectorAll("card_link");

function myFunction() {
    var icon = document.querySelector(".topnav .icon i");
    var collap = document.querySelector(".collap");
    if(collap.style.display == "none" || collap.style.display == ""){
        collap.style.display = "flex";
        icon.className = "fa fa-times";
    }
    else{
        collap.style.display = "none";
        icon.className = "fa fa-bars";
    }
}

function remove(){
    var icon = document.querySelector(".topnav .icon i");
    var collap = document.querySelector(".collap");
    collap.style.display = "none";
    icon.className = "fa fa-bars";
}

function change(x){
    var cards = document.querySelectorAll(".card");
    var card_links = document.querySelectorAll(".card_link");
    var cards_ux = document.querySelectorAll(".card.interaction");
    var cards_industrial = document.querySelectorAll(".card.industrial");
    var cards_research = document.querySelectorAll(".card.research");
    for(var i=0;i<cards.length;i++){
        cards[i].classList.remove("show");
    }
    for(var i=0;i<4;i++){
        card_links[i].classList.remove("card_active");
        card_links[i].classList.remove("card_active_interaction");
        card_links[i].classList.remove("card_active_industrial");
        card_links[i].classList.remove("card_active_research");
    }
    if(x == "all"){
        for(var i=0;i<cards.length;i++){
            cards[i].classList.add("show");
        }
        card_links[0].classList.add("card_active");
    }
    if(x == "interaction"){
        for(var i=0;i<cards_ux.length;i++){
            cards_ux[i].classList.add("show");
        }
        card_links[1].classList.add("card_active_interaction");
    }
    if(x == "industrial"){
        for(var i=0;i<cards_industrial.length;i++){
            cards_industrial[i].classList.add("show");
        }
        card_links[2].classList.add("card_active_industrial");
    }
    if(x == "research"){
        for(var i=0;i<cards_research.length;i++){
            cards_research[i].classList.add("show");
        }
        card_links[3].classList.add("card_active_research");
    }
}

var topnav = document.querySelector(".topnav");
document.body.onscroll = function(){
    if(window.scrollY == 0){
        topnav.classList.remove("shadow");
    }
    else{
        topnav.classList.add("shadow");
    }
}
