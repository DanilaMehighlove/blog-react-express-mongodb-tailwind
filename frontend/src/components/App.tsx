import "../App.scss";
import { Header } from "./main";

function App() {
  return (
    <div className="flex flex-col h-full">
      <header className="flex justify-center bg-green-800 pt-4 pb-4">
        <div className="flex max-w-6xl pl-16 pr-16 w-full">
          <Header />
        </div>
      </header>
      <main className="flex justify-center flex-grow">
        <div className="flex max-w-6xl pl-16 pr-16 w-full">
          MAIN
        </div>
      </main>
      <footer className="flex justify-center bg-green-800 pt-4 pb-4">
        <div className="flex max-w-6xl pl-16 pr-16 w-full">
          FOOTER
        </div>
      </footer>
    </div>
  );
}

export default App;
