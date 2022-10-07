import { useState } from "react";

const Title = (props) => {
  return (
    <>
      <h1>{props.text}</h1>
    </>
  );
};
const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  );
};
const Statistics = (props) => {
  if (props.all === 0) {
  } else {
    return (
      <>
        <tr index={props.text + props.value}>
          <td>{props.text}</td>
          <td> </td>
          <td>{props.value}</td>
        </tr>
      </>
    );
  }
};
const Empty = (props) => {
  if (props.all === 0) {
    return <p>No feedback given</p>;
  } else {
  }
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [average, setAverage] = useState(0);
  let all = good + bad + neutral;

  const setGoodValue = () => {
    setGood(good + 1);
    setAverage(average + 1);
  };
  const setNeutralValue = () => {
    setNeutral(neutral + 1);
    setAverage(average + 0);
  };
  const setBadValue = () => {
    setBad(bad + 1);
    setAverage(average - 1);
  };

  return (
    <div>
      <Title text="Give feedback" />
      <Button text="good" handleClick={setGoodValue} />
      <Button text="neutral" handleClick={setNeutralValue} />
      <Button text="bad" handleClick={setBadValue} />
      <Title text="Statistics" />
      <Empty all={all}/>
      <table>
        <tbody>
          <Statistics text="good" value={good} all={all} />
          <Statistics text="neutral" value={neutral} all={all} />
          <Statistics text="bad" value={bad} all={all} />
          <Statistics text="all" value={good + neutral + bad} all={all} />
          <Statistics text="average"value={average / all} all={all} />
          <Statistics text="positive" value={(good * 100) / (all) + " %"} all={all} />
        </tbody>
      </table>
    </div>
  );
};

export default App;
