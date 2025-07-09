import Button from "./components/Button";
import Menu from "./components/Menu";

function App() {
  const handleOnClick = (text: string, counter: number) => {
    console.log(text, counter);
  };

  return (
    <>
      <Menu text="Muala">
        <Button onClick={handleOnClick}>Ksiazulo</Button>
        <Button onClick={handleOnClick}>Mualan</Button>
        <Button onClick={handleOnClick}>Wojek</Button>
        <Button onClick={handleOnClick}>Ziutek</Button>
      </Menu>
    </>
  );
}

export default App;
