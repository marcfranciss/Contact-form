import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <section id='contact-form-app'>
        <form action='' className='contact-form'></form>
      </section>
    </main>
  );
}

export default App;
