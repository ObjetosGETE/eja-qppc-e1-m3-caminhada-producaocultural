$(function (){
    let direcao_atual = 0;
    $(window).scroll(function (e){
       if(testedeposicao()===true)
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
        reset_personagem();
        if(distancia <= posicao_inicial){
            $("#mirella").addClass("fixa inicial")
        }else{
            $("#mirella").addClass("fixa final")
        }
       
       }   
        

  })

})


// https://stackoverflow.com/questions/9144560/jquery-scroll-detect-when-user-stops-scrolling
$(window).scroll(function() {
    if(testedeposicao()===true){
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            $("#mirella").removeClass("caminhando") 
        }, 250));
    }else{
        reset_personagem();
        if(distancia > posicao_inicial){
            $("#mirella").addClass("fixa final")
        }else{
            $("#mirella").addClass("fixa inicial")
        }
    }
});

// Posição inicial do Personagem
let posicao_inicial = 3152.416748046875;
// Posição final do Personagem
let posicao_final = 36100.792;
// Tamanho padrão de monitor esperado
let padrao_window_x = 1903;
// Captura a largura nova do usuário
let nova_window_x = Number($(window).width());
// Identifica qual a posição nova em px do dispositivo do usuário
let posicao_final_dinamica = (nova_window_x * posicao_final) / padrao_window_x;
let posicao_inicial_dinamica = (nova_window_x * posicao_inicial) / padrao_window_x;
$(window).resize(function (){
    nova_window_x = Number($(window).width());
    posicao_final_dinamica = (nova_window_x * posicao_final) / padrao_window_x;
    posicao_inicial_dinamica = (nova_window_x * posicao_inicial) / padrao_window_x;
})


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
//   if (distancia <= posicao) {
//     // O usuário rolou o site até ou além da posição desejada

//   }

});



// testa se chegou a hora da Mirella caminhar
let testedeposicao = function (e){
    
    if (distancia >= posicao_inicial_dinamica && distancia <= posicao_final_dinamica) {
        // Personagem pode caminhar
        return true;
      }else {
        // Personagem não pode caminhar
        return false;
      }  
    
}

// Caso o usuário de um refresh na página ele atualiza o personagem para a posição correta.
if(testedeposicao() === true){
    console.log("Pode pode pode")
}else{
    console.log("Não Não Não")
}

// Reset de personagem para o estado correto
let reset_personagem = function (e){
    $("#mirella").removeClass("fixa");
    // $("#mirella").removeClass("idle");
    $("#mirella").removeClass("inicial");
    $("#mirella").removeClass("final");
    $("#mirella").removeClass("caminhando"); 
}