let numberPercentScrolling = qS('.scroll-progressbar-taller')
let updateTextScrolling = qS('.update-text-scrolling')
const scrollProgressBar = () =>{
    const sizeHeightBody = document.documentElement.clientHeight
    let scrollHeight = document.documentElement.scrollHeight
    let scrollTop = document.documentElement.scrollTop

    let windowHeight = scrollHeight - sizeHeightBody
    let percent = scrollTop / windowHeight * 100
    if(percent < 39){
        numberPercentScrolling.style.color = "#F24E59";
        updateTextScrolling.innerText = "👶🏻 Novato"
    } else if(percent > 40 && percent < 60) {
        numberPercentScrolling.style.color = "#ffba42";
        updateTextScrolling.innerText = "👨‍💻 Junior"
    } else if(percent > 61 && percent < 79) {
        numberPercentScrolling.style.color = "#2dd280";
        updateTextScrolling.innerText = "👨‍🏫 Senior"
    } else {
        numberPercentScrolling.style.color = "#1192ee";        
        updateTextScrolling.innerText = "👨‍🎓 Nivel Gurú"
    }
    
    // iD('scrollingBody').style.width = percent + "%";
    numberPercentScrolling.innerHTML=Math.round(percent) + "%"
}
window.addEventListener('scroll', scrollProgressBar) 