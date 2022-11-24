'use strict';

const button = document.getElementById("Submit");
const rate_parent = document.getElementById("rate-parent");
const rating_state = document.getElementById("rating");
const thanks_state = document.getElementById("thanks_state");
const desired_rate = document.getElementById("desired-rate");
const values = Array.from(rate_parent.children);
const orange = "hsl(25, 97%, 53%)";
const Dark_blue = "hsl(213, 19%, 18%)";
const Medium_gray = "hsl(216, 12%, 54%)";
const selected = "selected"
let result;
let selection_counter = 0;

button.addEventListener("click", function(){
    rating_state.style.display = "none";
    thanks_state.style.display = "block";
    get_the_selected_rate();
});
function get_the_selected_rate() {
    values.forEach(rate => {
        if(rate.className == selected){
            desired_rate.innerText = rate.innerText;
        }
    });
}
function delete_unwanted_selections() {
    values.forEach(rate =>{
        if(rate.className == selected){
            rate.style.background = Dark_blue;
            rate.className = "";
            desired_rate.innerText = "";
        }
    });
}

values.forEach(rate => {
    console.log(rate.className)
    rate.addEventListener("click", function(event){
        event.preventDefault();
    switch (rate.className) {
        case "selected":
            rate.style.background = Dark_blue;
            rate.className = ""
            desired_rate.innerText = ""
            break;
        default:
            delete_unwanted_selections();
            rate.style.background = Medium_gray;
            rate.className +=selected;
            break;
            }
            });
        });