const chargement = document.querySelector('.chargement');

window.addEventListener('load',fin);
function fin(){
    chargement.classList.add('finchargement');
    chargement.style.display='none';
};

const iconmenu = document.querySelector('.iconmenu')
const iconmenuImg = document.querySelector('.iconmenu img')
const dropdownmenu = document.querySelector('.dropdown')

iconmenu.onclick = function(){
    dropdownmenu.classList.toggle('open')
}
