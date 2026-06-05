import { useState } from "react";

const jokes = [
  {
    joke: "Why did the JavaScript developer quit his job? Because he didn't get arrays!",
    likes: 0,
  },
  {
    joke: "Why do JavaScript developers prefer promises over callbacks? Because they don't like to be kept waiting!",
    likes: 0,
  },
  {
    joke: "What's the object-oriented way to become wealthy in JavaScript? Inheritance!",
    likes: 0,
  },
  {
    joke: "Why did the JavaScript function go to therapy? It had too many anonymous functions calling it!",
    likes: 0,
  },
  {
    joke: "What's a programmer's favorite hangout place? Foo Bar!",
    likes: 0,
  },
  {
    joke: "Why did the JavaScript developer go broke? Because he lost his prototypes!",
    likes: 0,
  },
  {
    joke: "Why did the function and the array go to couples therapy? They had trouble understanding each other's scope!",
    likes: 0,
  },
  {
    joke: "Why do JavaScript programmers prefer the dark mode? Because they like to code with reduced light pollution!",
    likes: 0,
  },
  {
    joke: "What's a JavaScript developer's favorite dance move? The Callback!",
    likes: 0,
  },
  {
    joke: "Why did the JavaScript code go to rehab? Because it had too many dependencies!",
    likes: 0,
  },
];

function App() {
  const [allJokes, setAllJokes] = useState(jokes);
  const [currentJoke, setCurrentJoke] = useState(jokes[0]);

  const nextJoke = () => {
    const randomIndex = Math.floor(Math.random() * allJokes.length);
    setCurrentJoke(allJokes[randomIndex]);
  };

  const likeJoke = () => {
    const updatedJokes = allJokes.map((j) =>
      j.joke === currentJoke.joke
        ? { ...j, likes: j.likes + 1 }
        : j
    );

    setAllJokes(updatedJokes);

    const updatedCurrent = updatedJokes.find(
      (j) => j.joke === currentJoke.joke
    );

    setCurrentJoke(updatedCurrent);
  };

  const mostLiked = allJokes.reduce((max, joke) =>
    joke.likes > max.likes ? joke : max
  );

  return (
    <div>
      <h1>JavaScript Jokes</h1>

      <p>{currentJoke.joke}</p>

      <button onClick={likeJoke}>❤️</button>
      <span> {currentJoke.likes}</span>

      <br /><br />

      <button onClick={nextJoke}>Next Joke</button>

      <h2>Most Liked JS Joke</h2>
      <p>
        {mostLiked.joke}
        <br />
        Likes: {mostLiked.likes}
      </p>
    </div>
  );
}

export default App;