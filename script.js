let currentPage = 1;
const totalPages = 6;

function showPage(pageNumber) {

    if (pageNumber < 1) {
        pageNumber = totalPages;
    }

    if (pageNumber > totalPages) {
        pageNumber = 1;
    }

    const pages = document.querySelectorAll(".page");
    const dots = document.querySelectorAll("#dots span");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    pages[pageNumber - 1].classList.add("active");
    dots[pageNumber - 1].classList.add("active");

    currentPage = pageNumber;
}


function nextPage() {
    showPage(currentPage + 1);
}


function previousPage() {
    showPage(currentPage - 1);
}


/* SAVINGS CALCULATOR */

function calculateSavings() {

    let current = Number(document.getElementById("current").value);
    let monthly = Number(document.getElementById("monthly").value);
    let months = Number(document.getElementById("months").value);

    if (current < 0 || monthly < 0 || months < 0) {
        document.getElementById("result").innerHTML =
            "Please enter positive numbers.";
        return;
    }

    let total = current + (monthly * months);

    document.getElementById("result").innerHTML =
        "💰 You could have $" + total.toFixed(2) +
        " after " + months + " months!";
}


/* KEYBOARD CONTROLS */

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {
        nextPage();
    }

    if (event.key === "ArrowLeft") {
        previousPage();
    }

});


/* START WITH FIRST DOT ACTIVE */

showPage(1);