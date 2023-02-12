import AreUGay from 'components/Form/AreUGay';
import { useEffect, useState } from 'react';
import './background.scss';
import { getRandomInt } from 'components/Form/AreUGayService';

import bgs from 'assets/background.json';

const App = () => {
    const [bg, setBg] = useState<number>(1);
    const [mostraBg, setMostraBg] = useState<boolean>(false);

    useEffect(() => {
        setBg(getRandomInt(0, bgs.length - 1));
    }, []);

    return (
        <div id="bg" className={mostraBg ? 'rainbowBg' : ''}>
            {mostraBg &&
                <img
                    src={`backgrounds/${bgs[bg].name}.${bgs[bg].extension}`}
                    alt={bgs[bg].name[0].toUpperCase() + bgs[bg].name.substring(1) + ' meme'}
                />
            }
            <AreUGay mostraBg={mostraBg} setMostraBg={setMostraBg} />
        </div>
    );
};

export default App;