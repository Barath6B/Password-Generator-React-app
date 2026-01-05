import { useState , useEffect } from "react";
import './global-random.css';

import generatePassword from "../../utils/passwordgenerator";

function Random() {
    const [length, setLength] = useState(8);

    const [useUpperCase, setUseUpperCase] = useState(false);
    const [useNumbers, setUseNumbers] = useState(false);
    const [useSymbols, setUseSymbols] = useState(false);

    const [getPassword, setGetPassword] = useState('');

    useEffect(() => {
        setGetPassword(generatePassword(
            length,
            useUpperCase,
            useNumbers,
            useSymbols
        ));
    }, [length, useUpperCase, useNumbers, useSymbols]);

    const handleRefresh = () => {
        let newPassword = '';
        newPassword = generatePassword(
            length,
            useUpperCase,
            useNumbers,
            useSymbols
        )
        setGetPassword(newPassword);
    }

    const handleCopy = async () => {
        if (!getPassword) return;

        try {
            await navigator.clipboard.writeText(getPassword);
            alert('Successfully Copied Password!');
        } catch (err) {
            console.error("Copy failed", err);
        }
    }

    return (
        <>
            <div className='row'>
                <span>Characters</span>
                <input type='range' min="8" max="32" value={length} onChange={(event) => setLength(event.target.value)} />
                <span className='count-box'>{length}</span>
            </div>

            <div className='row checkbox-row'>
                <label className="checkbox-item">
                    <input
                        type="checkbox"
                        checked={useUpperCase}
                        onChange={(e) => setUseUpperCase(e.target.checked)}
                    />
                    <span className="checkmark"></span>
                    Upper Characters
                </label>

                <label className="checkbox-item">
                    <input
                        type="checkbox"
                        checked={useNumbers}
                        onChange={(e) => setUseNumbers(e.target.checked)}
                    />
                    <span className="checkmark"></span>
                    Numbers
                </label>

                <label className="checkbox-item">
                    <input
                        type="checkbox"
                        checked={useSymbols}
                        onChange={(e) => setUseSymbols(e.target.checked)}
                    />
                    <span className="checkmark"></span>
                    Symbols
                </label>


            </div>
            <div className='password-section'>
                <p className='form-title low-text'>Generated Password</p>
                <input type='text' className='password-output' value={generatePassword(length, useUpperCase, useNumbers, useSymbols)} readOnly />
            </div>

            <div className='btn-row'>
                <button className='primary-btn' onClick={handleCopy}>Copy Password</button>
                <button className='secondary-btn' onClick={handleRefresh}>Refresh Password</button>
            </div>
        </>
    );
}

export default Random;
