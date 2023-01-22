var keys = document.getElementsByTagName("button")
// let display_input = document.getElementsByClassName("input")
// let display_output = document.getElementsByClassName("output")
let operator = document.getElementsByClassName("operator")
var input = ""
console.log(document.getElementsByClassName('operator').innerText)
console.log(document.getElementsByClassName('operator').value)


Array.from(keys).forEach((key) => {
    key.addEventListener('click', (e) => {
        if (e.target.id == "clear") {
            console.log("la")
            input = ""
        } else {
            input = input + e.target.innerHTML
            operator.innerText = input
            console.log(input)
            console.log(operator.innerText)
        }
    })
})


