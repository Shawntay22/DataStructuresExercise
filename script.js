// Data Structures Exercise
// 1a
const jedi = [];

// 1b
jedi[0] = "Luke";
// jedi[jedi.length] = 'Luke';
console.log(jedi);  // Jedi

// 1c
jedi.push(`Obi-Wan Kenobi`);
console.log(jedi);  // [ 'Luke', 'Obi-Wan Kenobi' ]

// 1d
jedi.unshift(`Yoda`);
console.log(jedi);  // [ 'Yoda', 'Luke', 'Obi-Wan Kenobi' ]

// 1e
console.log(jedi[1]);  // Luke

// 1f
const force = jedi.pop();
console.log(jedi);  // [ 'Yoda', 'Luke' ]
console.log(force);  // Obi-Wan Kenobi  ;  allows you to see what was removed from the string. 

// 1g
jedi.shift();
console.log(jedi);  // [ 'Luke' ]

// OR
// const dark = jedi.shift();
// console.log(jedi);  // [ 'Luke' ]
// console.log(dark);  // Yoda

// OR
// console.log(jedi.slice(1));  // [ 'Luke' ]

// 2a
const sithLords = [
        `Darth Vader`,
        `Darth Sidious`,
        `Darth Maul`
];

// 2b
const imperialOfficers = [
        `Grand Moff Tarkin`,
        `Orson Krennic`
];


// 2c
const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);  /*
[
  'Darth Vader',
  'Darth Sidious',
  'Darth Maul',
  'Grand Moff Tarkin',
  'Orson Krennic'
]
                                */

// 2d
console.log(starWarsVillains.slice(0,2));  // [ 'Darth Vader', 'Darth Sidious' ]

// 3a
const droids = {
    astromech: `R2-D2`,
    protocol: `C-3PO`,
    assassin: `IG-88`
};
console.log(droids);  // { astromech: 'R2-D2', protocol: 'C-3PO', assassin: 'IG-88' }

// 3b
console.log(droids[`astromech`]);  //R2-D2

// 3c
console.log(droids.protocol);  // C-3PO

// 3d
droids[`assassin`] = `IG-11`
console.log(droids);  // { astromech: 'R2-D2', protocol: 'C-3PO', assassin: 'IG-11' }

// OR

// droids.assassin = `IG-11`;
// console.log(droids.assassin);
// console.log(droids);

// BONUS
// 4
console.log(starWarsVillains[0][6]);  // V

// OR
// console.log(`Darth Vader`[6]);  // V

// 5
console.log(starWarsVillains.slice(-4, -3));  // [ 'Darth Sidious' ]
// console.log(sithLords.slice (-2, -1));  // [ 'Darth Sidious' ]


// 6a
const starWarsMovies = [
    {
        episodeOne: "The Phantom Menace", 
        episodeTwo: "Attack of the Clones", 
        episodeThree: "Revenge of the Sith"
    },
    {
        episodeFour: "A New Hope", 
        episodeFive: "The Empire Strikes Back", 
        episodeSix: "Return of the Jedi" 
    },
    {
        episodeSeven: "The Force Awakens", 
        episodeEight: "The Last Jedi", 
        episodeNine: "The Rise of Skywalker"
    }
];

// 6b
starWarsMovies.splice(1,0, `Solo`, `Rouge One`);
console.log(starWarsMovies);  /*      
[
  {
    episodeOne: 'The Phantom Menace',
    episodeTwo: 'Attack of the Clones',
    episodeThree: 'Revenge of the Sith'
  },
  'Solo',                *** Added 'Solo' and 'Rouge One'the the 
  'Rouge One',                  index 1 position. ***
  {
    episodeFour: 'A New Hope',
    episodeFive: 'The Empire Strikes Back',
    episodeSix: 'Return of the Jedi'
  },
  {
    episodeSeven: 'The Force Awakens',
    episodeEight: 'The Last Jedi',
    episodeNine: 'The Rise of Skywalker'
  }
]
                                  */

