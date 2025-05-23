import { useEffect, useState } from 'react'; // imports, from the react library, two hooks: useEffect and useState. useState basically stores value while the code is run (here, this is modified by the setMessage function). useEffect is a side effect which, in react, is anything that deals with the outside world. In my code, it is used to fetch data from the backend, specifically the message we then use setMessage to update the other hook. This is done after the main component loads.

function App() { // defines the main React component, named App
  const [message, setMessage] = useState(''); //this declares a state variable named message which is initially an empty string. setMessage is the function used to update it. It is set equal to useState because using this function will return an array with these two items.

  useEffect(() => { // sets up a side effect that happens when the main component activates. In this caise, I've configured it below to get data from my backend
    fetch('http://localhost:3000/api/hello') // sends a GET request to the back end
      .then((res) => res.json()) // parses the response to turn it into a JSON object with which the code can interact
      .then((data) => setMessage(data.message)) // takes the retruned value and uses the setMessage to update the value of the message function with it
      .catch((err) => console.error('Error fetching:', err)); // catches any errors and adds them to the console
  }, []); // this is the dependency array, which basically tells react that it needs to reload something whenever one of the values here changes (react, hence the name). Since there are no values, it will never reload.

  return ( // simple UI with HTML stuff I primarily learned in IGCSE. displays the message variable we acquired earlier    
    <div>
      <h1>Frontend</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App; // exports the app, essentially allowing other files in the program to interact with it (Since by default, javascript files are self containing and invisible to other apps). 

// main source: https://youtu.be/SqcY0GlETPk?feature=shared