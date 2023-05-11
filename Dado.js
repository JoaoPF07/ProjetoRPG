 export class FuncoesDado {
    constructor (){

    
    }

    rolar(min, max) {

        min = Math.ceil (min);
        max = Math.floor ( max);
        numero = Math.floor ( Math.random () * (max - min) + min);

        return numero
    }

    rolarAtributos (sorte, atributo) {

        maior = 0 

        for (var i = 0; i < sorte.length; i++) {
            var n1 = rolar (1,atributo + 1);
            if( maior < n1) {
                maior = n1;
            }
        }
        return maior;
    }
    
}

