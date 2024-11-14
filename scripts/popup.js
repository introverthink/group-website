const open = document.querySelectorAll(".courses_blocks > div");
const close = document.getElementById("close_popup");
const popup = document.getElementById("popup");

for (let i = 0; i < open.length; i++) {
    open[i].addEventListener("click", () => {
        popup.classList.add("open");
    });
}

close.addEventListener("click", () => {
    popup.classList.remove("open");
});