window.addEventListener("DOMContentLoaded", svghide)


const reveal = function () {
    const what = this.parentElement.querySelector("polyline")
    what.style.stroke = "black"
}

function svghide() {
    const svg = document.querySelectorAll(".invisible")
    svg.forEach(e => {
        e.addEventListener("click", e = reveal)
    })
}
