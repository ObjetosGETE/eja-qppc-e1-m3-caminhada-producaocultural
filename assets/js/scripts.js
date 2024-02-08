$(function (){
    let direcao_atual = 0;
    $(window).scroll(function (e){
       if(testedeposicao()==true)
       {
            // Reset
            reset_personagem()
            $("#mirella").addClass("caminhando") 
            
            // Posição igual
            if (e.scrollY === direcao_atual) { 
                return;
            }
            // Posição diferente
            if(this.scrollY < direcao_atual){ 
                    
                    $("#mirella").addClass("costas") 
                    $("#mirella").removeClass("frente") 
                }else{
                    
                    $("#mirella").addClass("frente")
                    $("#mirella").removeClass("costas")
                }

            direcao_atual = this.scrollY;
       }else {

        // se estiver em um lugar errado:
        // sumir com a mirella, ou
        // parar eval.
       }   
        

  })

})


// https://stackoverflow.com/questions/9144560/jquery-scroll-detect-when-user-stops-scrolling
$(window).scroll(function() {
    if(testedeposicao()==true){
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            $("#mirella").removeClass("caminhando") 
        }, 250));
    }else{
        // se estiver em posição errada não movimentar a mirella
    }
});

// Obter a distância entre o topo do elemento e o topo da janela
let distancia = $(window).scrollTop();
// Obter a referência do elemento que queremos verificar
var elemento = $(".corpo");

// Obter a altura do elemento em EM
var altura = $(window).height();

// Converter a altura de EM para pixels, usando um fator de 16
var posicao = elemento.offset().top;

// Adicionar um evento de scroll na janela
$(window).scroll(function() {
    distancia = $(window).scrollTop();
     // Comparar a distância com a altura do elemento
  if (distancia <= posicao) {
    // O usuário rolou o site até ou além da posição desejada
    console.log("Você chegou!", distancia);
  }
  console.log(distancia, altura, posicao);
});

// testa se chegou a hora da Mirella caminhar
let testedeposicao = function (e){
    let posicao_inicial = 3141.53125;

    if (distancia >= posicao_inicial) {
        // O usuário rolou o site até ou além da posição desejada
        return true
      }
    
    if(distancia <= posicao_inicial){
        reset_personagem();
        $("#mirella").addClass("fixa")
    }
    
    
}

let reset_personagem = function (e){
    $("#mirella").removeClass("fixa");
    $("#mirella").removeClass("idle");
    $("#mirella").removeClass("caminhando"); 
}