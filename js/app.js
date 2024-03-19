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
    invitatoOggetto.posto = i + 1;
    invitatoOggetto.tavolo = 'Tavolo Vip';

    segnapostoArray.push(invitatoOggetto);


}

console.log(segnapostoArray);



// *SNACK 2*
// Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
// 1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare
// una lista contenente il loro nome tutto in maiuscolo
// ES (Marco della Rovere => MARCO DELLA ROVERE);
// 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
// Questo è l’elenco degli studenti:
// Id   Name                    Grades
// 213  Marco della Rovere      78
// 110  Paola Cortellessa       96
// 250  Andrea Mantegna 	      48
// 145  Gaia Borromini          74
// 196  Luigi Grimaldello 	  68
// 102  Piero della Francesca   50
// 120  Francesca da Polenta    84

const elencoStudenti = [
    {
        nome : 'Marco della Rovere',
        id : 213,
        media : 78,
    },
    {
        nome : 'Paola Cortellessa',
        id : 110,
        media : 96,
    },
    {
        nome : 'Andrea Mantegna',
        id : 250,
        media : 48,
    },
    {
        nome : 'Gaia Borromini',
        id : 145,
        media : 74,
    },
    {
        nome : 'Luigi Grimaldello',
        id : 196,
        media : 68,
    },
    {
        nome : 'Piero della Francesca',
        id : 102,
        media : 50,
    },
    {
        nome : 'Francesco da Polenta',
        id : 120,
        media : 84,
    },
]

const arrayNomiBadge = [];

const arrayVotiMaggiore70 = [];

const IdSup120 = [];

elencoStudenti.map((element, i, array)=>{
    let nomeStudente = element.nome;

    let nomeBadge = nomeStudente.toUpperCase()
    console.log(nomeBadge)

    arrayNomiBadge.push(nomeBadge)
    
})

console.log(arrayNomiBadge);

elencoStudenti.forEach((element, i, array)=>{
    if(element.media > 70){
        arrayVotiMaggiore70.push(element)
    }else if(element.media > 70 && element.id > 120){
        IdSup120.push(element)
    }
})

console.log(arrayVotiMaggiore70, IdSup120);









