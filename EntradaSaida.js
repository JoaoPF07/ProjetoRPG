
import prompt from 'prompt-sync'

 export class FuncoesES () {

    construntor (){
      this.input = prompt();
    }
    entrada ( mensagem){
        return this.input (mensagem);
    }

    mensagemSimples ( mensagem){
        console.log (mensagem)
    }
    
    mensagemCompleta(mensagem){

        console.log("***********************************");
        console.log(mensagem)
    }


    menuPergunta (opcoes) {

        console.log ("***********************************");
        console.log ( 'Escolha uma opção :')
         for (var i = 0; i < opcoes.length; i++) {
            console.log (`Opção ${i} : ${opcoes [i]}`);
         }
         console.log ("***********************************");
         var opcao = Number (this.entrada());
         if ((opcao >=0) && ( opcao < opcoes.length)){
            return opcao;
         } 
    }
}