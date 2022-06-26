const btnRating = document.querySelectorAll(".btn-rating");
const rating1 = document.querySelector("#rating1");
const rating2 = document.querySelector("#rating2");
const rating3 = document.querySelector("#rating3");
const rating4 = document.querySelector("#rating4");
const rating5 = document.querySelector("#rating5");
const submit = document.querySelector(".btn-submit");
const result = document.querySelector(".result-number"); 
const card = document.querySelector(".card"); 
const thanks = document.querySelector(".thanks"); 
var ratingSelected = 0;
var selected = 0;


submit.addEventListener("click", function() {

    if (selected == 1) {
    console.log (ratingSelected);
    result.innerHTML = ratingSelected;
    card.classList.add("hide");
    thanks.classList.remove("hide");
    }
    else {
        console.log ("No elegido");
        submit.classList.add("greyed");
        setTimeout(() => {  submit.classList.remove("greyed"); }, 500);
        
    }

});

for (let i = 0; i < 5; i++) {
    
    btnRating[i].addEventListener("click", function() {
        
        btnRating[0].classList.remove("rating-selected");
        btnRating[1].classList.remove("rating-selected");
        btnRating[2].classList.remove("rating-selected");
        btnRating[3].classList.remove("rating-selected");
        btnRating[4].classList.remove("rating-selected");
        btnRating[i].classList.toggle("rating-selected");
        ratingSelected = btnRating[i].innerHTML;
        console.log(ratingSelected);
        selected = 1;
    });
    console.log(ratingSelected);
};

console.log("----");
console.log(ratingSelected);
