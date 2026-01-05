import '../styles/Generator.css';
import { useState } from 'react';
import Random from './Formbutton/Random.jsx';
import Pin from './Formbutton/Pin.jsx';
import Memorize from './Formbutton/Memorize.jsx';

function Generator() {

    const quotes = [
        "Random beats predictable. Every time",
        "Creativity meets security",
        "The best password is one no one can guess",
        "Security starts with what you choose to protect",
        "Longer passwords are harder to crack — and easier to trust"
    ]

    const getRandomQuote = () =>
        quotes[Math.floor(Math.random() * quotes.length)];

    const [quote] = useState(getRandomQuote);

    const [type, setType] = useState('random');

    return (
        <div className="form-container">
            <div className='left-container'>
                {quote}
            </div>

            <div className='right-container'>
                <p className='form-title'>choose type of Password</p>

                <div className='type-selector'>
                    <button className={`type-btn ${type === "random" ? "active" : ""}`} onClick={() => setType('random')}>Random</button>
                    <button className={`type-btn ${type === "memorable" ? "active" : ""}`} onClick={() => setType('memorable')}>Memorable</button>
                    <button className={`type-btn ${type === "pin" ? "active" : ""}`} onClick={() => setType('pin')}>PIN</button>
                </div>

                <p className='form-title'>Customize your new Password</p>

                {type === "random" && <Random />}
                {type === "pin" && <Pin />}
                {type === "memorable" && <Memorize />}

            </div>
        </div>
    );
}

export default Generator;