//sidebar starts
const sidebar = document.querySelector('.sidebar');

const showSidebar = document.querySelector('#showSidebar');
const hideSidebar = document.querySelector('#hideSidebar');

showSidebar.addEventListener('click', function (e) {
    sidebar.style.display = "flex";
})

hideSidebar.addEventListener('click', function (e) {
    sidebar.style.display = "none";
})