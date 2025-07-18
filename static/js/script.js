const profile = document.querySelector('.profile-icon');
const menu = document.getElementById("logout-menu");

profile.addEventListener("click" , function(event) {
    menu.classList.toggle("logout-visible");
    window.addEventListener("click", function (e) {
        menu.classList.toggle("logout-hidden");
    })
    
})


