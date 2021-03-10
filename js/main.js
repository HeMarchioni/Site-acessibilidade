var estado = sessionStorage.getItem("modoDark");
var botaoDark = document.querySelector('#btn-tema');



function dark(press){

    if (estado == undefined | estado == 'ativadoClaro'){
      sessionStorage.setItem('modoDark', 'ativadoDark')
    }

    else if (estado == "ativadoDark" & press == true){
      sessionStorage.setItem('modoDark', 'ativadoClaro')

    };   
    var body = document.body
    body.classList.toggle("dark-background");
    var links = document.body.querySelectorAll("a")
    for(let i = 0; i < links.length; i++){
      links[i].classList.toggle("dark-links")
    }
    var footer = document.body.querySelector("footer");
    footer.classList.toggle("dark-footer")
    var post = document.body.querySelectorAll(".div-post");
    for(let i=0; i < post.length; i++){
      post[i].classList.toggle("dark-posts")
    }

    var darkBtn = document.body.querySelector("#btn-tema");
    if (darkBtn.innerHTML === "Tema Claro") {
      darkBtn.innerHTML = "Tema Escuro";
    } else {
      darkBtn.innerHTML = "Tema Claro";
    }
    
    


    var ul = document.body.querySelector("#dark-ul");
    ul.classList.toggle("dark-ul")

    var btnConteudo = document.body.querySelector(".btnConteudo");
    btnConteudo.classList.toggle("btnConteudoDark");

    var banner = document.body.querySelector(".banner")
    banner.classList.toggle("dark-banner")

};


botaoDark.addEventListener("click", () => dark(true));

if (estado == 'ativadoDark') {
  dark(false);
};