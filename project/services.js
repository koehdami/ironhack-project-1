document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector('input[type="name"]');
    const submitBtn = document.querySelector(".submit-btn")
    submitBtn.addEventListener("click", (e) =>{
        if(input.value === ""){
            alert("Please enter a name!")
            e.preventDefault()
        }
    })
})