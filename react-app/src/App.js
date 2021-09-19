import logo from './logo.svg';
import './App.css';
import {Button} from './stories/Button';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload!
                </p>
                <Button className={'boom'} primary={true} backgroundColor={'red'} size={12} label={'boom'} onClick={() => (alert('bomo'))}/>
            <Button
                primary={true}
                backgroundColor={'blue'}
                size={46}
                label={'boom 2'}
                onClick={() => (alert('bomo'))}/>

            </header>
        </div>
    );
}

export default App;
