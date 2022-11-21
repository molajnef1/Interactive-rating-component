var button = document.getElementById("Submit");
var rate_parent = document.getElementById("rate-parent");
var rating_state = document.getElementById("rating");
var thanks_state = document.getElementById("thanks_state");
var desired_rate = document.getElementById("desired-rate");
var values = Array.from(rate_parent.children);
var orange = "hsl(25, 97%, 53%)";
var Dark_blue = "hsl(213, 19%, 18%)";
var Medium_gray = "hsl(216, 12%, 54%)";
var id = "selected"
var result;

button.addEventListener("click", function(){
    rating_state.style.display = "none";
    thanks_state.style.display = "block";
    desired_rate.innerText = result;
});



    values.forEach(rate => {
        console.log(rate.className)
        rate.addEventListener("click", function(){
           /* result = rate.textContent;
            rate.style.background = orange;
            rate.className += id;*/

            switch (rate.className) {
                case "selected":
                    rate.style.background = Dark_blue
                    rate.className = ""
                    result = "";
                    break;
                default:
                    result = rate.textContent;
                    rate.style.background = Medium_gray;
                    rate.className += id;
                    break;
            }
            });
        });
