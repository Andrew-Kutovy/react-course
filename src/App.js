import './App.css';
import Simpson from "./Components/Simpson/Simpson";
import Character from "./Components/Character/Character";

function App() {
  return (
    <div className="App">
        <div className={'simpsons'}>
            <Simpson name={'Bart'} surname={'Simpson'} age={10} gender={'male'}
                     image={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'} />
            <Simpson name={'Homer'} surname={'Simpson'} age={40} gender={'male'}
                     image={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
            <Simpson name={'Marge'} surname={'Simpson'} age={38} gender={'female'}
                     image={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'} />
            <Simpson name={'Lisa'} surname={'Simpson'} age={9} gender={'female'}
                     image={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'} />
            <Simpson name={'Maggie'} surname={'Simpson'} age={1} gender={'female'}
                     image={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'} />
        </div>
        <div className={'characters'}>
            <Character id={'3'} name={'Summer Smith'} status={'Alive'} species={'Human'} gender={'Female'}
                image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}/>
            <Character id={'48'} name={'Black Rick'} status={'Alive'} species={'Human'} gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/48.jpeg'}/>
            <Character id={'102'} name={'Donna Gueterman'} status={'Dead'} species={'Robot'} gender={'Female'}
                image={'https://rickandmortyapi.com/api/character/avatar/102.jpeg'}/>
            <Character id={'221'} name={'Melissa'} status={'Alive'} species={'Mythological Creature'} gender={'Female'}
                image={'https://rickandmortyapi.com/api/character/avatar/221.jpeg'}/>
            <Character id={'381'} name={'Woman Rick'} status={'Alive'} species={'Alien'} gender={'Female'}
                image={'https://rickandmortyapi.com/api/character/avatar/381.jpeg'}/>
            <Character id={'803'} name={'40 Years Old Morty'} status={'unknown'} species={'Human'} gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/803.jpeg'}/>
        </div>
    </div>
  );
}

export default App;
