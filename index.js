var message = document.getElementById("message")
var count = document.getElementById("count")
var warning = document.getElementById("warning")

var max = 200 

message.addEventListener("input", function(){
    updateCounter()
})


function updateCounter(){
    var length = message.value.length
    if (length > 200) {
        message.value = message.value.slice(0,200)
        length=max
        warning.style.display = "inline"
    }
    else{
        warning.style.display = "none"
    }

    count.textContent = length + "/"  + max + "characters"

}
