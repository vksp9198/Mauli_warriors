//sidebar starts
// const sidebar = document.querySelector('.sidebar');

// const showSidebar = document.querySelector('#showSidebar');
// const hideSidebar = document.querySelector('#hideSidebar');

// showSidebar.addEventListener('click', function (e) {
//     sidebar.style.display = "flex";
// })

// hideSidebar.addEventListener('click', function (e) {
//     sidebar.style.display = "none";
// })





const udev = document.querySelectorAll(".ud");
console.log(udev, "ud clicked")
udev.forEach((box) => {
    box.addEventListener("click", function () {
        alert("This service is currently under development and will be available soon. Thank you for your patience.");
    })
});




