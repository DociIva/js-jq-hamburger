//console.log('ciao belli');
//Hamburger menu
//Mostrare nascondere il menu principale (ricordate che per vedere 
//l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
//Consiglio
//Partite dal comprendere bene come è fatto 
//il DOM e il CSS, potete usarli a vostro vantaggio!

// referenze per non richiamare troppe volte
// per il menu il click
var menu = $('.fa-bars');
//console.log(menu);

// per il menu princilpale dove e messa la X
var menuGrande = $('.hamburger-menu')

// per la X
var chiusura = $('.close');
//console.log(chiusura)

// 1 devi cliccare per poter attivare l'altra pagina(click = azione che viene svolta, di conseguenza un coseguenza)
//   function() <-- così è chiamata anonima
menu.click( function(){
    menuGrande.fadeIn();
})

// 2 uguale ma che sia al contrario(cioè , che ora cliccando la X la gina si tolga) , da cambiare il nome però dell'og che deve sparire di nuovo  
chiusura.click( function(){
    menuGrande.fadeOut();
})