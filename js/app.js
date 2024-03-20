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

    arrayNomiBadge.push(nomeBadge,element.id, element.media)
    
})

console.log(arrayNomiBadge);

elencoStudenti.forEach((element, i, array)=>{
    if(element.media > 70 && element.id > 120){
        IdSup120.push(element);
    }else if(element.media > 70){
        arrayVotiMaggiore70.push(element);
    }
})

console.log(arrayVotiMaggiore70, IdSup120);


// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:

// Crea un nuovo array con la lista dei mammiferi.
// [
// { nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
// { nome: ‘cane’, famiglia: ‘canidi’, classe: ‘mammiferi’ },
// { nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },

const animali =[
    {
        nome : 'Leone',
        famiglia : 'Felini',
        classe : 'mammiferi'
    },
    { nome: 'cane',
      famiglia: 'canidi', 
      classe: 'mammiferi' 
    },
    {
        nome: 'gallina', 
        famiglia: 'fasianidi', 
        classe: 'uccelli' 
    },
    {
        nome : 'Balena',
        famiglia : 'cefalopodi',
        classe : 'mammiferi' 
    },
    {
        nome : 'coccodrillo',
        famiglia : 'rettili',
        classe : 'animali sangue freddo'    
    }

]

const mammiferi = [];

animali.filter((element, i, array)=>{
    if(element.classe === 'mammiferi'){
        mammiferi.push(element)
    }
})

console.log(mammiferi);



// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il
// nome e cognome e l’indicazione se può guidare, in base all’età.



const persone = [
    {
        nome : 'Orlando',
        cognome : 'Manfredini',
        eta : 25,
    },
    {
        nome : 'Nicola',
        cognome : 'Manfredini',
        eta : 60,
    },
    {
        nome : 'Taddeo',
        cognome : 'Manfredini',
        eta : 16,
    },
    {
        nome : 'Ruggero',
        cognome : 'Manfredini',
        eta : 35,
    },
    {
        nome : 'Chiara',
        cognome : 'Manfredini',
        eta : 13,
    },
    {
        nome : 'Giacomo',
        cognome : 'Manfredini',
        eta : 27,
    },
    {
        nome : 'Gianni',
        cognome : 'Manfredini',
        eta : 12,
    },
    {
        nome : 'Laura',
        cognome : 'Manfredini',
        eta : 56,
    }

]


let nomeConsenso = [];

persone.map((element, i, array)=>{
    if(element.eta > 18){
        nomeConsenso.push(element.nome + ' puo guidare')

    }else{
        nomeConsenso.push(element.nome + ' Non puo guidare')
    }
})

console.log(nomeConsenso)




// SNACK 3
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const biciclette = [
    {
        nome : 'Specialized',
        peso : 59,
    },
    {
        nome : 'Trek',
        peso : 62,
    },
    {
        nome : 'Scott',
        peso : 54,
    },
    {
        nome : 'MTB',
        peso : 56,
    },
    {
        nome : 'Trek',
        peso : 52,
    },
    {
        nome : 'Specialized',
        peso : 58,
    },
    {
        nome : 'Bianchi',
        peso : 53,
    }

];


const pesoBiciclette = biciclette.map((element)=>{
    let peso = element.peso

    return peso
})



let numeroPiccolo = numeroPiuBasso(pesoBiciclette);


for(let key in biciclette){
    let elementCorrente = biciclette[key];
    const {nome,peso} = elementCorrente
    

    if(peso === numeroPiccolo){
        console.log('La ' + nome + ' è la bici che pesa meno di tutte con il peso di ' + peso + ' kg')
    }
}




// UTILITY SNACK
function numeroPiuBasso(array){

    let pesoStart = array[0];
    
    for (let i = 0; i < array.length; i++){
        
        let element = array[i];
        

        if(pesoStart > element){
            pesoStart = element;
            
        }
    }
return pesoStart
}




// SNACK 4
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi
//  e falli subiti e stampiamo tutto in console.

const campionato = [
    {
        nome : 'Milan',
        falliSubiti : 0,
        punti : 0,
    },
    {
        nome : 'Juventus',
        falliSubiti : 0,
        punti : 0,
    },
    {
        nome : 'Inter',
        falliSubiti : 0,
        punti : 0,
    },
    {
        nome : 'Fiorentina',
        falliSubiti : 0,
        punti : 0,
    },
    {
        nome : 'Lecce',
        falliSubiti : 0,
        punti : 0,
    },
    {
        nome : 'Bologna',
        falliSubiti : 0,
        punti : 0,
    }
]

const nuovoCampionato = campionato.map((element, i, array)=>{
    let punti = element.punti;
    let falli = element.falliSubiti;

    punti = puntiRandom(0,114);
    falli = falliRandom(0,400);

    return {
        nome : element.nome,
        punti : punti,
        falli : falli,
    }

})

console.log(nuovoCampionato);












// UTILITY SNACK
function puntiRandom(min, max){
    return parseInt(Math.random() * (max - min) + min);
}

function falliRandom(min, max){
    return parseInt(Math.random() * (max - min) + min);
}






