import { readFileSync } from 'fs';
import http from 'http';

let currentCharacter = null;

// Function to choose a random character
function choose_random_character() {
  const data = readFileSync('persons.json', 'utf-8');
  
  if (data.length === 0) {
    console.log("No characters found in persons.json");
    return;
  }

  const characters = JSON.parse(data);
  
  if (characters.length === 0) {
    console.log("No characters to choose from.");
    return;
  }

  // Choose a random character
  const randomIndex = Math.floor(Math.random() * characters.length);
  currentCharacter = characters[randomIndex];
  console.log("Today's character is:", currentCharacter);
}

// Set an interval to update the character every 24 hours (86,400,000 milliseconds)
const oneDay = 24 * 60 * 60 * 1000;

setInterval(() => {
  choose_random_character();
}, oneDay);

// Call the function once when the server starts
choose_random_character();

// Create an HTTP server to serve the current character
const server = http.createServer((req, res) => {
  if (req.url === '/character') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(currentCharacter));
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
