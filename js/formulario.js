//============================ Formulario ============================================================
function formulario () {                             //jS -> by. He (Henrique Marchioni )
  var span = document.querySelectorAll("span");
  var btn_T = 1;
  var btn_e = 0;
  var btn_n = 0;
  var btn = document.querySelectorAll("button");
  btn[2].attributes[0].value = "button"
  var h3_invalido = document.querySelector("h3");
  var p_invalidos = document.querySelectorAll("p[class='p_invalido']")

  var entradas = document.querySelectorAll("input") // -> captura dos inputs
  const filter_nome = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;
  const filter_numero =/^[0-9.]+$/;
  //console.log(p_invalidos)



    
    //-------------------ENTRADA NOME ------------------------------------------------------------  


    
    function nome_form(){
      if ( entradas[0].value == "" ) {
        span[1].style.display="initial";
        span[2].innerHTML="* Campo Obrigatorio não pode estar vazio"
        if (libera ==1){p_invalidos[0].innerText ="*nome invalido, campo obrigatorio não pode estar vazio"}
        
        span[2].style.display="block";
        btn_n=0;
        }

      else if ( !filter_nome.test(entradas[0].value)){
        span[1].style.display="initial";
        span[2].innerHTML="* Digite somente letras para seu nome"
        if (libera ==1){p_invalidos[0].innerText ="*nome invalido, Digite somente letras para seu nome"}
        
        span[2].style.display="block";
        btn_n = 0;
      }

      else if ( entradas[0].value.length < 4 ){
        span[1].style.display="initial";
        span[2].innerHTML="* Digite no minimo 4 caracteres"
        if (libera ==1){p_invalidos[0].innerText ="*nome invalido, Digite no minimo 4 caracteres"}
        
        span[2].style.display="block";
        btn_n = 0;
      }

      else if (entradas[0].value != "" || filter_nome.test(entradas[0].value) ) {
        span[1].style.display="none";
        span[2].style.display="none"; 
        if (libera ==1){p_invalidos[0].innerText =""}
        btn_n = 1;
          }}
  // ---------------------------------------------------------------------------------------------  

// ----------------------------- ENTRADA EMAIL ---------------------------------------------------
function email_form (){

  if ( entradas[1].value == "" ){ 
      span[3].style.display="initial"; 
      span[4].innerHTML="* Campo Obrigatorio não pode estar vazio"; 
      if (libera ==1){p_invalidos[1].innerText ="*email invalido, Campo Obrigatorio não pode estar vazio"}
      
      span[4].style.display="block";btn_e = 0; }      

  
  else if (entradas[1].value.search("@") ==-1) { 
      span[3].style.display="initial"; 
      span[4].innerHTML="* Um email valido é obrigatorio possuir (@)."; 
      if (libera ==1){p_invalidos[1].innerText ="*email invalido, email é obrigatorio possuir (@)."}
      
      span[4].style.display="block"; btn_e = 0; }  
  
  else if (entradas[1].value.search("@") ==0) {
      span[3].style.display="initial"; 
      span[4].innerHTML="* Um email não se começa por @."; 
      if (libera ==1){p_invalidos[1].innerText ="*email invalido, email não se começa por @."}
      
      span[4].style.display="block";btn_e = 0; }                                                                                          
  
  else if (entradas[1].value.lastIndexOf("@") == entradas[1].value.length - 1) {
      span[3].style.display="initial"; 
      span[4].innerHTML="* um email não se pode terminar com @.";
      if (libera ==1){p_invalidos[1].innerText ="*email invalido, email não se pode terminar com @."} 
      
      span[4].style.display="block"; btn_e = 0;}

  else if  (entradas[1].value.lastIndexOf(".") == entradas[1].value.length - 1){
      span[3].style.display="initial"; 
      span[4].innerHTML="* Não se pode finalizar o email com um (.) Ponto."; 
      if (libera ==1){p_invalidos[1].innerText ="*email invalido, email não tem (.) Ponto no final."}
      
      span[4].style.display="block";btn_e = 0; }
  
  else if ( entradas[1].value != "" && entradas[1].value.search("@") !=-1 && entradas[1].value.search("@") !=0 && 
  entradas[1].value.lastIndexOf("@") != entradas[1].value.length - 1 && entradas[1].value.lastIndexOf(".") != entradas[1].length - 1 ) {

    if (libera ==1){p_invalidos[1].innerText =""}
    span[3].style.display="none"; span[4].style.display="none"; btn_e = 1; }}
  // -------------------------------------------------------------------------------------------------------------------------------------
      
 function tel_form(){  //-> entrada telefone

    

    if ( !filter_numero.test(entradas[2].value) && entradas[2].value != ""  ){
          span[5].style.display="initial";
          span[6].innerHTML="* Digite somente numeros para o telefone"
          if (libera ==1){p_invalidos[2].innerText ="*Telefone invalido, digite somente numeros."}
          
          span[6].style.display="block";
          btn_T = 0;
        }
      
    else if (filter_numero.test(entradas[2].value) || entradas[2].value == "" ) { 
          span[5].style.display="none"; span[6].style.display="none"; btn_T = 1;
          if (libera ==1){p_invalidos[2].innerText =""}

    }
  }

var libera = 1;

  function dados_validos () {
      
    if ( (btn_n + btn_e + btn_T) != 3) {

        h3_invalido.style.display="block";
        p_invalidos[0].style.display ="block";
        p_invalidos[1].style.display ="block";
        p_invalidos[2].style.display ="block";
        p_invalidos[3].style.display ="block";
        libera =0;
    }
    else {
      h3_invalido.style.display="none";
      p_invalidos[0].style.display ="none";
      p_invalidos[1].style.display ="none";
      p_invalidos[2].style.display ="none";
      p_invalidos[3].style.display ="none";
      libera =1;


    }
  }




  function libera_btn() {
  if ( (btn_n + btn_e + btn_T) === 3) {
      btn[2].attributes[0].value = "submit"}
  else {
    btn[2].attributes[0].value = "button"
  }
  }
  

btn[2].addEventListener("click", nome_form)
btn[2].addEventListener("click", email_form)
btn[2].addEventListener("click", dados_validos)


entradas[0].addEventListener("focusin", nome_form)  //-> entrada nome para verificar nome toda vez q alguem clica no campo
entradas[0].addEventListener("input", nome_form)  //-> chamado para verificar nome toda vez q algo e escrito 
entradas[0].addEventListener("input", email_form)  //-> chamado para verificar email depois q clica no nome
entradas[1].addEventListener("input", email_form) // -> chamado para verificar o email sempre q algo e digiado nele
entradas[2].addEventListener("input", tel_form)

entradas[0].addEventListener("input", libera_btn);
entradas[1].addEventListener("input", libera_btn);
entradas[2].addEventListener("input", libera_btn);

}

window.onload = formulario;
