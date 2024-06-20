


import { useState } from 'react';
import './App.css'
import Display from './components/Display';
import Settings from './components/SettingsDisplay';

function App() {
    const [settingsVisibility, setSettingsVisibility] = useState<boolean>(false);

    function changeVisibility () {
        setSettingsVisibility(!settingsVisibility);
        console.log(settingsVisibility);
    }

return <div className='h-screen flex justify-center'>
    <Display toggleSettings={changeVisibility}></Display>
    {settingsVisibility === true && <Settings></Settings>}
</div>
}

export default App;
