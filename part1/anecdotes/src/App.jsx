import React, { useState } from "react";

const selectrandom = (anecdotes) => {
  const random = Math.floor(Math.random() * anecdotes.length);

  return random;
};
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  const [vote, setVote] = useState(Array(anecdotes.length).fill(0));

  console.log(selected);
  console.log(vote);

  const handlevote = () => {
    const newvotes = [...vote];
    newvotes[selected] += 1;
    setVote(newvotes);
  };
  const mostVotes = () => {
    const max = Math.max(...vote);
    console.log(selected[max]);
    return max;
  };

  return (
    <>
      <div>
        {anecdotes[selected]}
        <p>has {vote[selected]} votes</p>
      </div>

      <button onClick={handlevote}>vote</button>
      <button
        anecdotes={anecdotes}
        onClick={() => setSelected(selectrandom(anecdotes))}
      >
        Next anecdote
      </button>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[vote.indexOf(mostVotes())]}</p>
        <p>has {mostVotes()} votes</p>
      </div>
    </>
  );
};

export default App;
