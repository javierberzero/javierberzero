let playerName = "Player";
let hitPoints = 100;
let minHitPoints = 0;
let defensa;
let iniciativa = undefined;
let ItemDrop;
let item = ["legendary staff","epic staff","magic staff","common staff","broken"]
let enemy = "Enemy"

function generarNumero(){
    
    const numeroAleatorio = Math.floor(Math.random() * 3) + 1;
    document.getElementById('randomNumber').innerHTML = `El número aleatorio es: ${numeroAleatorio}`;

     hitPoints = hitPoints - numeroAleatorio
     
          console.log(hitPoints)

          
        }
  
        function generarNumero1(){
    
          const numeroAleatorio1 = Math.floor(Math.random() * 6) + 1;
          document.getElementById('randomNumber1').innerHTML = `El número aleatorio es: ${numeroAleatorio1}`;
          
     hitPoints = hitPoints - numeroAleatorio1
     console.log(hitPoints)


        }
        function generarNumero2(){
    const numeroAleatorio2 = Math.floor(Math.random() * 8) + 1;
  
          document.getElementById('randomNumber2').innerHTML = `El número aleatorio es: ${numeroAleatorio2}`;

          
     hitPoints = hitPoints-numeroAleatorio2
     console.log(hitPoints)

        }
        function generarNumero3(){
    const numeroAleatorio3 = Math.floor(Math.random() * 10) + 1;
  
          document.getElementById('randomNumber3').innerHTML = `El número aleatorio es: ${numeroAleatorio3}`;

          
     hitPoints = hitPoints-numeroAleatorio3
     console.log(hitPoints)

        }    

        function generarNumero4(){
          const numeroAleatorio4 = Math.floor(Math.random() * 20) + 1;
                  document.getElementById('randomNumber4').innerHTML = `El número aleatorio es: ${numeroAleatorio4}`;
     
         
                  defensa = numeroAleatorio4


//Aplivar for loop para que el critico valga 2 dados en lugar de 1

        if(defensa == 20){
          generarNumero3();
          console.log("critico")
                }else if(defensa >= 15 && defensa <= 19){
                  generarNumero2();
          console.log("acierta golpe 2")
        }else if(defensa >= 10 && defensa <= 14){
          generarNumero1()
          console.log("acierta golpe 1")

        }else if(defensa >= 3 && defensa <= 9){
          generarNumero()
          console.log("acierta golpe")

        }else{
          console.log("falla el golpe")}
          generarNumero5()
          
                  }

        
        function generarNumero5(){
          
          const numeroAleatorio5 = Math.floor(Math.random() * 100) + 1;
                        document.getElementById('randomNumber5').innerHTML = `El número aleatorio es: ${numeroAleatorio5}`;
                  ItemDrop = numeroAleatorio5
                  if(ItemDrop == 1){
                    console.log("legendary staff")
                  }else if(ItemDrop <= 10 && ItemDrop>=2){
                    console.log("epic staff")
                  }else if(ItemDrop <= 25 && ItemDrop>=11){
                  console.log("magic staff")
                  }else if(ItemDrop <= 50 && ItemDrop>=26){
                    console.log("common staff")
                  }else{console.log("broken")}

                   }
   













             

           
                   