let nav = document.getElementById('nav')
let offsetTop = nav.offsetTop
let navitems = document.getElementById('navitems')
let hotdog = document.getElementById('hotdog')
let exit = document.getElementById('exit')
let toggler = document.getElementById('toggle-nav')
let monthly = document.getElementById('monthly')
let annually = document.getElementById('annually')
let businesspr = document.getElementById('businesspr')
let propr = document.getElementById('propr')

let businessprm = '<b>$10</b>/month'
let proprm = '<b>$99</b>/month'
let businesspra = '<b>$100</b>/year'
let propra = '<b>$999</b>/year'
const setSticky = () => {
    if (window.pageYOffset >= offsetTop) {
        nav.classList.add("sticky-nav")
    } else {
        nav.classList.remove("sticky-nav")
    }
}

annually.addEventListener('click', () => {
    annually.classList.add('active')
    monthly.classList.remove('active')
    businesspr.innerHTML = businesspra
    propr.innerHTML = propra
})
monthly.addEventListener('click', () => {
    monthly.classList.add('active')
    annually.classList.remove('active')
    businesspr.innerHTML = businessprm
    propr.innerHTML = proprm
})

toggler.addEventListener('click', () => {
    if (!exit.style.display || exit.style.display === 'none') {
        exit.style.display = 'block'
        hotdog.style.display = 'none'
    } else {
        exit.style.display = 'none'
        hotdog.style.display = 'flex'
    }
    if (!navitems.style.display || navitems.style.display === 'none') {
        navitems.style.display = 'flex'
    } else {
        navitems.style.display = 'none'
        navitems.classList.remove('nav-column')

    }

})


window.onscroll = () => {
    setSticky()
}
let watchbtn = document.getElementById('watchbtn')
let closebtn = document.getElementById('chiqish')
let modal = document.getElementById('modal')
let video = document.getElementsByTagName('video')

watchbtn.addEventListener('click', () => {
    modal.style.display = 'flex'
    console.log('object');
})
closebtn.addEventListener('click', () => {
    modal.style.display = 'none'
    video[0].pause()
    console.log('object');
})


let question = document.getElementsByClassName('question')
let plus = document.getElementsByClassName('plus')
let answer = document.getElementsByClassName('answer')
for(let i = 0; i<=question.length; i++) {
    question[i].addEventListener('click', () => {
        console.log('clicked', answer[i].style.display);
        
        if (!answer[i].style.display || answer[i].style.display === 'none') {
            answer[i].style.display = 'block'
            plus[i].innerHTML = '-'
        } else {
            answer[i].style.display = 'none'
            plus[i].innerHTML = '+'
        }
    })
}
