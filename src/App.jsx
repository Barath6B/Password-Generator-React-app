import './App.css';
import DarkVeil from './components/DarkVeil';
import Header from './components/Header';
import HomePage from './Pages/HomePages';
import Generator from './Pages/Generator';
import { useRef } from 'react';

function App() {
  const topRef = useRef(null);
  const generatorRef = useRef(null);

  return (
    <div className='app-bg'>
      <div ref={topRef}></div>
      <DarkVeil />
      <Header
        onTopClick={() => topRef.current.scrollIntoView({ behavior: "smooth" })} />

      <HomePage
        onLetsGo={() => {
          const y =
            generatorRef.current.getBoundingClientRect().top +
            window.pageYOffset -
            80; 

          window.scrollTo({ top: y, behavior: "smooth" });
        }}
      />
      <div ref={generatorRef}>
        <Generator />
      </div>


    </div>
  );
}

export default App;
