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

//async function to simulate adding an item(could be extendended to real async task)
async function addItem(itemText){
    try{
        //simulate an async opperation(e.x(server reques with a delay))
        await new Promise(
            (resolve)=>setTimeout(resolve,500)
        )
        //create a new list item element
        const itemDiv = document.createElement("div")
        itemDiv.classList.add("item")
        itemDiv.textContent = itemText;
        //assign a random backgound color for UI effect
        itemDiv.style.backgroundColor = getRandomColor();
        listContainer.appendChild(itemDiv)

        //update item counter
        initialItemCount++
        updateItemCount()
    }

    catch(error){
        //log the error and display a user freindly message
        console.error("error adding item:", error)
        showError("An error occured while adding the item. Please try again...")
    }

    
}

//function to show error message
function showError(message){
    errorMsg.textContent = message
    errorMsg.style.display = "block"
    setTimeout(()=>{
        errorMsg.style.display = "none"
    }, 3000)
    
}

//handle form submission

form.addEventListener("submit", async(event)=>{
    event.preventDefault();
    const itemText = itemInput.value.trim();

    //validate input
    if(!itemText){
        showError("You have to enter at least 1 item.")
        return;
    }
    
    //add the item asynchronously

    await addItem(itemText)

    //clear the input feild

    itemInput.value = "";
})

//handle randomizing colors of all items
changeColors.addEventListener("click", ()=>{
    const items = document.querySelectorAll(".item")
    items.forEach(item=>{
        item.style.backgroundColor = getRandomColor();
    })
})








