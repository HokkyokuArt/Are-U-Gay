import { useState } from 'react';
import './AreUGay.scss';
import { IXY, getNewPosition } from './AreUGayService';


const AreUGay = ({ mostraBg, setMostraBg }: { mostraBg: boolean, setMostraBg: React.Dispatch<React.SetStateAction<boolean>>; }) => {

  const [position, setPosition] = useState<IXY>({ x: 0, y: 0 });

  const handleNoMouseOver = ({ clientX, clientY }: MouseEvent, { classList }: Element) => {
    if (!mostraBg) {
      const newBtnPosition = getNewPosition(clientX, clientY, position);
      setPosition(newBtnPosition);
    } else {
      classList.add('mostraBg');
    }
  };

  const handleYesClick = () => {
    setMostraBg(true);
    document.querySelector("link[rel*='icon']")?.setAttribute('href', 'bandeira_lgbt.png');
    document.title = '?';
  };

  return (
    <div className='wraper'>
      <h1>Are U GAY?</h1>
      <div className="buttons-container">

        <button className={`effect btn ${mostraBg ? 'rainbowYes' : ''}`} onClick={handleYesClick}>
          <div id='yes' className={mostraBg ? 'rainbowYes' : ''}>
            <p className='a'>Yes</p>
            <p className='b'>, I'm very fucking gay!!!</p>
          </div>
        </button>

        <button
          id='no'
          className='btn rainbow'
          style={{ transform: `translate(${position.x}px, ${position.y}px )` }}
          onMouseOver={({ nativeEvent, target }) => handleNoMouseOver(nativeEvent, target as Element)}
          onClick={({ nativeEvent, target }) => handleNoMouseOver(nativeEvent, target as Element)}
          
       >
          Nop
        </button>
      </div>
    </div>
  );
};

export default AreUGay;