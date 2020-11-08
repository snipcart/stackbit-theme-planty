// HAMBURGER MENU
let hamburgerMenu = document.querySelector('.hamburger')
let hamburgerMenuContent = document.querySelector('.hamburger__content')
let nav = document.querySelector('.nav')
let logoDiv = document.querySelector('.nav__logo')
let logo = document.querySelector('.nav__logo-image')
let originalLogo = logo ? logo.src : null
let originalHeaderColor = nav.classList.contains('nav--dark') ? 'nav--dark' : 'nav--light'

hamburgerMenu.addEventListener('click', _ => {
    if (hamburgerMenuContent.classList.contains('hamburger__content--closed')) {
        hamburgerMenuContent.classList.add('hamburger__content--opened')
        hamburgerMenuContent.classList.remove('hamburger__content--closed')
        nav.classList.remove('nav--light')
        nav.classList.add('nav--dark')
        logo.src = logoDiv.dataset.dark;
        toggleScroll()
    } else {
        hamburgerMenuContent.classList.add('hamburger__content--closed')
        hamburgerMenuContent.classList.remove('hamburger__content--opened')
        nav.classList.remove('nav--dark')
        nav.classList.remove('nav--light')
        nav.classList.add(originalHeaderColor)
        logo.src = originalLogo
        toggleScroll()
    }
})


function toggleScroll() {
    document.body.style.overflow == 'hidden'
        ? document.body.style.overflow = 'initial'
        : document.body.style.overflow = 'hidden'
}


// PRODUCT DRAG ACTION
function stopScroll() { document.body.style.overflow = 'hidden' }
function startScroll() { document.body.style.overflow = 'initial' }

let draggableItems = document.querySelectorAll('.product-grid--draggable')
let lastCursorX = null
draggableItems.forEach((element) => {
    element.addEventListener("touchstart", elementStateHandler, false)
    element.addEventListener("touchend", elementStateHandler, false)
    element.addEventListener("touchmove", moveHandler, false)

    element.isActive = false
    element.addEventListener("mousedown", elementStateHandler, false)
    element.addEventListener("mouseup", elementStateHandler, false)
    element.addEventListener("mousemove", moveHandler, false)
})

function elementStateHandler(event) {
    let target = event.currentTarget
    if (event.type == "mousedown" || event.type == "touchstart") {
        target.isActive = true
        return
    }

    if (event.type == "mouseup" || event.type == "touchend") {
        target.isActive = false
        lastCursorX = null
        return
    }
}

function moveHandler(event) {
    let target = event.currentTarget
    if (event.type == "touchmove") currentXPos = event.touches[0].clientX
    if (event.type == "mousemove") currentXPos = event.clientX
    if (target.isActive) {
        if (window.innerWidth > 768) return
        if (lastCursorX == null) {
            lastCursorX = currentXPos
            return
        }
        let xCursorDif = currentXPos - lastCursorX
        if (xCursorDif > 0 || xCursorDif < 0) stopScroll()
        lastCursorX = currentXPos

        const translateX = new WebKitCSSMatrix(target.style.transform).e
        const newValue = translateX + (xCursorDif*2)
        if (newValue <= 0 && newValue >= (-1 * target.clientWidth + 300)) target.style.transform = `translateX(${newValue}px)`
        startScroll()
    }
}

// Reset the positioning when elements go from list (mobile) to desktop
window.onresize = function() {``
    if (window.innerWidth > 768)
        draggableItems.forEach(element => element.style.transform = `translateX(0px)`)
}

// Prevents the drag to continue when mouseout is out of the screen
document.addEventListener('mouseout', _ => draggableItems.forEach(element => element.isActive = false))


// FIGURE LINKS
document.querySelectorAll('.js-figure-link').forEach((l) => {
    l.addEventListener('click', _ => {
        const snipcartButton = _.target.closest('.snipcart-add-item');
        if (snipcartButton) {
            _.preventDefault();
            return false;
        }
    });
});
