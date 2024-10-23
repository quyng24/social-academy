var animationElements = document.querySelectorAll('.show-on-scroll');
function isElInWindow(element) {
    var rect = element.getClientRects()[0];
    var heightScreen = window.innerHeight;
    // check element on the moniter
    if (!(rect.bottom < 0 || rect.top > heightScreen)) {
        element.classList.add('start');
    } else {
        element.classList.remove('start');
    }
}
function checkAnimation() {
    animationElements.forEach(el => {
        isElInWindow(el);
    })
}
window.onscroll = checkAnimation;