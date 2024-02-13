let window_handles = [...document.querySelectorAll(".window-handle")];

window_handles.forEach((el) => {
    el.addEventListener("click", () => selectWindow(el));
});

fixzIndex();

function fixzIndex() {
    // set the correct zIndex for the window handles    
    for ( let i = 0, countzIndex = window_handles.length ; i < window_handles.length ; i++ , countzIndex-- ) {
        window_handles[i].style.zIndex = countzIndex;
    }

}


function selectWindow(el) {

    
    if (el != window_handles[2]) {
        fixzIndex();
    } else {
        window_handles[0].style.zIndex = 1;
        window_handles[1].style.zIndex = 2;
    }

    // remove all active-window-handle classes
    window_handles.map((elem)=>{
        elem.classList.remove("active-window-handle");
    })

    // add the class just for the right one that is selected
    el.classList.add("active-window-handle");
    el.style.zIndex = 3;

}