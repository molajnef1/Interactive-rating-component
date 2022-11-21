var button = document.getElementById("Submit");
var rate_parent = document.getElementById("rate-parent");
var values = Array.from(rate_parent.children);
console.log(rate_parent)
console.log(values)

button.addEventListener("click", function(){
    console.log("Coucou")
});



    values.forEach(rate => {
        console.log(rate)
        rate.addEventListener("click", function(){
            console.log(rate.textContent)
        });
    });
