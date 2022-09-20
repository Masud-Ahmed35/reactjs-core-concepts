import logo from './logo.svg';
import './App.css';

const amarBou = {
  name: 'Tumpa Ahmed',
  age: 25,
  hobby: 'Serial Dekha'
}

const amarBouStyle = {
  color: 'pink',
  backgroundColor: 'green',
  paddingRight: '25px',
  paddingLeft: '25px',
  borderRadius: '11px',
  marginTop: '20px',
  fontFamily: 'sans',
  border: '5px solid khaki'
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="professor">
          <h2>Learn React With Professor</h2>
        </div>
        {/* Amar Bou  */}
        <div className="amarAkmatroBou" style={amarBouStyle}>
          <h3>Amar Bou er Naam {amarBou.name}.</h3>
          <p>Tar age {amarBou.age} Tai se Aktu besi Pakna.</p>
          <p>Tar Hobby holo "<span style={{ color: 'orange', fontSize: '30px', fontWeight: '700' }}>{amarBou.hobby}</span>".</p>
        </div>
        {/* -----Conponent---- */}
        <Person name='Tumpa Ahmed' nayok='Professor M' hobby='Sir Ke Valobasa'></Person>
        <Person name='Tumpa Banu' nayok='Pankha Masud' hobby='Ghuraghuri'></Person>

      </header>
    </div>
  );
}

function Person(props) {
  return (
    <div className='person'>
      <h3>Nayika: {props.name}</h3>
      <p>Nayok: {props.nayok}</p>
      <h5>Hobby: {props.hobby}</h5>
    </div>
  );
}

export default App;
