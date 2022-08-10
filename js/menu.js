const navigation = qS('.navigation')
const show = qS('.button-menu')
const showdropdown = qS('.dropdown')
const icondropdown = qS('.icon-dropdown-menu')
navigation.addEventListener('click', e => {
    if(e.target.tagName === "DIV" && e.target.classList.contains('navigation')) {
        navigation.classList.toggle('show-menu')
    }
})
showdropdown.addEventListener('click', e => {
    if(e.target.tagName === "SPAN" && e.target.classList.contains('menu-link')) {
        showdropdown.children[1].classList.toggle('show-dropdown')
        icondropdown.classList.toggle('icon-dropdown-rotate')
    }
})
show.addEventListener('click', () => {
        navigation.classList.toggle('show-menu')
})

/* const scrollProgressBar = () =>{
    const sizeHeightBody = document.documentElement.clientHeight
    let scrollHeight = document.documentElement.scrollHeight
    let scrollTop = document.documentElement.scrollTop

    let windowHeight = scrollHeight - sizeHeightBody
    let percent = scrollTop / windowHeight * 100
    if(percent < 20){
        qS('.scroll-progressbar').style.background = "#F24E59";
    } else if(percent < 50) {
        qS('.scroll-progressbar').style.background = "#e5a638";
    } else {
        qS('.scroll-progressbar').style.background = "#1192ee";        
    }
    
    qS('.scroll-progressbar').style.width = percent + "%";
}
window.addEventListener('scroll', scrollProgressBar) */