const toggleButton = document.getElementById('toggle-button');
const navilist = document.getElementById('navi-list');
toggleButton.addEventListener('click', () => {
    console.log(navilist);
    navilist.classList.toggle('active');
})