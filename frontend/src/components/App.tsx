import "../App.scss";
import { Header, Footer, Main } from "./base";
import { useEffect } from "react";
import { initUserID } from "../store/features/userSlice";
import { useAppDispatch } from "../store/hooks";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initUserID());
  }, []);

  return (
    <div className="flex flex-col h-full">
      <header className="flex justify-center bg-green-800 pt-4 pb-4">
        <div className="flex max-w-6xl pl-16 pr-16 w-full">
          <Header />
        </div>
      </header>
      <main className="flex justify-center flex-grow">
        <div className="flex max-w-6xl pl-16 pr-16 w-full">
          <Main />
        </div>
      </main>
      <footer className="flex justify-center bg-green-800 pt-4 pb-4">
        <div className="flex max-w-6xl pl-16 pr-16 w-full">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
