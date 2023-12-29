(function() {
    
    
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    let deg =0;
    let red=0;
    let black=0;
    let green=0;
    let juegos=0;

    let jugador1={//apuesta al red, $1, si gana +1, si pierde -1
       dinero:200,
    }
    let jugador2={//apuesta al red, $1, pero cada que pierda dobla la cantidad de apuesta.
        dinero:200,
        apuesta:1
    }
    let color;
    
    var element =document.querySelector("h1");

    
    startButton.addEventListener('click', () =>{
        juegos++;
        startButton.getElementsByClassName.pointerEvents = 'none';
        deg = Math.floor(5000 + Math.random()*5000);
        //deg=5;
        wheel.style.transition = 'all 2s ease';
        wheel.style.transform = `rotate(${deg}deg)`;
        wheel.classList.add('blur');
    });
        wheel.addEventListener('transitionend', () =>{
            wheel.classList.remove('blur');
            startButton.getElementsByClassName.pointerEvents = 'auto';
            wheel.style.transition = 'none';
            const actualDeg = deg%360;
            wheel.style.transform = `rotate(${actualDeg}deg)`;
            let anterior = jugador1.dinero;
            let anter = jugador2.dinero; 

           
        
            
            if (actualDeg>=0 && actualDeg<6) {
                document.getElementById('resut').textContent="00 GREEN";
                element.style.backgroundColor="green";
                jugador1.dinero--;
                jugador2.dinero=jugador2.dinero-jugador2.apuesta;
                jugador2.apuesta=jugador2.apuesta*2;
                color="verde";
                green++;
            }
            if (actualDeg >= 6 && actualDeg <16) {
                document.getElementById('resut').textContent="1 RED";
                element.style.backgroundColor="red";
                red++;
                jugador1.dinero+=1;
                jugador2.dinero+=jugador2.apuesta;
                color="rojo";
            }
            if (actualDeg >= 16 && actualDeg <=24) {
                document.getElementById('resut').textContent='13 BLACK';
                element.style.backgroundColor="black";
                jugador1.dinero--;
                jugador2.dinero=jugador2.dinero-jugador2.apuesta;
                jugador2.apuesta=jugador2.apuesta*2;
                color="negro";
                black++;
            }
            if (actualDeg >= 25 && actualDeg <=33) {
                document.getElementById('resut').textContent='36 RED';
                element.style.backgroundColor="red";
                jugador1.dinero+=1;
                jugador2.dinero+=jugador2.apuesta;
                color="rojo";
                red++;
            }
            if (actualDeg >= 33 && actualDeg <=43) {
                document.getElementById('resut').textContent='24 BLACK';
                element.style.backgroundColor="black";
                jugador1.dinero--;
                jugador2.dinero=jugador2.dinero-jugador2.apuesta;
                jugador2.apuesta=jugador2.apuesta*2;
                color="negro";
                black++;
            }
            if (actualDeg >= 44 && actualDeg <=52) {
                document.getElementById('resut').textContent='3 RED';
                element.style.backgroundColor="red";
                jugador1.dinero+=1;
                jugador2.dinero+=jugador2.apuesta;
                color="rojo";
                red++;
            }
            if (actualDeg >= 53 && actualDeg <=62) {
                document.getElementById('resut').textContent='15 BLACK';
                element.style.backgroundColor="black";
                jugador1.dinero--;
                jugador2.dinero=jugador2.dinero-jugador2.apuesta;
                jugador2.apuesta=jugador2.apuesta*2;
                color="negro";
                black++;
            }
            if (actualDeg >= 63 && actualDeg <=71) {
                document.getElementById('resut').textContent='34 RED';//
                element.style.backgroundColor="red";
                jugador1.dinero+=1;
                jugador2.dinero+=jugador2.apuesta;
                color="rojo";
                red++;
            }
            if (actualDeg >= 72 && actualDeg <=81) {
                document.getElementById('resut').textContent='22 BLACK';
                element.style.backgroundColor="black";
                jugador1.dinero--;
                jugador2.dinero=jugador2.dinero-jugador2.apuesta;
                color="negro";
                jugador2.apuesta=jugador2.apuesta*2;
                black++;
            }
            if (actualDeg >= 82 && actualDeg <=90) {
                document.getElementById('resut').textContent='5 RED';
                element.style.backgroundColor="red";
                jugador1.dinero+=1;
                jugador2.dinero+=jugador2.apuesta;
                color="rojo";
                red++;
            }
            if (actualDeg >= 91 && actualDeg <=100) {
                document.getElementById('resut').textContent='17 BLACK';
                element.style.backgroundColor="black";
                jugador1.dinero--;
                jugador2.dinero=jugador2.dinero-jugador2.apuesta;
                jugador2.apuesta=jugador2.apuesta*2;
                color="negro";
                black++;
            }
            if (actualDeg >= 101 && actualDeg <=109) {
                document.getElementById('resut').textContent='32 RED';
                element.style.backgroundColor="red";
                jugador1.dinero+=1;
                jugador2.dinero+=jugador2.apuesta;
                color="rojo";
                red++;
            }
            if (actualDeg >= 110 && actualDeg <=119) {
                document.getElementById('resut').textContent='20 BLACK';
                element.style.backgroundColor="black";
                jugador1.dinero--;
                jugador2.dinero=jugador2.dinero-jugador2.apuesta;
                jugador2.apuesta=jugador2.apuesta*2;
                color="negro";
                black++;
            }
            if (actualDeg >= 120 && actualDeg <=128) {
                document.getElementById('resut').textContent='7 RED';
                element.style.backgroundColor="red";
                jugador1.dinero+=1;
                jugador2.dinero+=jugador2.apuesta;
                color="rojo";
                red++;
            }
            if (actualDeg >= 129 && actualDeg <=137) {
                document.getElementById('resut').textContent='11 BLACK';
                element.style.backgroundColor="black";
                jugador1.dinero--;
                jugador2.dinero=jugador2.dinero-jugador2.apuesta;
                jugador2.apuesta=jugador2.apuesta*2;
                color="negro";
                black++;
            }
            if (actualDeg >= 138 && actualDeg <=147) {
                document.getElementById('resut').textContent='30 RED';
                element.style.backgroundColor="red";
                jugador1.dinero+=1;
                jugador2.dinero+=jugador2.apuesta;
                red++;
                color="rojo";
            }
            if (actualDeg >= 148 && actualDeg <=157) {
                document.getElementById('resut').textContent='26 BLACK';
                element.style.backgroundColor="black";
                jugador1.dinero--;
                jugador2.dinero=jugador2.dinero-jugador2.apuesta;
                jugador2.apuesta=jugador2.apuesta*2;
                color="negro";
                black++;
            }
            if (actualDeg >= 158 && actualDeg <=166) {
                document.getElementById('resut').textContent='9 RED';
                element.style.backgroundColor="red";
                color="rojo";
                jugador1.dinero+=1;
                jugador2.dinero+=jugador2.apuesta;
                red++;
            }
            if (actualDeg >= 167 && actualDeg <=176) {
                document.getElementById('resut').textContent='28 BLACK';
                element.style.backgroundColor="black";
                jugador1.dinero--;
                jugador2.dinero=jugador2.dinero-jugador2.apuesta;
                jugador2.apuesta=jugador2.apuesta*2;
                color="negro";
                black++;
            }
            if (actualDeg >= 177 && actualDeg <=185) {
                document.getElementById('resut').textContent='0 GREEN';
                element.style.backgroundColor="green";
                jugador1.dinero--;
                jugador2.dinero=jugador2.dinero-jugador2.apuesta;
                jugador2.apuesta=jugador2.apuesta*2;
                color="verde";
                green++;
            }
            if (actualDeg >= 186 && actualDeg <=195) {
                document.getElementById('resut').textContent='2 BLACK';
                element.style.backgroundColor="black";
                jugador1.dinero--;
                jugador2.dinero=jugador2.dinero-jugador2.apuesta;
                jugador2.apuesta=jugador2.apuesta*2;
                color="negro";
                black++;
            }
            if (actualDeg >= 196 && actualDeg <=204) {
                document.getElementById('resut').textContent='14 RED';
                element.style.backgroundColor="red";
                color="rojo";
                jugador1.dinero+=1;
                jugador2.dinero+=jugador2.apuesta;
                red++;
            }
            if (actualDeg >= 205 && actualDeg <=214) {
                document.getElementById('resut').textContent='35 BLACK';
                element.style.backgroundColor="black";
                jugador1.dinero--;
                jugador2.dinero=jugador2.dinero-jugador2.apuesta;
                jugador2.apuesta=jugador2.apuesta*2;
                color="negro";
                black++;
            }
            if (actualDeg >= 215 && actualDeg <=223) {
                document.getElementById('resut').textContent='23 RED';
                element.style.backgroundColor="red";
                color="rojo";
                jugador1.dinero+=1;
                jugador2.dinero+=jugador2.apuesta;
                red++;
            }
            if (actualDeg >= 224 && actualDeg <=232) {
                document.getElementById('resut').textContent='4 BLACK';
                element.style.backgroundColor="black";
                jugador1.dinero--;
                jugador2.dinero=jugador2.dinero-jugador2.apuesta;
                jugador2.apuesta=jugador2.apuesta*2;
                color="negro";
                black++;
            }
            if (actualDeg >= 233 && actualDeg <=242) {
                document.getElementById('resut').textContent='16 RED';
                element.style.backgroundColor="red";
                color="rojo";
                jugador1.dinero+=1;
                jugador2.dinero+=jugador2.apuesta;
                red++;
            }
            if (actualDeg >= 243 && actualDeg <=252) {
                document.getElementById('resut').textContent='33 BLACK';
                element.style.backgroundColor="black";
                jugador1.dinero--;
                jugador2.dinero=jugador2.dinero-jugador2.apuesta;
                jugador2.apuesta=jugador2.apuesta*2;
                color="negro";
                black++;
            }
            if (actualDeg >= 252 && actualDeg <=261) {
                document.getElementById('resut').textContent='21 RED';
                element.style.backgroundColor="red";
                color="rojo";
                jugador1.dinero+=1;
                jugador2.dinero+=jugador2.apuesta;
                red++;
            }
            if (actualDeg >= 261 && actualDeg <=270) {
                document.getElementById('resut').textContent='6 BLACK';
                element.style.backgroundColor="black";
                jugador1.dinero--;
                jugador2.dinero=jugador2.dinero-jugador2.apuesta;
                jugador2.apuesta=jugador2.apuesta*2;
                color="negro";
                black++;
            }
            if (actualDeg >= 271 && actualDeg <=280) {
                document.getElementById('resut').textContent='18 RED';
                element.style.backgroundColor="red";
                color="rojo";
                jugador1.dinero+=1;
                jugador2.dinero+=jugador2.apuesta;
                red++;
            }
            if (actualDeg >= 281 && actualDeg <=289) {
                document.getElementById('resut').textContent='31 BLACK';
                element.style.backgroundColor="black";
                jugador1.dinero--;
                jugador2.dinero=jugador2.dinero-jugador2.apuesta;
                jugador2.apuesta=jugador2.apuesta*2;
                color="negro";
                black++;
            }
            if (actualDeg >= 290 && actualDeg <=299) {
                document.getElementById('resut').textContent='19 RED';
                element.style.backgroundColor="red";
                jugador1.dinero+=1;
                color="rojo";
                jugador2.dinero+=jugador2.apuesta;
                red++;
            }
            if (actualDeg >= 300 && actualDeg <=308) {
                document.getElementById('resut').textContent='8 BLACK';
                element.style.backgroundColor="black";
                jugador1.dinero--;
                jugador2.dinero=jugador2.dinero-jugador2.apuesta;
                jugador2.apuesta=jugador2.apuesta*2;
                color="negro";
                black++;
            }
            if (actualDeg >= 309 && actualDeg <=317) {
                document.getElementById('resut').textContent='12 RED';
                element.style.backgroundColor="red";
                color="rojo";
                jugador1.dinero+=1;
                jugador2.dinero+=jugador2.apuesta;
                red++;
            }
            if (actualDeg >= 318 && actualDeg <=326) {
                document.getElementById('resut').textContent='29 BLACK';
                element.style.backgroundColor="black";
                jugador1.dinero--;
                jugador2.dinero=jugador2.dinero-jugador2.apuesta;
                jugador2.apuesta=jugador2.apuesta*2;
                color="negro";
                black++;
            }
            if (actualDeg >= 327 && actualDeg <=336) {
                document.getElementById('resut').textContent='25 RED';
                element.style.backgroundColor="red";
                color="rojo";
                jugador1.dinero+=1;
                jugador2.dinero+=jugador2.apuesta;
                red++;
            }
            if (actualDeg >= 337 && actualDeg <=346) {
                document.getElementById('resut').textContent='10 BLACK';
                element.style.backgroundColor="black";
                jugador1.dinero--;
                jugador2.dinero=jugador2.dinero-jugador2.apuesta;
                jugador2.apuesta=jugador2.apuesta*2;
                color="negro";
                black++;
            }
            if (actualDeg >= 347 && actualDeg <=356) {
                document.getElementById('resut').textContent='27 RED';
                element.style.backgroundColor="red";
                color="rojo";
                jugador1.dinero+=1;
                jugador2.dinero+=jugador2.apuesta;
                red++;
            }
            if (actualDeg >= 357){
                document.getElementById('resut').textContent='00 GREEN';
                element.style.backgroundColor="green";
                jugador1.dinero--;
                jugador2.dinero=jugador2.dinero-jugador2.apuesta;
                jugador2.apuesta=jugador2.apuesta*2;
                color="verde";
                green++;
            }

            if (jugador2.dinero>1000) {// si el jugador llega a $1000 la apuesta se restaura a 1
                jugador2.apuesta=1;
            }
            if (jugador2.apuesta>=jugador2.dinero) {// si el jugador tiene menos dinero que la apuesta, apostara lo que tiene
                jugador2.apuesta=jugador2.dinero;
            }
           imp();
           function imp() {
            let gano;
            if (anterior> jugador1.dinero) {
                gano="no";
            }else{
                gano="si";
            }
            let gan;

            if (anter> jugador2.dinero) {
                gan="no";
            }else{
                gan="si";
            }
            if (jugador2.dinero===0) {
                gan="Sin dinero";
            }

            console.table("\t\t\t| Giro |  Dinero | Gano? | Dinero despues de girar | Numero generado |");
            console.table("Jugador 1:\t\t"+juegos+"\t\t"+anterior+"\t\t"+gano+"\t\t\t\t"+jugador1.dinero+"\t\t\t\t\t\t"+actualDeg);
            console.table("Jugador 2:\t\t"+juegos+"\t\t"+anter+"\t\t"+gan+"\t\t\t\t"+jugador2.dinero+"\t\t\t\t\t\t"+actualDeg);
            console.log("color: "+color);
            console.log("------------------------------------------------------------------------------");
           }
           probabilidades();
           function probabilidades() {
            let probred=red/juegos;
            let probblack=black/juegos;
            let probgre=green/juegos;

            console.log(" Resultados \t Probabilidad \t P.Acumulada");
            console.log(red+" Rojos \t"+probred+" \t "+probred);
            console.log(black+" Negros \t"+probblack+"\t "+(probred+probblack));
            console.log(green+" Verdes \t"+probgre+"\t "+(probred+probblack+probgre));
            console.log("Total:"+(red+black+green));
            console.log("-------------------------------------------------------------------------------")
        }          
            
    });
})();