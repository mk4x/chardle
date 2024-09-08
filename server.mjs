import { readFileSync, writeFileSync } from 'fs';

class Character {
  constructor(name, universe, gender, age, year_introduced, powers) {
    this.name = name;
    this.universe = universe;
    this.gender = gender;
    this.age = age;
    this.year_introduced = year_introduced;
    this.powers = powers;
  }
}

function add_characters(characters) {
  const data = readFileSync('persons.json', 'utf-8');
  let ParsedCharacters = [];

  // If persons.json is not empty, parse existing characters
  if (data.length !== 0) {
    ParsedCharacters = JSON.parse(data);
  }

  // Add characters ensuring no duplicates based on the name and universe
  characters.forEach(character => {
    const duplicate = ParsedCharacters.find(
      existingCharacter =>
        existingCharacter.name === character.name &&
        existingCharacter.universe === character.universe
    );

    if (!duplicate) {
      const newCharacter = new Character(
        character.name,
        character.universe,
        character.gender,
        character.age,
        character.year_introduced,
        character.powers
      );
      ParsedCharacters.push(newCharacter);
    }
  });

  // Write the updated list of characters back to persons.json
  const newData = JSON.stringify(ParsedCharacters, null, 4);
  writeFileSync('persons.json', newData);
  console.log('Characters added successfully');
}

// Sample characters array (replace with your actual characters list)
const characters = [
    { name: "Spider-Man", universe: "Marvel", gender: "Male", age: 25, year_introduced: 1962, powers: ["Super strength", "Wall-crawling", "Spider-sense"] },
    { name: "Wonder Woman", universe: "DC", gender: "Female", age: 3000, year_introduced: 1941, powers: ["Super strength", "Flight", "Lasso of Truth"] },
    { name: "Hercules", universe: "Greek Mythology", gender: "Male", age: 5000, year_introduced: -800, powers: ["Super strength", "Immortality"] },
    { name: "Frodo Baggins", universe: "Lord of the Rings", gender: "Male", age: 50, year_introduced: 1937, powers: ["Ring of Invisibility", "Resilience"] },
    { name: "Luke Skywalker", universe: "Star Wars", gender: "Male", age: 23, year_introduced: 1977, powers: ["The Force", "Lightsaber skills"] },
    { name: "Daenerys Targaryen", universe: "Game of Thrones", gender: "Female", age: 25, year_introduced: 1996, powers: ["Dragons", "Fire immunity"] },
    { name: "Batman", universe: "DC", gender: "Male", age: 35, year_introduced: 1939, powers: ["Genius intellect", "Martial arts", "Wealth"] },
    { name: "Iron Man", universe: "Marvel", gender: "Male", age: 45, year_introduced: 1963, powers: ["Powered armor suit", "Genius intellect", "Flight"] },
    { name: "Thor", universe: "Marvel", gender: "Male", age: 1500, year_introduced: 1962, powers: ["God of Thunder", "Mjolnir", "Super strength"] },
    { name: "Sherlock Holmes", universe: "Literature", gender: "Male", age: 40, year_introduced: 1887, powers: ["Genius detective", "Observation"] },
    { name: "Katniss Everdeen", universe: "The Hunger Games", gender: "Female", age: 16, year_introduced: 2008, powers: ["Archery", "Survival skills"] },
    { name: "Superman", universe: "DC", gender: "Male", age: 35, year_introduced: 1938, powers: ["Super strength", "Flight", "Heat vision"] },
    { name: "Hermione Granger", universe: "Harry Potter", gender: "Female", age: 18, year_introduced: 1997, powers: ["Magic", "Intelligence"] },
    { name: "Black Panther", universe: "Marvel", gender: "Male", age: 30, year_introduced: 1966, powers: ["Super strength", "Enhanced agility", "Vibranium suit"] },
    { name: "Aang", universe: "Avatar: The Last Airbender", gender: "Male", age: 112, year_introduced: 2005, powers: ["Airbending", "Avatar state", "Master of all elements"] },
    { name: "Buffy Summers", universe: "Buffy the Vampire Slayer", gender: "Female", age: 18, year_introduced: 1997, powers: ["Slayer strength", "Combat skills"] },
    { name: "Neo", universe: "The Matrix", gender: "Male", age: 35, year_introduced: 1999, powers: ["Reality manipulation", "Martial arts"] },
    { name: "Yoda", universe: "Star Wars", gender: "Male", age: 900, year_introduced: 1980, powers: ["The Force", "Wisdom", "Lightsaber combat"] },
    { name: "Scarlet Witch", universe: "Marvel", gender: "Female", age: 29, year_introduced: 1964, powers: ["Chaos magic", "Reality warping"] },
    { name: "Gandalf", universe: "Lord of the Rings", gender: "Male", age: 2000, year_introduced: 1937, powers: ["Magic", "Wisdom"] },
    { name: "Darth Vader", universe: "Star Wars", gender: "Male", age: 45, year_introduced: 1977, powers: ["The Force", "Lightsaber skills"] },
    { name: "Lara Croft", universe: "Tomb Raider", gender: "Female", age: 32, year_introduced: 1996, powers: ["Combat skills", "Archaeology", "Survival"] },
    { name: "Wolverine", universe: "Marvel", gender: "Male", age: 150, year_introduced: 1974, powers: ["Regeneration", "Adamantium claws", "Enhanced senses"] },
    { name: "Doctor Strange", universe: "Marvel", gender: "Male", age: 40, year_introduced: 1963, powers: ["Sorcery", "Time manipulation", "Teleportation"] },
    { name: "Jon Snow", universe: "Game of Thrones", gender: "Male", age: 25, year_introduced: 1996, powers: ["Swordsmanship", "Leadership"] },
    { name: "Leia Organa", universe: "Star Wars", gender: "Female", age: 29, year_introduced: 1977, powers: ["Diplomacy", "Leadership", "The Force"] },
    { name: "Samus Aran", universe: "Metroid", gender: "Female", age: 30, year_introduced: 1986, powers: ["Power suit", "Enhanced reflexes"] },
    { name: "Kratos", universe: "God of War", gender: "Male", age: 1000, year_introduced: 2005, powers: ["God-like strength", "Combat skills"] },
    { name: "Ellen Ripley", universe: "Alien", gender: "Female", age: 38, year_introduced: 1979, powers: ["Survival", "Combat skills"] },
    { name: "Goku", universe: "Dragon Ball", gender: "Male", age: 43, year_introduced: 1984, powers: ["Super Saiyan", "Energy blasts", "Combat skills"] }
  ];
  

// Add characters to persons.json
add_characters(characters);
