import { useState , useEffect} from "react";
import './global-random.css';
import pinGenerator from "../../utils/pinGenerator";


function Pin() {

    const [length, setLength] = useState(8);

    const [getPassword, setGetPassword] = useState('');

    useEffect(() => {
        setGetPassword(pinGenerator(
            length,
        ));
    }, [length]);

    const handleRefresh = () => {
        let newPassword = '';
        newPassword = pinGenerator(
            length,
        )
        setGetPassword(newPassword);
    }

    const handleCopy = async () => {
        if (!getPassword) return;

        try {
            await navigator.clipboard.writeText(getPassword);
            alert('Successfully Copied Pin!');
        } catch (err) {
            console.error("Copy failed", err);
        }
    }

    return (
        <>
            <div className='row'>
                <span>Characters</span>
                <input type='range' min="2" max="10" value={length} onChange={(event) => setLength(event.target.value)} />
                <span className='count-box'>{length}</span>
            </div>

            <div className='password-section'>
                <p className='form-title low-text'>Generated Password</p>
                <input type='text' className='password-output' value={pinGenerator(length)} readOnly />
            </div>

            <div className='btn-row'>
                <button className='primary-btn' onClick={handleCopy}>Copy Password</button>
                <button className='secondary-btn' onClick={handleRefresh}>Refresh Password</button>
            </div>
        </>
    );
}
export default Pin;