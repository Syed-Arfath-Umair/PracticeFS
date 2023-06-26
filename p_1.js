// import logo from './logo.svg';
import './App.css';

const App = () =>{
  const name = 'Hansa'
  const age = 18
  return(
    <div>
      <Hello name={name} age={age}/>
    </div>
  )
}

const Hello = ({name, age}) =>{
  return(
    <div>
      <p>
        The Name Is {name} And Age Is {age}.
      </p>
    </div>
  )
}

export default App;
