import Card from "./Card";
import './App.css';
import './Card.css';


function App(){
  return(
    <div className="app">
      <h1>Courses</h1>
      <div className="mainbox">
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className="app">
      <h1>Student</h1>
      <div className="mainbox">
        <Card/>
        <Card/>
        <Card/>
      </div>

      </div>
      
    </div>
  );
}

export default App;