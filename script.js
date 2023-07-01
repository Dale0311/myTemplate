let openModal = document.querySelector("#openModal");
console.log(openModal);
openModal.addEventListener("click", ()=>{
    let modal = document.querySelector("#modal");
    let overlay = document.querySelector("#overlay");

    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
})