//console.log('ciao belli');
//Hamburger menu
//Mostrare nascondere il menu principale (ricordate che per vedere 
//l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
//Consiglio
//Partite dal comprendere bene come è fatto 
//il DOM e il CSS, potete usarli a vostro vantaggio!

// referenze per non richiamare troppoe volte
// per il menu il click
var menu = $('.fa-bars');
//console.log(menu);

// per il menu princilpale dove e messa la X
var menuGrande = $('hamburger-menu')

// per la X
var chiusura = $('.close');
//console.log(chiusura)

// 1
menu.click( function(){
    chiusura.fadeIn();
})