


// on load fetch api and update values in project items
window.addEventListener("load", () =>{
    fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
    .then((response) => response.json())
    .then((data) => {
        const items = document.querySelectorAll("#projects-items")
        items.forEach((item, index) =>{
            item.querySelector("img").src = data[returnIndex(data, "uuid", index + 1)].image
            item.querySelectorAll("p")[0].innerText = data[returnIndex(data, "uuid", index + 1)].name
            item.querySelectorAll("p")[1].innerText = data[returnIndex(data, "uuid", index + 1)].description
        })
    })
})

// return index of item position, for example return index of specific uuid
const returnIndex = (searchArray, itemKey, id) => {
    for(let i = 0; i < searchArray.length; i++){
        console.log(searchArray[i][itemKey])
        if(searchArray[i][itemKey] === id.toString()){
            return i;
        }
    }
}
