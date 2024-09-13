// FIREBASE SETUP
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-526cb-default-rtdb.europe-west1.firebasedatabase.app/"
}

// VARIABLE SECTION
const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")
const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")


//EVENTLISTENER SECTION
addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    push(shoppingListInDB, inputValue)

    clearInputFieldEl()
    
    appendItemToShoppingListEl(inputValue)
})


// FUNCTION SECTION
function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToShoppingListEl(itemValue) {
    shoppingListEl.innerHTML += `<li>${itemValue}</li>`
}