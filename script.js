/* Déclaration des var */
let globalScore;
let currentScore;
let activePlayer;
let p1IsActive;
let p2IsActive;
let p1Global;
let p2Global;
let p1Current;
let p2Current;
let randomNumber;

/* Déclaration des fonctions */
/* questionMark img de départ*/
function qMark(){document.querySelector('img.dice').src='./images/0.png';};

/* Fonction newGame */
function newGame(){
 p1IsActive = true ;
 p2IsActive = false ;
 p1Global = 0;
 p2Global = 0;
 p1Current = 0;
 p2Current = 0;
 document.querySelector('div.name1').textContent = 'JOUEUR 1';
 document.querySelector('div.name2').textContent = 'JOUEUR 2';
 document.querySelector('div.gp1').textContent = p1Global;
 document.querySelector('div.gp2').textContent = p2Global;
 document.querySelector('div.cp1').textContent = p1Current;
 document.querySelector('div.cp2').textContent = p2Current;
 document.querySelector('section.player1').classList.add('active');
 document.querySelector('section.player2').classList.remove('active');  
 document.getElementById('roll').disabled = false;
 document.getElementById('hold').disabled = true;
 qMark();
}
  /* Bouton newGame */
document.getElementById('new').addEventListener('click',newGame);

/* Fonction nextPlayer */
function nextPlayer(){
  document.getElementById('hold').disabled = true;
  if (p1IsActive === false){
        p1IsActive = true;
        document.querySelector('section.player1').classList.add('active');
        p2IsActive = false;        
        document.querySelector('section.player2').classList.remove('active');
		  }else{
        p1IsActive = false;
        document.querySelector('section.player1').classList.remove('active');
			  p2IsActive = true;
        document.querySelector('section.player2').classList.add('active');
      }
      /* effet pour garder le score dé pendant 300ms */
      setTimeout(qMark, 300);         
}

/* Fonction roll */
function roll(){
  document.getElementById('hold').disabled = false;
  /* random */
  randomNumber = Math.floor(Math.random() *6 ) + 1;
  /* Affichage du dé */
  document.querySelector('img.dice').src='./images/'+ randomNumber + '.png';
  /* Ajout du current au global si pas 1 */
   if (randomNumber !==1){
     if(p1IsActive === true){
       p1Current += randomNumber;
       document.querySelector('div.cp1').textContent = p1Current;
     } else {
       p2Current += randomNumber;
       document.querySelector('div.cp2').textContent = p2Current;
     }      
   } else {
	    p1Current = 0;
		  p2Current = 0;
		  document.querySelector('div.cp1').textContent = p1Current;
		  document.querySelector('div.cp2').textContent = p2Current;
      nextPlayer();		  
   }
}
  /* Bouton roll */
document.getElementById('roll').addEventListener('click',roll);

/* fonction gameOver */
function gameOver(){
  document.getElementById('roll').disabled = true;
  document.getElementById('hold').disabled = true;
}
/* Fonction hold */
function hold(){  
  p1Global += p1Current;
  p2Global += p2Current;
	p1Current = 0;
  p2Current = 0;
  document.querySelector('div.cp1').textContent = p1Current;
  document.querySelector('div.cp2').textContent = p2Current;
  document.querySelector('div.gp1').textContent = p1Global;
  document.querySelector('div.gp2').textContent = p2Global;  
  if (p1Global >= 100){
    document.querySelector('div.name1').textContent = 'GAGNANT';
    document.querySelector('div.name2').textContent = 'PERDANT';
    gameOver();
  } else if (p2Global >= 100){
    document.querySelector('div.name2').textContent = 'GAGNANT';
    document.querySelector('div.name1').textContent = 'PERDANT';
    gameOver();
  } else {
    nextPlayer();
  }
}
  /* Bouton hold */
document.getElementById('hold').addEventListener('click', hold);

/* newGame au chargement de la page */
newGame();