function insertCommon() {
    fetch("/header.html")
        .then(response => {
            return response.text();
        })
        .then(data => {
            document.querySelector("header").innerHTML = data;
        });

    fetch("../footer.html")
        .then(response => {
            return response.text();
        })
        .then(data => {
            document.querySelector("footer").innerHTML = data;
        });
}

function test(e) {
    var p = document.getElementById(e).parentElement.getElementsByTagName("p");

    for (let i in p) {
        if (p[i].classList != null) {
            for (let j of p[i].classList) {
                if (j === "hide") {
                    p[i].classList.remove("hide");
                    p[i].classList.add("show");
                } else {
                    p[i].classList.remove("show");
                    p[i].classList.add("hide");
                }
            }
        } else if (p[i].className === "hide") {
            p[i].className = "show";
        } else {
            p[i].className = "hide";
        }
    }
}

let slideIndex = 1;
showDivs(1);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}