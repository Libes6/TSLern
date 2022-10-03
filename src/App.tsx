export interface AppInterface {
  name: string;
  age: number;
  categories?: string;
}

function App({ name, age, categories }: AppInterface) {
  return (
    <div className="App">
      <h1>{name}</h1>
      Максим {age} года
      <p>{categories}</p>
    </div>
  );
}

export default App;
