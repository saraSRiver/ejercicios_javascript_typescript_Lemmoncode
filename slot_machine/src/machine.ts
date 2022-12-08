class Maquina{
    contador:number = 0;
    
    play(){
        this.contador++;
        let cont_result1 = 0,
            cont_result2 = 0;

        // generador de las 3 ruletas de booleanos
        for(let i = 0 ; i < 3 ; i++){
            let random = Math.random();
            let boolean_value = random < 0.5;
            console.log(boolean_value);
            if(boolean_value === true) cont_result1++;
            if(boolean_value === false) cont_result2++;

            if(i === 2){
                if(cont_result1 === 3 || cont_result2 === 3){
                    console.log(`Enhorabuena! Ganaste ${this.contador} monedas!`); 
                    this.contador = 0;
                } 
                else {
                    console.log('Suerte en la próxima partida');
                }
            }
        }
    }
}

let partida = new Maquina();
partida.play();
partida.play();
partida.play();
partida.play();
partida.play();
partida.play();
