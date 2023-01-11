function App() {
  const handleCLick = () => {
    console.log('Click');
  };

  return (
    <div>
      <button onClick={handleCLick}>Add Animal</button>
    </div>
  );
}

export default App;