let count = document.getElementsByTagName("main")[0].childElementCount - 2;
const ul = document.getElementById("navbar__list");
const button = document.getElementById("scrollToTop");

for (let i = 1; i <= count; i++) {
    let htmlTextToAdd = '<li><a class="menu__link" onclick="scrollToSection(' + i + ')">Section ' + i + '</a></li>';

    ul.insertAdjacentHTML("beforeEnd", htmlTextToAdd);
}

window.onscroll = function() {showButtonAndActivateLink()};
button.onclick = function() {scrollToSection(0)};

function scrollToSection(id) {
    if (id === 0) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    } else {
        const elem = document.getElementById("section" + id);
    
        elem.scrollIntoView({
            block: "start",
            behavior: "smooth",
            inline: "start"
        });
    }
}

function showButtonAndActivateLink() {
    if (document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }

    for (let i = 1; i <= count; i++) {
        if (document.getElementById("section" + i).offsetTop <= window.scrollY + 100 && document.getElementById("section" + i).offsetTop + document.getElementById("section" + i).offsetHeight > window.scrollY + 100) {
            ul.children[i - 1].firstElementChild.classList.add("current");
        } else {
            ul.children[i - 1].firstElementChild.classList.remove("current");
        }
    }
}