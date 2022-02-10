Déclaration des var.

Déclaration des fonctions:
Fonction image du dé questionMark;

Fonction newGame :
 Affecter les variables suivantes:
  player1IsActive = true;
  player2IsActive = false;
  player1Global = 0;
  player2Global = 0;
  player1Current = 0;
  player2Current = 0;
 Afficher les datas:
  player1 name;
  player2 name;
  player1 global score;
  player2 global score;
  player1 current score;
  player2 current score;
 Joueur 1 mis en state actif;
 Joueur 2 mis en state inactif;
 Désactivation du bouton sécuriser;
 Activation du bouton jeter le dé;
 Appel de la fonction qMark;
Ajout de l'éventlistener sur le bouton newGame;


Fonction nextPlayer :
 Désactivation du bouton sécuriser;
 Si player1 n'est pas actif :
   player1 devient actif;
   player2 devient inactif;
 Sinon :
   player1 devient inactif;
   player2 devient actif;
 Affichage du dé questionMark avec une temporisation de 300ms;


Fonction Roll:
 Activer le bouton sécuriser;
 Génèrer une var randomNumber entre 1 et 6;
 Afficher la face du dé égale à randomNumber;
 si var !== 1 alors:
     Si player1  est actif:     
       current du player1 += var;
       afficher le current du player1;
     Sinon :
       current du player2 += var;
       afficher le current du player2;
 Sinon:
     current player1 et player2 === 0;
     afficher les score actuels;
     appel de lafonction nextPlayer;
Ajout de l'éventlistener sur le bouton newGame;

     
Fonction gameOver:
 Désactivation des boutons jeter le dé et sécuriser;

Fonction hold:
 global du player1  += current du player1;
 global du player2  += current du player2;
 current du player1 === 0;
 current du player2 === 0;
 Maj affichage des scores global player1, global player2,current player1,current player2;
 si global player1 >= 100 alors :
  player1 name devient GAGNANT;
  player2 name devient PERDANT;
  appel de la fonction gameOver;
 sinon si player2 >= 100 alors :
  player2 name devient GAGNANT;
  player1 name devient PERDANT;
  appel de la fonction gameOver;
 sinon :
  appel de la fonction nextPlayer;
Ajout de l'éventlistener sur le bouton hold;

Appel de la fonction newGame pour lancement au chargement de la page;