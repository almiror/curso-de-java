const navigation = qS('.content-navigations-aside')
const show = qS('.button-menu')
const showdropdown = qS('.menu-aside')
const icondropdown = qS('.icon-dropdown-menu')
const closeAutoMenu = qS('.menu-aside')

navigation.addEventListener('click', e => {
    if(e.target.tagName === "DIV" && e.target.classList.contains('content-navigations-aside')) {
        navigation.classList.toggle('aside-open')
    }
})
show.addEventListener('click', () => {
        navigation.classList.toggle('aside-open')
})

showdropdown.addEventListener('click', e => {
    if(e.target.tagName === "SPAN" && e.target.classList.contains('menu-link-aside')) {
        const shows = e.target.parentNode.children[1]
        const dropdown = e.target.children[0]
        
        const asidesItems = document.querySelectorAll('.show-subemnuaside')
        asidesItems.forEach(element => {
            element.classList.remove('show-subemnuaside')
            dropdown.classList.remove('icon-dropdown-rotate')
        });
        const icons = document.querySelectorAll('.icon-dropdown-rotate')
        icons.forEach(element => {
            element.classList.remove('icon-dropdown-rotate')
        });
        shows.classList.add('show-subemnuaside')
        dropdown.classList.add('icon-dropdown-rotate')
    }
    if(e.target.tagName === "A" && e.target.classList.contains('submenu-link-aside')) {
        const asidesItems = document.querySelectorAll('.submenu-link-aside')
        asidesItems.forEach(element => {
            element.classList.remove('actives-items')
        });
        e.target.classList.add('actives-items')
    }
})

let  mediaqueryAside = window.matchMedia("(max-width: 640px)");
mediaqueryAside.addListener(EventoMediaQueryList => {
    closeAutoMenu.addEventListener('click', e => {
        if(e.target.classList.contains('submenu-link-aside') && e.target.tagName === "A"){
            navigation.classList.toggle('aside-open')
        }
    })
});