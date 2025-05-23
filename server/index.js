const express = require('express'); // inports the express library. This is a framework used for building servers.
const cors = require('cors') // CORS middleware. This will let me allow or block data requests from different origins or ports (for example my front end, which is on a different port)
const app = express(); // creates an express application instance. This is what we will use to configure the server later.
const PORT = 3000; // defines the port the server will listen on

app.use(cors()); // this line basically activate CORS
app.use(express.json()); // activates express. This basically converts any data my code receives into a JavaScript object I will be able to work with.

app.get('/', (req, res) => { // sets up an end point. this is bascially a sanity check to check everything is working by going on the port for our backend (local host 3000)
  res.send('API is working');
});

app.listen(PORT, () => { // starts the server on the port we'd defined earlier.  
  console.log(`Server is running on http://localhost:${PORT}`); // prints a message in the console that everything is working properly
});

app.get('/api/hello', (req, res) => { // another end point similar to the one we'd set up earlier. this one is a JSON object for the frontend in app.jsx it is what someone will see if they go on the frontend at (local host 5173)
    res.json({ message: 'Hello from the backend!' });
  });
  
// how i learnt to do this: https://youtu.be/Oe421EPjeBE?feature=shared