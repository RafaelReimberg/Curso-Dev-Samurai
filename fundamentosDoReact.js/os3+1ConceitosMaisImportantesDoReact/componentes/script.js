const Topic = () => {
  const increaseCount = () => {
    console.log('increase count...');
  }

  return <div>PHP (1) <button onClick={increaseCount}>+1</button></div>
}

const App = () => {
  // states
  // funções/lógica

  // função de rendering
  return (
    <>
      <h1>Vota Tópico</h1>
      <Topic />
      <Topic />
      <Topic />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
