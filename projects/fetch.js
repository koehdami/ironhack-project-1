
// fetch id based on div id
const fetchAPI = async () =>{
    const response = await fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects");
    const data = await response.json()
    const id = document.querySelector(".id-holder").id
    if(data){
        for (const entry of data) {
            if (entry.uuid === id) {
                return entry;
            }
        }
    }
}

// make return btn work
const returnBtn = (btn) =>{
    btn.addEventListener("click", ()=>{
        location.href = "../index.html"
    })
}


// add btn function and text
document.addEventListener("DOMContentLoaded", async () =>{
    returnBtn(document.querySelector(".btn-return"))
    const values = ["name", "description", "content"]
    const fetchArray = await fetchAPI()
    document.title = fetchArray["name"]
    const items = [...document.querySelector(".item-parent").children]
    for (let i = 0; i < items.length - 1; i++){
        items[i].innerHTML = fetchArray[values[i]];
    }
})