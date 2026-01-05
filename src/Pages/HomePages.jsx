import DarkVeil from '../components/DarkVeil';
import Header from '../components/Header';
import '../styles/HomePage.css'

function HomePage({ onLetsGo }) {
    return (
        <>
            <div className='bg-style'>

                <div className='centre-container'>
                    <div className='big-text'>Password Generator</div>
                    <div className='big-text'>For Creative Passwords</div>

                    <p className='small-text'>Highly customized and Best Password Generator that helps you keep your account safe secure</p>
                    <button className="lets-go-btn" onClick={onLetsGo}>
                        Let's Go →
                    </button>
                </div>
            </div>
        </>
    );
}

export default HomePage;