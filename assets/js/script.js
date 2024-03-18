// Parallax
let text = document.getElementById('text');
let stars = document.getElementById('stars');
let stars2 = document.getElementById('stars2');
let moon = document.getElementById('moon');
let grave = document.getElementById('grave');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let gateLeft = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    stars.style.bottom = value + 0.05 + 'px';
    moon.style.bottom = value + 0.01 + 'px';
    treeLeft.style.left = value * -0.5 + 'px';
    treeRight.style.left = value * 0.5 + 'px';
    gateLeft.style.left = value * 0.4 + 'px';
    gateRight.style.left = value * -0.4 + 'px';
    text.style.right = -130 + value * 0.6 + '%';
    text.style.bottom = 100 + value * 0.01 + '%';
    
})

// Toggle class active
const navigation = document.querySelector('.navigation');
document.querySelector('#hamburger-menu').onclick = () => {
    navigation.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navigation.contains(e.target)) {
        navigation.classList.remove('active');
    }
})