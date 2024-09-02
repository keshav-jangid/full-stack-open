import { useState } from "react";

const Statisticline = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
);
const Statistics = (props) => {
  if (props.all > 0) {
    return (
      <div>
        <table>
          <tbody>
            <Statisticline text="good" value={props.good} />
            <Statisticline text="neutral" value={props.neutral} />
            <Statisticline text="bad" value={props.bad} />
            <Statisticline text="all" value={props.all} />
            <Statisticline text="average" value={props.average} />
            <Statisticline text="positive" value={props.positive} />
          </tbody>
        </table>
      </div>
    );
  } else {
    return <p>no feedback is given</p>;
  }
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + bad + neutral;
  const average = all / 3;
  const positive = all ? good / all : 0;
  return (
    <>
      <h1>Give Feed back</h1>

      <Button onClick={() => setGood(good + 1)} text={"Good"} />
      <Button onClick={() => setNeutral(neutral + 1)} text={"Neutral"} />
      <Button onClick={() => setBad(bad + 1)} text={"Bad"} />

      <h2>statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </>
  );
};

export default App;
