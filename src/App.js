import logo from './logo.svg';
import './App.css';
import { Hello } from './Hello';
import Header from './Header';
import Footer from './Footer';
import Employee from './Employee';
import StudentDetails from './StudentDetails';

let stud = {
  sid:'101306676',
  fn:'Phuong',
  ln:'Hoang',
  college:'Geogre Brown College',
  city: 'Toronto'
}

function App() {
  return (
    // <>
    //   <Header></Header>
    //   <Hello/>
    //   <StudentDetails fn='Phuong' ln='Hoang' city='Toronto' college='GBC'></StudentDetails>
    //   <Employee employee={emp} />
    //   <Footer message="I'm footer as param 1"></Footer>
    //   <Footer message="I'm footer as param 2"></Footer>
    // </>
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development - I</h1>
        <h3>React JS Programming Week09 Lab Exercise</h3>
        <StudentDetails student={stud}></StudentDetails>
      </header>
    </div>
  );
}

export default App;
