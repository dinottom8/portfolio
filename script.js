let window_handles = [...document.querySelectorAll(".window-handle")];

window_handles.forEach((el) => {
    el.addEventListener("click", () => selectWindow(el));
});

for (let i = window_handles.length - 1, u = window_handles.length; i >= 0; i--, u++) {
    window_handles[i].style.zIndex = u
}

function selectWindow(el) {
    window_handles.map((elem)=>{
        elem.classList.remove("active-window-handle");
    })
    el.classList.add("active-window-handle");
}