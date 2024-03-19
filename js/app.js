// *SNACK 1*
// Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto:
// [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez',
//  'George Clooney', 'Amal Clooney', 'Maneskin']
// Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico,
//  per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
// nome del tavolo,
// nome dell’ospite,
// posto occupato.
// Generiamo e stampiamo in console la lista per i segnaposto.
// *****
// esempio:
// {
//   nomeTavolo: 'Tavolo VIP',
//   nomeOspite: 'Brad Pitt',
//   posto: 1
// }

const tavoloVip = [ 
    'Brad Pitt',
    'Johnny Depp', 
    'Lady Gaga', 
    'Cristiano Ronaldo', 
    'Georgina Rodriguez', 
    'Chiara Ferragni', 
    'Fedez',
    'George Clooney', 
    'Amal Clooney', 
    'Maneskin'
]




let segnapostoArray = [];

for(let i = 0; i < tavoloVip.length; i++){
    let invitatoOggetto = {};
    let invitato = tavoloVip[i];

    
    
    invitatoOggetto.nome = invitato;
    invitatoOggetto.posto = i +1
    invitatoOggetto.tavolo = 'Tavolo Vip'

    segnapostoArray.push(invitatoOggetto);


}

console.log(segnapostoArray);



