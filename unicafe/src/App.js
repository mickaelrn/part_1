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
  return(
    <>
      <Title text="Statistics" />
      <p>good : {props.good}</p>
      <p>neutral : {props.neutral}</p>
      <p>bad : {props.bad}</p>
    </>
  )
}
const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setGoodValue = () => {
    setGood(good + 1)
  }
  const setNeutralValue = () => {
    setNeutral(neutral + 1)
  }
  const setBadValue = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Title text="Give feedback" />
      <Button text="good" handleClick={setGoodValue} />
      <Button text="neutral" handleClick={setNeutralValue} />
      <Button text="bad" handleClick={setBadValue} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
};

export default App;
