let count = document.getElementsByTagName("main")[0].childElementCount - 2;
const ul = document.getElementById("navbar__list");
const button = document.getElementById("scrollToTop");

for (let i = 1; i <= count; i++) {
    let htmlTextToAdd = '<li><a class="menu__link" onclick="scrollToSection(' + i + ')">Section ' + i + '</a></li>';

    ul.insertAdjacentHTML("beforeEnd", htmlTextToAdd);
}