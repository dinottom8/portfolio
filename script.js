let nav_icons = [...document.querySelectorAll(".nav-icon")];
let react_projects = document.querySelector(".react-projects");
let web3_projects = document.querySelector(".web3-projects");
let shopify_projects = document.querySelector(".shopify-projects");

nav_icons.forEach((icon) => {
    icon.addEventListener("click", () => {
        if (icon == nav_icons[0]) {
            document.querySelector(".nav-bar-selection").style.top = "42vh";
        } else if (icon == nav_icons[1]) {
            document.querySelector(".nav-bar-selection").style.top = "48.2vh";
        } else {
            document.querySelector(".nav-bar-selection").style.top = "54.3vh";
        }
    });
});

function getApiGitHub() {
    fetch('https://api.github.com/users/dinottom8/repos')
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }
            var data = await res.json();

            data.map(item => {

                let project = document.createElement("div");
                project.classList.add("swiper-slide");
                project.classList.add("skill-card");

                let nomeProjeto = item.name;

                item.name = item.name.split('-');
                item.name.shift()
                item.name = item.name.map(ele => ele.charAt(0).toUpperCase() + ele.slice(1));
                item.name = item.name.join(' ')

                project.innerHTML = `
                    <h2>${item.name}</h2>
                    <span>Updated at: ${item.updated_at}</span>
                    <div class="text-skill-card">${item.description}</div>
                    <img src="http://www.placeholder.com/80" alt="Imagem do projeto">
                `;

                // let itemsName = item.name;

                if (nomeProjeto.startsWith('web3')) {
                    web3_projects.appendChild(project);      
                } else if (nomeProjeto.startsWith('react')) {
                    react_projects.appendChild(project);
                } else if (nomeProjeto.startsWith('shopify')) {
                    shopify_projects.appendChild(project);
                }

                
            });

            let repolength = data.length - 1;

            // Após carregar os projetos, inicialize o Swiper
            var swiper2 = new Swiper(".mySwiper2", {
                direction: "horizontal",
                initialSlide: repolength,
                slidesPerView: 2.3,
                spaceBetween: 30,
                mousewheel: true
            });

            var swiper3 = new Swiper(".mySwiper3", {
                direction: "horizontal",
                initialSlide: repolength,
                slidesPerView: 2.3,
                spaceBetween: 30,
                mousewheel: true
            });

            var swiper2 = new Swiper(".mySwiper4", {
                direction: "horizontal",
                initialSlide: repolength,
                slidesPerView: 2.3,
                spaceBetween: 30,
                mousewheel: true
            });
        })
        .catch(e => console.log(e));
}

getApiGitHub();

let buttons_third_page = [...document.querySelectorAll(".button-third-page")];

buttons_third_page.forEach((el)=>{
    el.addEventListener("click", (tgt)=>{
        if (el.innerHTML == 'Web3 Projects') {
            document.querySelector(".mySwiper3").style.display = "none"
            document.querySelector(".mySwiper4").style.display = "block"
            document.querySelector(".mySwiper2").style.display = "none"
        } else if (el.innerHTML == 'React Projects') {
            document.querySelector(".mySwiper3").style.display = "block"
            document.querySelector(".mySwiper4").style.display = "none"
            document.querySelector(".mySwiper2").style.display = "none"
        } else {
            document.querySelector(".mySwiper3").style.display = "none"
            document.querySelector(".mySwiper4").style.display = "none"
            document.querySelector(".mySwiper2").style.display = "block"
        }
    })
})