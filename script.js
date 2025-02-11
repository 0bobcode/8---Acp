//selecting DOM elemnts
const form = document.getElementById("shoppingform")
const itemInput = document.getElementById("item-input")
const errorMsg = document.getElementById("error-msg")
const listContainer = document.getElementById("list-container")
const totalItemCount = document.getElementById("item-count")
const changeColors = document.getElementById("change-colors")

//counter for total items
let initialItemCount = 0

//function to update the displayed item count
function updateItemCount(){
    totalItemCount.textContent = initialItemCount

}

//utility: generate a random hex color code
function getRandomColor(){
    return "#" + Math.floor(Math.random()*16777215).toString(16).padEnd(6,"0")
}

console.log(getRandomColor())