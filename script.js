let nav_icons = [...document.querySelectorAll(".nav-icon")];
let parent_skill_cards = document.querySelector(".projects-github");

console.log(parent_skill_cards)

nav_icons.forEach((icon) => {

    icon.addEventListener("click", ()=> {

        if (icon == nav_icons[0]) {
            document.querySelector(".nav-bar-selection").style.top = "42vh"
        } else if (icon == nav_icons[1]) {
            document.querySelector(".nav-bar-selection").style.top = "48.2vh"
        } else {
            document.querySelector(".nav-bar-selection").style.top = "54.3vh"
        }

    })

});

function getApiGitHub() {

    fetch('https://api.github.com/users/dinottom8/repos').then(
        async res => {

            if(!res.ok){
                throw new Error(res.status)
            }

            var data = await res.json()

            data.map(item => {
                let project = document.createElement("div");
                project.classList.add("swiper-slide")
                project.classList.add("skill-card")
                project.innerHTML = `
                    <h2>${item.name}</h2>
                    <span>Updated at: ${item.updated_at}</span>
                    <div class="text-skill-card">${item.description}</div>
                    <img src="http://www.placeholder.com/80" alt="Imagem do projeto">
                `

                parent_skill_cards.appendChild(project)

            })

        }).catch(e => console.log(e))

}

getApiGitHub()