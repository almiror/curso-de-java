const tabNavigation = qS('.tab-navigation')
let tabItem = Array.prototype.slice.apply(qSAll('.tab-item'))
let tabContainer = Array.prototype.slice.apply(qSAll('.tab-container'))
tabNavigation.addEventListener('click', e => {
    if(e.target.tagName === "LI" && e.target.classList.contains('tab-item')) {
        let i = tabItem.indexOf(e.target)
        tabItem.map((tab) => tab.classList.remove('active-tab'));
        tabContainer.map((tab) => tab.classList.remove('active-tab'));
        e.target.classList.add('active-tab')
        tabContainer[i].classList.add('active-tab')
    }
})